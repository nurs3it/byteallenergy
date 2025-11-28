/**
 * Survey Configurations Registry
 * Add new survey configurations here
 */

import { SurveyConfig } from '../types';
import { trainingFeedbackConfig } from './trainingFeedback';

// Registry of all available surveys
export const surveyConfigs: Record<string, SurveyConfig> = {
  'training-feedback': trainingFeedbackConfig,
  // Add more survey configurations here as needed:
  // 'customer-satisfaction': customerSatisfactionConfig,
  // 'employee-feedback': employeeFeedbackConfig,
  // etc.
};

/**
 * Get a survey configuration by ID
 */
export function getSurveyConfig(surveyId: string): SurveyConfig | null {
  return surveyConfigs[surveyId] || null;
}

/**
 * Get all available survey IDs
 */
export function getAvailableSurveyIds(): string[] {
  return Object.keys(surveyConfigs);
}

