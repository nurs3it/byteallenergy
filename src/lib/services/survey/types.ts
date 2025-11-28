/**
 * Universal Survey/Feedback Service Types
 * Supports various field types for different survey scenarios
 */

export type SurveyFieldType = 
  | 'text'           // Single line text input
  | 'textarea'       // Multi-line text input
  | 'rating'         // 1-5 star rating or 1-10 scale
  | 'radio'          // Single choice
  | 'checkbox'       // Multiple choice
  | 'select'         // Dropdown
  | 'scale'          // Linear scale (e.g., 1-10)
  | 'email'          // Email input
  | 'phone'          // Phone input
  | 'date';          // Date picker

export interface SurveyFieldOption {
  value: string;
  label: string;
  description?: string;
}

export type SurveyFieldValue = string | number | boolean | string[] | null | undefined;

export interface SurveyFieldValidation {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  pattern?: string;
  customValidator?: (value: SurveyFieldValue) => string | null; // Returns error message or null
}

export interface SurveyField {
  id: string;
  type: SurveyFieldType;
  label: string;
  description?: string;
  placeholder?: string;
  validation?: SurveyFieldValidation;
  options?: SurveyFieldOption[];     // For radio, checkbox, select
  scale?: {                          // For rating and scale types
    min: number;
    max: number;
    step?: number;
    minLabel?: string;
    maxLabel?: string;
  };
  defaultValue?: SurveyFieldValue;
  conditional?: {                    // Show field based on another field's value
    fieldId: string;
    operator: 'equals' | 'notEquals' | 'contains' | 'greaterThan' | 'lessThan';
    value: SurveyFieldValue;
  };
}

export interface SurveySection {
  id: string;
  title?: string;
  description?: string;
  fields: SurveyField[];
}

export interface SurveyConfig {
  id: string;
  title: string;
  description: string;
  sections: SurveySection[];
  submitButtonText?: string;
  showProgressBar?: boolean;
  allowMultipleSubmissions?: boolean;
  redirectAfterSubmit?: string;
  onSubmit?: (data: SurveyResponse) => Promise<void>;
}

export interface SurveyResponse {
  surveyId: string;
  responses: Record<string, SurveyFieldValue>;
  submittedAt: Date;
  metadata?: {
    userAgent?: string;
    ipAddress?: string;
    duration?: number; // Time spent filling the survey in seconds
    [key: string]: string | number | undefined;
  };
}

export interface SurveySubmissionResult {
  success: boolean;
  message: string;
  responseId?: string;
  errors?: Record<string, string>;
}

