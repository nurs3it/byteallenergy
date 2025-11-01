/**
 * API utilities for query building and data transformation
 */

import { 
  TeamMembersQueryParams, 
  TeamCategoriesQueryParams, 
  TeamMetadataQueryParams,
  TeamMembersSearchParams,
  CategoryMembersQueryParams 
} from './types';

/**
 * Build query string from parameters
 */
export function buildQueryString(params: Record<string, unknown>): string {
  const searchParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      if (Array.isArray(value)) {
        value.forEach(item => searchParams.append(key, String(item)));
      } else {
        searchParams.append(key, String(value));
      }
    }
  });
  
  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : '';
}

/**
 * Build team members query string
 */
export function buildTeamMembersQuery(params: TeamMembersQueryParams): string {
  return buildQueryString(params as Record<string, unknown>);
}

/**
 * Build team categories query string
 */
export function buildTeamCategoriesQuery(params: TeamCategoriesQueryParams): string {
  return buildQueryString(params as Record<string, unknown>);
}

/**
 * Build team metadata query string
 */
export function buildTeamMetadataQuery(params: TeamMetadataQueryParams): string {
  return buildQueryString(params as Record<string, unknown>);
}

/**
 * Build team members search query string
 */
export function buildTeamMembersSearchQuery(params: TeamMembersSearchParams): string {
  return buildQueryString(params as Record<string, unknown>);
}

/**
 * Build category members query string
 */
export function buildCategoryMembersQuery(params: CategoryMembersQueryParams): string {
  return buildQueryString(params as Record<string, unknown>);
}

/**
 * Convert FormData to regular object (for debugging/logging)
 */
export function formDataToObject(formData: FormData): Record<string, unknown> {
  const obj: Record<string, unknown> = {};
  
  for (const [key, value] of formData.entries()) {
    if (value instanceof File) {
      obj[key] = {
        name: value.name,
        size: value.size,
        type: value.type,
        lastModified: value.lastModified,
      };
    } else {
      obj[key] = value;
    }
  }
  
  return obj;
}

/**
 * Create FormData from object
 */
export function objectToFormData(obj: Record<string, unknown>): FormData {
  const formData = new FormData();
  
  Object.entries(obj).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (value instanceof File) {
        formData.append(key, value);
      } else if (Array.isArray(value)) {
        value.forEach(item => formData.append(key, String(item)));
      } else {
        formData.append(key, String(value));
      }
    }
  });
  
  return formData;
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate URL format
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Format file size for display
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Generate sort string for API
 */
export function generateSortString(field: string, order: 'asc' | 'desc' = 'asc'): string {
  return order === 'desc' ? `-${field}` : field;
}

/**
 * Parse sort string from API
 */
export function parseSortString(sortString: string): { field: string; order: 'asc' | 'desc' } {
  if (sortString.startsWith('-')) {
    return {
      field: sortString.slice(1),
      order: 'desc'
    };
  }
  
  return {
    field: sortString,
    order: 'asc'
  };
}

/**
 * Debounce function for search inputs
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Retry function with exponential backoff
 */
export async function retry<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  baseDelay: number = 1000
): Promise<T> {
  let lastError: Error;
  
  for (let i = 0; i <= maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      
      if (i === maxRetries) {
        throw lastError;
      }
      
      const delay = baseDelay * Math.pow(2, i);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  throw lastError!;
}
