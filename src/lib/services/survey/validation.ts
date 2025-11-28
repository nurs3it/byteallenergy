/**
 * Survey validation utilities
 */

import { SurveyField, SurveyFieldValue } from './types';

export function validateField(
  field: SurveyField,
  value: SurveyFieldValue
): string | null {
  const validation = field.validation;
  
  if (!validation) return null;

  // Required validation
  if (validation.required) {
    if (value === undefined || value === null || value === '') {
      return `${field.label} is required`;
    }
    if (Array.isArray(value) && value.length === 0) {
      return `${field.label} is required`;
    }
  }

  // Skip other validations if value is empty and not required
  if (!value && !validation.required) {
    return null;
  }

  // String validations
  if (typeof value === 'string') {
    if (validation.minLength && value.length < validation.minLength) {
      return `${field.label} must be at least ${validation.minLength} characters`;
    }
    if (validation.maxLength && value.length > validation.maxLength) {
      return `${field.label} must be at most ${validation.maxLength} characters`;
    }
    if (validation.pattern) {
      const regex = new RegExp(validation.pattern);
      if (!regex.test(value)) {
        return `${field.label} format is invalid`;
      }
    }
  }

  // Number validations
  if (typeof value === 'number') {
    if (validation.min !== undefined && value < validation.min) {
      return `${field.label} must be at least ${validation.min}`;
    }
    if (validation.max !== undefined && value > validation.max) {
      return `${field.label} must be at most ${validation.max}`;
    }
  }

  // Email validation
  if (field.type === 'email' && typeof value === 'string') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'Please enter a valid email address';
    }
  }

  // Custom validator
  if (validation.customValidator) {
    return validation.customValidator(value);
  }

  return null;
}

export function validateAllFields(
  fields: SurveyField[],
  values: Record<string, SurveyFieldValue>
): Record<string, string> {
  const errors: Record<string, string> = {};

  fields.forEach((field) => {
    const error = validateField(field, values[field.id]);
    if (error) {
      errors[field.id] = error;
    }
  });

  return errors;
}

export function shouldShowField(
  field: SurveyField,
  values: Record<string, SurveyFieldValue>
): boolean {
  if (!field.conditional) return true;

  const { fieldId, operator, value: expectedValue } = field.conditional;
  const actualValue = values[fieldId];

  switch (operator) {
    case 'equals':
      return actualValue === expectedValue;
    case 'notEquals':
      return actualValue !== expectedValue;
    case 'contains':
      return Array.isArray(actualValue) && Array.isArray(expectedValue) 
        ? actualValue.some(v => expectedValue.includes(v))
        : Array.isArray(actualValue) && actualValue.includes(expectedValue as string);
    case 'greaterThan':
      return typeof actualValue === 'number' && typeof expectedValue === 'number' 
        ? actualValue > expectedValue 
        : false;
    case 'lessThan':
      return typeof actualValue === 'number' && typeof expectedValue === 'number' 
        ? actualValue < expectedValue 
        : false;
    default:
      return true;
  }
}

