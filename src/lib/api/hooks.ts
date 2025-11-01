/**
 * React Hooks for API
 * Custom hooks for working with team API in React components
 */

'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { 
  teamService, 
  TeamMemberDetail, 
  TeamCategory, 
  TeamMetadata,
  TeamMemberCreateRequest,
  TeamMemberDetailRequest,
  TeamCategoryRequest,
  TeamMetadataRequest,
  TeamMembersQueryParams,
  TeamCategoriesQueryParams,
  TeamMetadataQueryParams,
  TeamMembersSearchParams,
  CategoryMembersQueryParams,
  PaginatedTeamMemberList,
  PaginatedTeamCategoryList,
  PaginatedTeamMetadataList,
  ApiError
} from './index';

// ===== Generic Hook Types =====

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: ApiError | null;
}

interface UseApiOptions {
  immediate?: boolean;
  onSuccess?: (data: unknown) => void;
  onError?: (error: ApiError) => void;
}

// ===== Generic API Hook =====

function useApi<T>(
  apiCall: () => Promise<T>,
  options: UseApiOptions = {}
): UseApiState<T> & { refetch: () => Promise<void> } {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const { immediate = true, onSuccess, onError } = options;

  const fetchData = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const data = await apiCall();
      setState({ data, loading: false, error: null });
      onSuccess?.(data);
    } catch (error) {
      const apiError = error instanceof ApiError ? error : new ApiError(0, 'Unknown Error', undefined, 'An unknown error occurred');
      setState({ data: null, loading: false, error: apiError });
      onError?.(apiError);
    }
  }, [apiCall, onSuccess, onError]);

  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [immediate, fetchData]);

  return {
    ...state,
    refetch: fetchData,
  };
}

// ===== Team Members Hooks =====

export function useTeamMembers(params?: TeamMembersQueryParams, options?: UseApiOptions) {
  return useApi(
    () => teamService.members.getMembers(params),
    options
  );
}

export function useTeamMember(id: number, options?: UseApiOptions) {
  return useApi(
    () => teamService.members.getMember(id),
    options
  );
}

export function useTeamLeaders(options?: UseApiOptions) {
  return useApi(
    () => teamService.members.getLeaders(),
    options
  );
}

export function useMembersByCategory(options?: UseApiOptions) {
  return useApi(
    () => teamService.members.getMembersByCategory(),
    options
  );
}

export function useSearchMembers(params: TeamMembersSearchParams, options?: UseApiOptions) {
  return useApi(
    () => teamService.members.searchMembers(params),
    options
  );
}

export function useCategoryMembers(categoryId: number, params?: CategoryMembersQueryParams, options?: UseApiOptions) {
  return useApi(
    () => teamService.members.getCategoryMembers(categoryId, params),
    options
  );
}

// ===== Team Categories Hooks =====

export function useTeamCategories(params?: TeamCategoriesQueryParams, options?: UseApiOptions) {
  return useApi(
    () => teamService.categories.getCategories(params),
    options
  );
}

export function useTeamCategory(id: number, options?: UseApiOptions) {
  return useApi(
    () => teamService.categories.getCategory(id),
    options
  );
}

// ===== Team Metadata Hooks =====

export function useTeamMetadata(params?: TeamMetadataQueryParams, options?: UseApiOptions) {
  return useApi(
    () => teamService.metadata.getMetadata(params),
    options
  );
}

export function useTeamMetadataItem(id: number, options?: UseApiOptions) {
  return useApi(
    () => teamService.metadata.getMetadataItem(id),
    options
  );
}

export function useTeamStatistics(options?: UseApiOptions) {
  return useApi(
    () => teamService.metadata.getStatistics(),
    options
  );
}

// ===== Mutation Hooks =====

interface UseMutationState<T> {
  data: T | null;
  loading: boolean;
  error: ApiError | null;
}

interface UseMutationOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: ApiError) => void;
}

export function useMutation<T, P = unknown>(
  mutationFn: (params: P) => Promise<T>,
  options?: UseMutationOptions<T>
): UseMutationState<T> & { mutate: (params: P) => Promise<void> } {
  const [state, setState] = useState<UseMutationState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const { onSuccess, onError } = options || {};

  const mutate = useCallback(async (params: P) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const data = await mutationFn(params);
      setState({ data, loading: false, error: null });
      onSuccess?.(data);
    } catch (error) {
      const apiError = error instanceof ApiError ? error : new ApiError(0, 'Unknown Error', undefined, 'An unknown error occurred');
      setState({ data: null, loading: false, error: apiError });
      onError?.(apiError);
    }
  }, [mutationFn, onSuccess, onError]);

  return {
    ...state,
    mutate,
  };
}

