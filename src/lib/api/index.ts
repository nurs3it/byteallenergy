/**
 * API Module
 * Main export file for all API-related functionality
 */

// Configuration and client
export { API_CONFIG, buildApiUrl, ApiError } from './config';
export { ApiClient, apiClient, serverApiClient } from './client';

// Types
export * from './types';

// Utilities
export * from './utils';

// Hooks
export * from './hooks';

// Services
export {
  TeamService,
  TeamMembersService,
  TeamCategoriesService,
  TeamMetadataService,
  teamService,
  serverTeamService,
  teamMembersService,
  teamCategoriesService,
  teamMetadataService,
} from './services/team';

// Re-export commonly used types for convenience
export type {
  TeamMemberDetail,
  TeamMemberList,
  TeamMemberCreateRequest,
  TeamMemberDetailRequest,
  PatchedTeamMemberDetailRequest,
  TeamMemberCreate,
  PaginatedTeamMemberList,
  TeamMembersQueryParams,
  TeamMembersSearchParams,
  CategoryMembersQueryParams,
  TeamCategory,
  TeamCategoryRequest,
  PatchedTeamCategoryRequest,
  PaginatedTeamCategoryList,
  TeamCategoriesQueryParams,
  TeamMetadata,
  TeamMetadataRequest,
  PatchedTeamMetadataRequest,
  PaginatedTeamMetadataList,
  TeamMetadataQueryParams,
  TeamStatistics,
} from './types';

// Re-export from config and client
export type { ApiResponse, RequestOptions } from './config';
