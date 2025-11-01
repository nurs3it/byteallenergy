import { API_CONFIG, buildApiUrl, ApiError, RequestOptions, ApiResponse } from './config';

/**
 * Base API client for making HTTP requests
 * Works both on server and client side
 */
export class ApiClient {
  private baseUrl: string;
  private defaultHeaders: Record<string, string>;
  private timeout: number;

  constructor(
    baseUrl: string = API_CONFIG.BASE_URL,
    defaultHeaders: Record<string, string> = API_CONFIG.DEFAULT_HEADERS,
    timeout: number = API_CONFIG.TIMEOUT
  ) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = defaultHeaders;
    this.timeout = timeout;
  }

  /**
   * Make HTTP request
   */
  async request<T = any>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<ApiResponse<T>> {
    const {
      method = 'GET',
      headers = {},
      body,
      timeout = this.timeout,
      signal,
    } = options;

    const url = buildApiUrl(endpoint);
    const requestHeaders = {
      ...this.defaultHeaders,
      ...headers,
    };

    // Prepare request body
    let requestBody: string | FormData | undefined;
    if (body) {
      if (body instanceof FormData) {
        requestBody = body;
        // Remove Content-Type header for FormData (browser will set it with boundary)
        delete requestHeaders['Content-Type'];
      } else {
        requestBody = JSON.stringify(body);
      }
    }

    // Create abort controller for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    // Combine signals if provided
    const finalSignal = signal 
      ? this.combineSignals([controller.signal, signal])
      : controller.signal;

    try {
      if (API_CONFIG.LOG_REQUESTS) {
        console.log(`[API] ${method} ${url}`, { headers: requestHeaders, body });
      }

      const response = await fetch(url, {
        method,
        headers: requestHeaders,
        body: requestBody,
        signal: finalSignal,
      });

      clearTimeout(timeoutId);

      if (API_CONFIG.LOG_REQUESTS) {
        console.log(`[API] Response ${response.status} ${response.statusText}`);
      }

      // Handle non-2xx responses
      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch {
          errorData = await response.text();
        }
        
        throw new ApiError(
          response.status,
          response.statusText,
          errorData,
          `Request failed: ${method} ${url}`
        );
      }

      // Parse response
      let data: T;
      const contentType = response.headers.get('content-type');
      
      if (contentType?.includes('application/json')) {
        data = await response.json();
      } else if (contentType?.includes('text/')) {
        data = await response.text() as T;
      } else {
        data = await response.blob() as T;
      }

      return {
        data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      };
    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error instanceof ApiError) {
        throw error;
      }
      
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new ApiError(408, 'Request Timeout', undefined, 'Request timed out');
        }
        throw new ApiError(0, 'Network Error', undefined, error.message);
      }
      
      throw new ApiError(0, 'Unknown Error', undefined, 'An unknown error occurred');
    }
  }

  /**
   * GET request
   */
  async get<T = any>(endpoint: string, options?: Omit<RequestOptions, 'method' | 'body'>): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  /**
   * POST request
   */
  async post<T = any>(endpoint: string, body?: any, options?: Omit<RequestOptions, 'method'>): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'POST', body });
  }

  /**
   * PUT request
   */
  async put<T = any>(endpoint: string, body?: any, options?: Omit<RequestOptions, 'method'>): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'PUT', body });
  }

  /**
   * PATCH request
   */
  async patch<T = any>(endpoint: string, body?: any, options?: Omit<RequestOptions, 'method'>): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'PATCH', body });
  }

  /**
   * DELETE request
   */
  async delete<T = any>(endpoint: string, options?: Omit<RequestOptions, 'method' | 'body'>): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }

  /**
   * Upload file
   */
  async upload<T = any>(endpoint: string, formData: FormData, options?: Omit<RequestOptions, 'method' | 'body'>): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'POST', body: formData });
  }

  /**
   * Combine multiple AbortSignals
   */
  private combineSignals(signals: AbortSignal[]): AbortSignal {
    const controller = new AbortController();
    
    signals.forEach(signal => {
      if (signal.aborted) {
        controller.abort();
      } else {
        signal.addEventListener('abort', () => controller.abort());
      }
    });
    
    return controller.signal;
  }
}

/**
 * Default API client instance
 */
export const apiClient = new ApiClient();

/**
 * Server-side API client (for use in API routes and server components)
 * Uses different configuration for server-side requests
 */
export const serverApiClient = new ApiClient(
  process.env.API_BASE_URL || API_CONFIG.BASE_URL,
  {
    ...API_CONFIG.DEFAULT_HEADERS,
    // Add server-specific headers if needed
  },
  API_CONFIG.TIMEOUT
);
