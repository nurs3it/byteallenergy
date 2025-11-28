/**
 * Survey storage service
 * Handles saving survey responses (can be extended to use API/database)
 */

import { SurveyResponse, SurveySubmissionResult } from './types';

export class SurveyStorageService {
  private storageKey = 'survey_responses';

  /**
   * Submit a survey response
   * In production, this would call an API endpoint
   */
  async submitResponse(response: SurveyResponse): Promise<SurveySubmissionResult> {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // For now, save to localStorage (in production, this would be an API call)
      const responses = this.getAllResponses();
      const responseId = this.generateResponseId();
      
      responses.push({
        ...response,
        id: responseId,
        submittedAt: new Date(),
      });

      if (typeof window !== 'undefined') {
        localStorage.setItem(this.storageKey, JSON.stringify(responses));
      }

      // Log to console for development
      console.log('Survey submitted:', response);

      return {
        success: true,
        message: 'Survey submitted successfully',
        responseId,
      };
    } catch (error) {
      console.error('Error submitting survey:', error);
      return {
        success: false,
        message: 'Failed to submit survey. Please try again.',
      };
    }
  }

  /**
   * Get all survey responses from storage
   */
  private getAllResponses(): Array<SurveyResponse & { id: string }> {
    if (typeof window === 'undefined') return [];
    
    try {
      const stored = localStorage.getItem(this.storageKey);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  /**
   * Generate a unique response ID
   */
  private generateResponseId(): string {
    return `response_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Get responses for a specific survey
   */
  getResponsesBySurveyId(surveyId: string): SurveyResponse[] {
    return this.getAllResponses().filter(r => r.surveyId === surveyId);
  }

  /**
   * Check if user has already submitted this survey
   */
  hasSubmitted(surveyId: string): boolean {
    if (typeof window === 'undefined') return false;
    
    const key = `survey_submitted_${surveyId}`;
    return localStorage.getItem(key) === 'true';
  }

  /**
   * Mark survey as submitted
   */
  markAsSubmitted(surveyId: string): void {
    if (typeof window === 'undefined') return;
    
    const key = `survey_submitted_${surveyId}`;
    localStorage.setItem(key, 'true');
  }

  /**
   * Clear submission flag (for testing)
   */
  clearSubmissionFlag(surveyId: string): void {
    if (typeof window === 'undefined') return;
    
    const key = `survey_submitted_${surveyId}`;
    localStorage.removeItem(key);
  }
}

export const surveyStorage = new SurveyStorageService();

