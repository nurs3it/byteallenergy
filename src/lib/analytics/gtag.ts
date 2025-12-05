/**
 * Google Analytics Event Tracking Utilities
 * Comprehensive tracking for user interactions
 */

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'set' | 'js',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-WBXGCNJMXZ";

/**
 * Check if gtag is available
 */
export function isGtagAvailable(): boolean {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
}

/**
 * Track page view
 */
export function trackPageView(url: string, title?: string): void {
  if (!isGtagAvailable()) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
    page_title: title,
  });
}

/**
 * Track custom events
 */
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
): void {
  if (!isGtagAvailable()) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}

/**
 * Track button clicks
 */
export function trackButtonClick(buttonName: string, location?: string): void {
  trackEvent('click', 'button', `${buttonName}${location ? ` - ${location}` : ''}`);
}

/**
 * Track link clicks (internal/external)
 */
export function trackLinkClick(
  linkText: string,
  linkUrl: string,
  isExternal: boolean = false
): void {
  trackEvent('click', isExternal ? 'external_link' : 'internal_link', linkText, undefined);
  
  // Track outbound links separately
  if (isExternal) {
    trackEvent('click', 'outbound', linkUrl);
  }
}

/**
 * Track form submissions
 */
export function trackFormSubmit(formName: string, formId?: string): void {
  trackEvent('submit', 'form', formName);
  
  if (formId) {
    trackEvent('form_submit', formId, formName);
  }
}

/**
 * Track form field interactions
 */
export function trackFormFieldInteraction(
  formName: string,
  fieldName: string,
  action: 'focus' | 'blur' | 'change' | 'error'
): void {
  trackEvent(action, 'form_field', `${formName} - ${fieldName}`);
}

/**
 * Track email clicks
 */
export function trackEmailClick(email: string, location?: string): void {
  trackEvent('click', 'email', email, undefined);
  trackEvent('contact', 'email', location || 'unknown');
}

/**
 * Track phone clicks
 */
export function trackPhoneClick(phone: string, location?: string): void {
  trackEvent('click', 'phone', phone, undefined);
  trackEvent('contact', 'phone', location || 'unknown');
}

/**
 * Track social media clicks
 */
export function trackSocialClick(platform: string, url: string): void {
  trackEvent('click', 'social', platform);
  trackEvent('social_share', platform, url);
}

/**
 * Track video interactions
 */
export function trackVideoInteraction(
  action: 'play' | 'pause' | 'complete' | 'progress',
  videoName: string,
  progress?: number
): void {
  trackEvent(action, 'video', videoName, progress);
}

/**
 * Track search queries
 */
export function trackSearch(query: string, resultsCount?: number): void {
  trackEvent('search', 'site_search', query, resultsCount);
}

/**
 * Track file downloads
 */
export function trackDownload(fileName: string, fileType: string): void {
  trackEvent('file_download', 'download', `${fileName} (${fileType})`);
}

/**
 * Track scroll depth
 */
export function trackScrollDepth(depth: number): void {
  trackEvent('scroll', 'engagement', `${depth}%`);
}

/**
 * Track time on page
 */
export function trackTimeOnPage(timeInSeconds: number, pagePath: string): void {
  trackEvent('timing_complete', 'page_load', pagePath, timeInSeconds);
}

/**
 * Track theme toggle
 */
export function trackThemeToggle(theme: 'light' | 'dark'): void {
  trackEvent('toggle', 'theme', theme);
}

/**
 * Track errors
 */
export function trackError(errorMessage: string, errorLocation?: string): void {
  trackEvent('exception', 'error', errorMessage);
  
  if (errorLocation) {
    trackEvent('error', 'location', errorLocation);
  }
}

/**
 * Track engagement events
 */
export function trackEngagement(
  action: 'view' | 'click' | 'hover' | 'focus',
  element: string,
  location?: string
): void {
  trackEvent(action, 'engagement', `${element}${location ? ` - ${location}` : ''}`);
}

/**
 * Track service page views
 */
export function trackServiceView(serviceName: string, serviceId?: string): void {
  trackEvent('view', 'service', serviceName);
  
  if (serviceId) {
    trackEvent('service_view', serviceId, serviceName);
  }
}

/**
 * Track survey/form completion
 */
export function trackSurveyCompletion(
  surveyName: string,
  completionTime?: number,
  fieldsCompleted?: number
): void {
  trackEvent('complete', 'survey', surveyName, completionTime);
  
  if (fieldsCompleted) {
    trackEvent('survey_completion', surveyName, `${fieldsCompleted} fields`);
  }
}

/**
 * Track CTA (Call to Action) clicks
 */
export function trackCTAClick(ctaText: string, ctaLocation: string, destination?: string): void {
  trackEvent('click', 'cta', ctaText);
  trackEvent('cta_click', ctaLocation, destination || 'unknown');
}

/**
 * Track menu interactions
 */
export function trackMenuInteraction(action: 'open' | 'close' | 'item_click', itemName?: string): void {
  trackEvent(action, 'menu', itemName || 'main_menu');
}

/**
 * Track newsletter signup
 */
export function trackNewsletterSignup(location?: string): void {
  trackEvent('sign_up', 'newsletter', location || 'unknown');
}

/**
 * Track contact form interactions
 */
export function trackContactInteraction(
  action: 'form_start' | 'form_submit' | 'form_error',
  formType: string
): void {
  trackEvent(action, 'contact', formType);
}

/**
 * Track user engagement score
 */
export function trackEngagementScore(score: number, pagePath: string): void {
  trackEvent('engagement_score', 'user_engagement', pagePath, score);
}

/**
 * Track conversion events
 */
export function trackConversion(conversionName: string, value?: number): void {
  trackEvent('conversion', 'goal', conversionName, value);
}