// ===== Specific Mutation Hooks =====

export function useCreateTeamMember(options?: UseMutationOptions<unknown>) {
  return useMutation(
    (data: unknown) => teamService.members.createMember(data as TeamMemberCreateRequest),
    options
  );
}

export function useUpdateTeamMember(options?: UseMutationOptions<TeamMemberDetail>) {
  return useMutation(
    ({ id, data }: { id: number; data: unknown }) => teamService.members.updateMember(id, data as TeamMemberDetailRequest),
    options
  );
}

export function useDeleteTeamMember(options?: UseMutationOptions<void>) {
  return useMutation(
    (id: number) => teamService.members.deleteMember(id),
    options
  );
}

export function useCreateTeamCategory(options?: UseMutationOptions<TeamCategory>) {
  return useMutation(
    (data: unknown) => teamService.categories.createCategory(data as TeamCategoryRequest),
    options
  );
}

export function useUpdateTeamCategory(options?: UseMutationOptions<TeamCategory>) {
  return useMutation(
    ({ id, data }: { id: number; data: unknown }) => teamService.categories.updateCategory(id, data as TeamCategoryRequest),
    options
  );
}

export function useDeleteTeamCategory(options?: UseMutationOptions<void>) {
  return useMutation(
    (id: number) => teamService.categories.deleteCategory(id),
    options
  );
}

export function useCreateTeamMetadata(options?: UseMutationOptions<TeamMetadata>) {
  return useMutation(
    (data: unknown) => teamService.metadata.createMetadata(data as TeamMetadataRequest),
    options
  );
}

export function useUpdateTeamMetadata(options?: UseMutationOptions<TeamMetadata>) {
  return useMutation(
    ({ id, data }: { id: number; data: unknown }) => teamService.metadata.updateMetadata(id, data as TeamMetadataRequest),
    options
  );
}

export function useDeleteTeamMetadata(options?: UseMutationOptions<void>) {
  return useMutation(
    (id: number) => teamService.metadata.deleteMetadata(id),
    options
  );
}

// ===== Pagination Hook =====

interface UsePaginationOptions {
  pageSize?: number;
  initialPage?: number;
}

export function usePagination(
  fetchFn: (page: number, pageSize: number) => Promise<PaginatedTeamMemberList | PaginatedTeamCategoryList | PaginatedTeamMetadataList>,
  options: UsePaginationOptions = {}
) {
  const { pageSize = 10, initialPage = 1 } = options;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  
  const { data, loading, error, refetch } = useApi(
    () => fetchFn(currentPage, pageSize),
    { immediate: true }
  );

  useEffect(() => {
    if (data) {
      setTotalPages(Math.ceil(data.count / pageSize));
      setTotalItems(data.count);
    }
  }, [data, pageSize]);

  const goToPage = useCallback((page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }, [totalPages]);

  const nextPage = useCallback(() => {
    goToPage(currentPage + 1);
  }, [currentPage, goToPage]);

  const prevPage = useCallback(() => {
    goToPage(currentPage - 1);
  }, [currentPage, goToPage]);

  return {
    data,
    loading,
    error,
    refetch,
    currentPage,
    totalPages,
    totalItems,
    goToPage,
    nextPage,
    prevPage,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
  };
}

// ===== Search Hook =====

export function useSearch<T>(
  searchFn: (query: string) => Promise<T[]>,
  options: { debounceMs?: number; minLength?: number } = {}
) {
  const { debounceMs = 300, minLength = 2 } = options;
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);
  
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const performSearch = useCallback(async (searchQuery: string) => {
    if (searchQuery.length < minLength) {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await searchFn(searchQuery);
      setResults(data);
    } catch (err) {
      const apiError = err instanceof ApiError ? err : new ApiError(0, 'Search Error', undefined, 'Search failed');
      setError(apiError);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, [searchFn, minLength]);

  const debouncedSearch = useCallback((searchQuery: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      performSearch(searchQuery);
    }, debounceMs);
  }, [performSearch, debounceMs]);

  const search = useCallback((searchQuery: string) => {
    setQuery(searchQuery);
    debouncedSearch(searchQuery);
  }, [debouncedSearch]);

  const clearSearch = useCallback(() => {
    setQuery('');
    setResults([]);
    setError(null);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    query,
    results,
    loading,
    error,
    search,
    clearSearch,
  };
}
