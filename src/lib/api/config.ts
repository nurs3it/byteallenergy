/**
 * API Configuration
 * Centralized configuration for API requests
 */

export const API_CONFIG = {
  // Base URL for API requests
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  
  // API version prefix
  API_PREFIX: '/api/v1',
  
  // Default headers
  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  
  // Request timeout (in milliseconds)
  TIMEOUT: 10000,
  
  // Enable/disable request logging in development
  LOG_REQUESTS: process.env.NODE_ENV === 'development',
} as const;

/**
 * Build full API URL
 */
export function buildApiUrl(endpoint: string): string {
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  return `${API_CONFIG.BASE_URL}${API_CONFIG.API_PREFIX}/${cleanEndpoint}`;
}

/**
 * API Error class for better error handling
 */
export class ApiError extends Error {
  constructor(
    public status: number,
    public statusText: string,
    public data?: any,
    message?: string
  ) {
    super(message || `API Error: ${status} ${statusText}`);
    this.name = 'ApiError';
  }
}

/**
 * Request options interface
 */
export interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  headers?: Record<string, string>;
  body?: any;
  timeout?: number;
  signal?: AbortSignal;
}

/**
 * Response wrapper interface
 */
export interface ApiResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Headers;
}
