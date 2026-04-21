/**
 * Universal Survey Field Component
 * Renders different field types based on configuration
 */

'use client';

import { SurveyField as SurveyFieldType, SurveyFieldValue } from '@/lib/services/survey/types';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { useAnalytics } from '@/hooks/useAnalytics';
import { useEffect, useRef } from 'react';

interface SurveyFieldProps {
  field: SurveyFieldType;
  value: SurveyFieldValue;
  onChange: (value: SurveyFieldValue) => void;
  error?: string;
  disabled?: boolean;
  formId?: string;
}

export function SurveyField({
  field,
  value,
  onChange,
  error,
  disabled = false,
  formId,
}: SurveyFieldProps) {
  const { trackField } = useAnalytics();
  const hasTrackedFocus = useRef(false);

  useEffect(() => {
    if (error && formId) {
      trackField(formId, field.label, 'error');
    }
  }, [error, formId, field.label, trackField]);

  const handleFocus = () => {
    if (!hasTrackedFocus.current && formId) {
      trackField(formId, field.label, 'focus');
      hasTrackedFocus.current = true;
    }
  };

  const handleBlur = () => {
    if (formId) {
      trackField(formId, field.label, 'blur');
    }
  };
  const renderField = () => {
    switch (field.type) {
      case 'text':
      case 'email':
      case 'phone':
        return (
          <Input
            type={field.type}
            value={typeof value === 'string' ? value : ''}
            onChange={(e) => onChange(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={field.placeholder}
            disabled={disabled}
            aria-invalid={!!error}
            className={cn(error && 'border-destructive')}
          />
        );

      case 'textarea':
        return (
          <Textarea
            value={typeof value === 'string' ? value : ''}
            onChange={(e) => onChange(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={field.placeholder}
            disabled={disabled}
            aria-invalid={!!error}
            className={cn(
              'min-h-[120px] resize-y',
              error && 'border-destructive'
            )}
          />
        );

      case 'rating':
      case 'scale':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              {field.scale?.minLabel && <span>{field.scale.minLabel}</span>}
              {field.scale?.maxLabel && <span>{field.scale.maxLabel}</span>}
            </div>
            <div className="flex items-center gap-2">
              {Array.from(
                { length: (field.scale?.max || 5) - (field.scale?.min || 1) + 1 },
                (_, i) => {
                  const scaleValue = (field.scale?.min || 1) + i;
                  return (
                    <button
                      key={scaleValue}
                      type="button"
                      onClick={() => onChange(scaleValue)}
                      disabled={disabled}
                      className={cn(
                        'flex-1 h-12 rounded-sm border-2 font-medium transition-all',
                        'hover:border-primary hover:bg-accent dark:hover:bg-accent',
                        value === scaleValue
                          ? 'border-primary bg-accent dark:bg-accent text-accent-foreground'
                          : 'border-border',
                        disabled && 'opacity-50 cursor-not-allowed'
                      )}
                    >
                      {scaleValue}
                    </button>
                  );
                }
              )}
            </div>
          </div>
        );

      case 'radio':
        return (
          <div className="space-y-2">
            {field.options?.map((option) => (
              <label
                key={option.value}
                className={cn(
                  'flex items-start gap-3 p-4 rounded-sm border-2 cursor-pointer transition-all',
                  'hover:border-primary hover:bg-accent dark:hover:bg-accent',
                  value === option.value
                    ? 'border-primary bg-accent dark:bg-accent'
                    : 'border-border',
                  disabled && 'opacity-50 cursor-not-allowed'
                )}
              >
                <input
                  type="radio"
                  name={field.id}
                  value={option.value}
                  checked={value === option.value}
                  onChange={(e) => onChange(e.target.value)}
                  disabled={disabled}
                  className="mt-0.5 text-primary focus:ring-ring"
                />
                <div className="flex-1">
                  <div className="font-medium">{option.label}</div>
                  {option.description && (
                    <div className="text-sm text-muted-foreground mt-1">
                      {option.description}
                    </div>
                  )}
                </div>
              </label>
            ))}
          </div>
        );

      case 'checkbox':
        return (
          <div className="space-y-2">
            {field.options?.map((option) => {
              const isChecked = Array.isArray(value) && value.includes(option.value);
              return (
                <label
                  key={option.value}
                  className={cn(
                    'flex items-start gap-3 p-4 rounded-sm border-2 cursor-pointer transition-all',
                    'hover:border-primary hover:bg-accent dark:hover:bg-accent',
                    isChecked
                      ? 'border-primary bg-accent dark:bg-accent'
                      : 'border-border',
                    disabled && 'opacity-50 cursor-not-allowed'
                  )}
                >
                  <input
                    type="checkbox"
                    value={option.value}
                    checked={isChecked}
                    onChange={(e) => {
                      const newValue = Array.isArray(value) ? [...value] : [];
                      if (e.target.checked) {
                        newValue.push(option.value);
                      } else {
                        const index = newValue.indexOf(option.value);
                        if (index > -1) newValue.splice(index, 1);
                      }
                      onChange(newValue);
                    }}
                    disabled={disabled}
                    className="mt-0.5 text-primary focus:ring-ring rounded"
                  />
                  <div className="flex-1">
                    <div className="font-medium">{option.label}</div>
                    {option.description && (
                      <div className="text-sm text-muted-foreground mt-1">
                        {option.description}
                      </div>
                    )}
                  </div>
                </label>
              );
            })}
          </div>
        );

      case 'select':
        return (
          <select
            value={typeof value === 'string' ? value : ''}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            className={cn(
              'w-full h-10 px-3 rounded-md border bg-background text-foreground',
              'focus:outline-none focus:ring-2 focus:ring-ring',
              error && 'border-destructive',
              disabled && 'opacity-50 cursor-not-allowed'
            )}
          >
            <option value="">Select an option...</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'date':
        return (
          <Input
            type="date"
            value={typeof value === 'string' ? value : ''}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            aria-invalid={!!error}
            className={cn(error && 'border-destructive')}
          />
        );

      default:
        return <div>Unsupported field type: {field.type}</div>;
    }
  };

  return (
    <div className="space-y-2">
      <label className="block">
        <div className="font-medium text-foreground mb-1">
          {field.label}
          {field.validation?.required && (
            <span className="text-destructive ml-1">*</span>
          )}
        </div>
        {field.description && (
          <div className="text-sm text-muted-foreground mb-3">
            {field.description}
          </div>
        )}
        {renderField()}
      </label>
      {error && (
        <p className="text-sm text-destructive animate-in fade-in slide-in-from-top-1">
          {error}
        </p>
      )}
      {!error && field.validation?.minLength && field.type === 'textarea' && (
        <p className="text-xs text-muted-foreground">
          {typeof value === 'string' ? value.length : 0} / {field.validation.maxLength || '∞'} characters
          {field.validation.minLength && ` (min ${field.validation.minLength})`}
        </p>
      )}
    </div>
  );
}

