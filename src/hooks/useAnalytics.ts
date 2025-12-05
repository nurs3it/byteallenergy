/**
 * React hook for Google Analytics tracking
 * Provides easy access to tracking functions
 */

import { useCallback } from 'react';
import {
  trackButtonClick,
  trackLinkClick,
  trackEmailClick,
  trackPhoneClick,
  trackSocialClick,
  trackFormSubmit,
  trackFormFieldInteraction,
  trackVideoInteraction,
  trackThemeToggle,
  trackCTAClick,
  trackMenuInteraction,
  trackServiceView,
  trackSurveyCompletion,
  trackContactInteraction,
  trackError,
} from '@/lib/analytics/gtag';

export function useAnalytics() {
  const trackButton = useCallback((buttonName: string, location?: string) => {
    trackButtonClick(buttonName, location);
  }, []);

  const trackLink = useCallback((linkText: string, linkUrl: string, isExternal?: boolean) => {
    trackLinkClick(linkText, linkUrl, isExternal);
  }, []);

  const trackEmail = useCallback((email: string, location?: string) => {
    trackEmailClick(email, location);
  }, []);

  const trackPhone = useCallback((phone: string, location?: string) => {
    trackPhoneClick(phone, location);
  }, []);

  const trackSocial = useCallback((platform: string, url: string) => {
    trackSocialClick(platform, url);
  }, []);

  const trackForm = useCallback((formName: string, formId?: string) => {
    trackFormSubmit(formName, formId);
  }, []);

  const trackField = useCallback((
    formName: string,
    fieldName: string,
    action: 'focus' | 'blur' | 'change' | 'error'
  ) => {
    trackFormFieldInteraction(formName, fieldName, action);
  }, []);

  const trackVideo = useCallback((
    action: 'play' | 'pause' | 'complete' | 'progress',
    videoName: string,
    progress?: number
  ) => {
    trackVideoInteraction(action, videoName, progress);
  }, []);

  const trackTheme = useCallback((theme: 'light' | 'dark') => {
    trackThemeToggle(theme);
  }, []);

  const trackCTA = useCallback((ctaText: string, ctaLocation: string, destination?: string) => {
    trackCTAClick(ctaText, ctaLocation, destination);
  }, []);

  const trackMenu = useCallback((action: 'open' | 'close' | 'item_click', itemName?: string) => {
    trackMenuInteraction(action, itemName);
  }, []);

  const trackService = useCallback((serviceName: string, serviceId?: string) => {
    trackServiceView(serviceName, serviceId);
  }, []);

  const trackSurvey = useCallback((
    surveyName: string,
    completionTime?: number,
    fieldsCompleted?: number
  ) => {
    trackSurveyCompletion(surveyName, completionTime, fieldsCompleted);
  }, []);

  const trackContact = useCallback((
    action: 'form_start' | 'form_submit' | 'form_error',
    formType: string
  ) => {
    trackContactInteraction(action, formType);
  }, []);

  const trackErr = useCallback((errorMessage: string, errorLocation?: string) => {
    trackError(errorMessage, errorLocation);
  }, []);

  return {
    trackButton,
    trackLink,
    trackEmail,
    trackPhone,
    trackSocial,
    trackForm,
    trackField,
    trackVideo,
    trackTheme,
    trackCTA,
    trackMenu,
    trackService,
    trackSurvey,
    trackContact,
    trackError: trackErr,
  };
}

