/**
 * TypeScript types generated from OpenAPI schema
 * ByteAllEnergy Team Management API
 */

// ===== Base Types =====

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

// ===== Team Category Types =====

export interface TeamCategory {
  id: number;
  name: string;
  description?: string;
  members_count: number;
  created_at: string;
  updated_at: string;
}

export interface TeamCategoryRequest {
  name: string;
  description?: string;
}

export interface PatchedTeamCategoryRequest {
  name?: string;
  description?: string;
}

export type PaginatedTeamCategoryList = PaginatedResponse<TeamCategory>;

// ===== Team Member Types =====

export interface TeamMemberList {
  id: number;
  full_name: string;
  position: string;
  is_leader: boolean;
  email?: string;
  category: number;
  category_name: string;
  photo_url?: string;
  order?: number;
}

export interface TeamMemberDetail {
  id: number;
  photo?: string;
  photo_url?: string;
  photo_thumbnail_url?: string;
  full_name: string;
  position: string;
  description?: string;
  expertise_tags?: string[];
  is_leader: boolean;
  email?: string;
  linkedin_url?: string;
  category: TeamCategory;
  order?: number;
  created_at: string;
  updated_at: string;
}

export interface TeamMemberByCategory {
  category: TeamCategory;
  members: TeamMemberDetail[];
}

export interface TeamMemberCreateRequest {
  photo?: File;
  full_name: string;
  position: string;
  description?: string;
  expertise_tags?: string[];
  is_leader?: boolean;
  email?: string;
  linkedin_url?: string;
  category: number;
  order?: number;
}

export interface TeamMemberDetailRequest {
  photo?: File;
  full_name: string;
  position: string;
  description?: string;
  expertise_tags?: string[];
  is_leader?: boolean;
  email?: string;
  linkedin_url?: string;
  category_id: number;
  order?: number;
}

export interface PatchedTeamMemberDetailRequest {
  photo?: File;
  full_name?: string;
  position?: string;
  description?: string;
  expertise_tags?: string[];
  is_leader?: boolean;
  email?: string;
  linkedin_url?: string;
  category_id?: number;
  order?: number;
}

export interface TeamMemberCreate {
  photo?: string;
  full_name: string;
  position: string;
  description?: string;
  expertise_tags?: string[];
  is_leader: boolean;
  email?: string;
  linkedin_url?: string;
  category: number;
  order?: number;
}

export type PaginatedTeamMemberList = PaginatedResponse<TeamMemberList>;

// ===== Team Metadata Types =====

export interface TeamMetadata {
  id: number;
  number: string;
  title: string;
  order?: number;
  created_at: string;
  updated_at: string;
}

export interface TeamMetadataRequest {
  number: string;
  title: string;
  order?: number;
}

export interface PatchedTeamMetadataRequest {
  number?: string;
  title?: string;
  order?: number;
}

export type PaginatedTeamMetadataList = PaginatedResponse<TeamMetadata>;

// ===== Team Statistics Types =====

export interface TeamStatistics {
  total_members: number;
  total_leaders: number;
  total_categories: number;
  metadata: TeamMetadata[];
}

// ===== Query Parameters Types =====

export interface TeamMembersQueryParams {
  category?: number;
  is_leader?: boolean;
  ordering?: string;
  page?: number;
  search?: string;
}

export interface TeamCategoriesQueryParams {
  ordering?: string;
  page?: number;
  search?: string;
}

export interface TeamMetadataQueryParams {
  ordering?: string;
  page?: number;
  search?: string;
}

export interface TeamMembersSearchParams {
  category?: number;
  is_leader?: boolean;
  q?: string;
}

export interface CategoryMembersQueryParams {
  is_leader?: boolean;
  search?: string;
}

// ===== API Response Types =====

export interface ApiErrorResponse {
  detail?: string;
  message?: string;
  errors?: Record<string, string[]>;
}

// ===== Utility Types =====

export type SortOrder = 'asc' | 'desc';

export type TeamMemberSortField = 'full_name' | 'position' | 'order' | 'created_at';

export type TeamCategorySortField = 'name' | 'created_at' | 'updated_at';

export type TeamMetadataSortField = 'title' | 'number' | 'order' | 'created_at';

// ===== Form Data Types =====

export interface TeamMemberFormData {
  photo?: File;
  full_name: string;
  position: string;
  description?: string;
  expertise_tags?: string[];
  is_leader?: boolean;
  email?: string;
  linkedin_url?: string;
  category_id: number;
  order?: number;
}

export interface TeamCategoryFormData {
  name: string;
  description?: string;
}

export interface TeamMetadataFormData {
  number: string;
  title: string;
  order?: number;
}
