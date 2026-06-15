/**
 * Universal Survey Form Component
 * Main form container that handles survey logic
 */

'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { SurveyConfig, SurveyResponse, SurveyFieldValue, SurveyField as SurveyFieldType } from '@/lib/services/survey/types';
import { validateAllFields, shouldShowField } from '@/lib/services/survey/validation';
import { surveyStorage } from '@/lib/services/survey/storage';
import { SurveyField } from './SurveyField';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { motion } from 'framer-motion';
import { CheckCircle, Warning } from 'phosphor-react';
import { toast } from 'sonner';
import { useAnalytics } from '@/hooks/useAnalytics';

interface SurveyFormProps {
  config: SurveyConfig;
  onSuccess?: (response: SurveyResponse) => void;
}

export function SurveyForm({ config, onSuccess }: SurveyFormProps) {
  const router = useRouter();
  const { trackForm, trackField, trackSurvey, trackError: trackErr } = useAnalytics();
  const [values, setValues] = useState<Record<string, SurveyFieldValue>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [startTime] = useState(Date.now());
  const [formStarted, setFormStarted] = useState(false);

  // Check if already submitted
  useEffect(() => {
    if (!config.allowMultipleSubmissions && surveyStorage.hasSubmitted(config.id)) {
      toast.info('You have already submitted this survey');
      if (config.redirectAfterSubmit) {
        router.push(config.redirectAfterSubmit);
      }
    } else {
      // Track form start
      if (!formStarted) {
        trackForm(config.title, config.id);
        setFormStarted(true);
      }
    }
  }, [config, router, formStarted, trackForm]);

  // Initialize default values
  useEffect(() => {
    const defaultValues: Record<string, SurveyFieldValue> = {};
    config.sections.forEach(section => {
      section.fields.forEach(field => {
        if (field.defaultValue !== undefined) {
          defaultValues[field.id] = field.defaultValue;
        }
      });
    });
    setValues(defaultValues);
  }, [config]);

  // Get all visible fields
  const visibleFields = useMemo(() => {
    const fields: SurveyFieldType[] = [];
    config.sections.forEach(section => {
      section.fields.forEach(field => {
        if (shouldShowField(field, values)) {
          fields.push(field);
        }
      });
    });
    return fields;
  }, [config, values]);

  const handleFieldChange = (fieldId: string, value: SurveyFieldValue) => {
    setValues(prev => ({ ...prev, [fieldId]: value }));
    // Track field interaction
    const field = visibleFields.find(f => f.id === fieldId);
    if (field) {
      trackField(config.id, field.label, 'change');
    }
    // Clear error when user starts typing
    if (errors[fieldId]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[fieldId];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all visible fields
    const validationErrors = validateAllFields(visibleFields, values);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error('Please fix the errors before submitting');
      // Track form errors
      Object.keys(validationErrors).forEach(fieldId => {
        const field = visibleFields.find(f => f.id === fieldId);
        if (field) {
          trackField(config.id, field.label, 'error');
        }
      });
      trackErr(`Form validation failed: ${Object.keys(validationErrors).length} errors`, config.id);
      // Scroll to first error
      const firstErrorField = Object.keys(validationErrors)[0];
      const element = document.getElementById(`field-${firstErrorField}`);
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);

    try {
      const duration = Math.floor((Date.now() - startTime) / 1000);
      
      const response: SurveyResponse = {
        surveyId: config.id,
        responses: values,
        submittedAt: new Date(),
        metadata: {
          duration,
          userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
        },
      };

      // Call custom onSubmit if provided
      if (config.onSubmit) {
        await config.onSubmit(response);
      } else {
        // Use default storage
        const result = await surveyStorage.submitResponse(response);
        
        if (!result.success) {
          throw new Error(result.message);
        }
      }

      // Mark as submitted
      if (!config.allowMultipleSubmissions) {
        surveyStorage.markAsSubmitted(config.id);
      }

      // Track successful submission
      const fieldsCompleted = Object.keys(values).length;
      trackSurvey(config.title, duration, fieldsCompleted);
      trackForm(config.title, config.id);

      // Call success callback
      if (onSuccess) {
        onSuccess(response);
      }

      toast.success('Thank you for your feedback!');

      // Redirect after success
      if (config.redirectAfterSubmit) {
        setTimeout(() => {
          router.push(config.redirectAfterSubmit!);
        }, 1000);
      }
    } catch (error) {
      console.error('Error submitting survey:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      trackErr(`Survey submission failed: ${errorMessage}`, config.id);
      toast.error('Failed to submit survey. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const completionRate = useMemo(() => {
    const requiredFields = visibleFields.filter(f => f.validation?.required);
    if (requiredFields.length === 0) return 100;
    
    const filledFields = requiredFields.filter(f => {
      const value = values[f.id];
      return value !== undefined && value !== null && value !== '' && 
             (!Array.isArray(value) || value.length > 0);
    });
    
    return Math.round((filledFields.length / requiredFields.length) * 100);
  }, [visibleFields, values]);

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Progress indicator */}
      {config.showProgressBar && (
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Completion Progress</span>
              <span className="text-sm text-muted-foreground">{completionRate}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${completionRate}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Sections */}
      {config.sections.map((section, sectionIndex) => {
        const visibleSectionFields = section.fields.filter(field =>
          shouldShowField(field, values)
        );

        if (visibleSectionFields.length === 0) return null;

        return (
          <AnimatedSection key={section.id} delay={sectionIndex * 0.1}>
            <Card>
              <CardContent className="p-6 md:p-8">
                {section.title && (
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold">{section.title}</h2>
                    {section.description && (
                      <p className="text-muted-foreground mt-2">
                        {section.description}
                      </p>
                    )}
                  </div>
                )}

                <div className="space-y-6">
                  {visibleSectionFields.map((field, fieldIndex) => (
                    <motion.div
                      key={field.id}
                      id={`field-${field.id}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: fieldIndex * 0.05 }}
                    >
                      <SurveyField
                        field={field}
                        value={values[field.id]}
                        onChange={(value) => handleFieldChange(field.id, value)}
                        error={errors[field.id]}
                        disabled={isSubmitting}
                        formId={config.id}
                      />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        );
      })}

      {/* Submit button */}
      <AnimatedSection delay={0.3}>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                {completionRate === 100 ? (
                  <>
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>All required fields are completed. You can now submit your feedback.</span>
                  </>
                ) : (
                  <>
                    <Warning className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span>Please complete all required fields before submitting.</span>
                  </>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || completionRate < 100}
                className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-sm shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitting ? 'Submitting...' : (config.submitButtonText || 'Submit')}
              </button>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </form>
  );
}

