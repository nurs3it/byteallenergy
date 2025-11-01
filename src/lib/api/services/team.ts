/**
 * Team Service
 * Service for managing team members, categories, and metadata
 */

import { apiClient, serverApiClient } from '../client';
import {
  TeamMemberDetail,
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
  TeamMemberByCategory,
} from '../types';
import {
  buildTeamMembersQuery,
  buildTeamCategoriesQuery,
  buildTeamMetadataQuery,
  buildTeamMembersSearchQuery,
  buildCategoryMembersQuery,
  objectToFormData,
} from '../utils';

/**
 * Team Members Service
 */
export class TeamMembersService {
  private client = apiClient;

  constructor(useServerClient = false) {
    if (useServerClient) {
      this.client = serverApiClient;
    }
  }

  /**
   * Get paginated list of team members
   */
  async getMembers(params?: TeamMembersQueryParams): Promise<PaginatedTeamMemberList> {
    const query = params ? buildTeamMembersQuery(params) : '';
    const response = await this.client.get<PaginatedTeamMemberList>(`team/members/${query}`);
    return response.data;
  }

  /**
   * Get team member by ID
   */
  async getMember(id: number): Promise<TeamMemberDetail> {
    const response = await this.client.get<TeamMemberDetail>(`team/members/${id}/`);
    return response.data;
  }

  /**
   * Create new team member
   */
  async createMember(data: TeamMemberCreateRequest): Promise<TeamMemberCreate> {
    const formData = objectToFormData(data as unknown as Record<string, unknown>);
    const response = await this.client.upload<TeamMemberCreate>('team/members/', formData);
    return response.data;
  }

  /**
   * Update team member
   */
  async updateMember(id: number, data: TeamMemberDetailRequest): Promise<TeamMemberDetail> {
    const formData = objectToFormData(data as unknown as Record<string, unknown>);
    const response = await this.client.put<TeamMemberDetail>(`team/members/${id}/`, formData);
    return response.data;
  }

  /**
   * Partially update team member
   */
  async patchMember(id: number, data: PatchedTeamMemberDetailRequest): Promise<TeamMemberDetail> {
    const formData = objectToFormData(data as unknown as Record<string, unknown>);
    const response = await this.client.patch<TeamMemberDetail>(`team/members/${id}/`, formData);
    return response.data;
  }

  /**
   * Delete team member
   */
  async deleteMember(id: number): Promise<void> {
    await this.client.delete(`team/members/${id}/`);
  }

  /**
   * Get members by category
   */
  async getMembersByCategory(): Promise<TeamMemberByCategory[]> {
    const response = await this.client.get<TeamMemberByCategory[]>('team/members/by_category/');
    return response.data;
  }

  /**
   * Get team leaders
   */
  async getLeaders(): Promise<TeamMemberDetail[]> {
    const response = await this.client.get<TeamMemberDetail[]>('team/members/leaders/');
    return response.data;
  }

  /**
   * Search team members
   */
  async searchMembers(params: TeamMembersSearchParams): Promise<TeamMemberDetail[]> {
    const query = buildTeamMembersSearchQuery(params);
    const response = await this.client.get<TeamMemberDetail[]>(`team/members/search/${query}`);
    return response.data;
  }

  /**
   * Get members of specific category
   */
  async getCategoryMembers(categoryId: number, params?: CategoryMembersQueryParams): Promise<TeamCategory> {
    const query = params ? buildCategoryMembersQuery(params) : '';
    const response = await this.client.get<TeamCategory>(`team/categories/${categoryId}/members/${query}`);
    return response.data;
  }
}

/**
 * Team Categories Service
 */
export class TeamCategoriesService {
  private client = apiClient;

  constructor(useServerClient = false) {
    if (useServerClient) {
      this.client = serverApiClient;
    }
  }

  /**
   * Get paginated list of team categories
   */
  async getCategories(params?: TeamCategoriesQueryParams): Promise<PaginatedTeamCategoryList> {
    const query = params ? buildTeamCategoriesQuery(params) : '';
    const response = await this.client.get<PaginatedTeamCategoryList>(`team/categories/${query}`);
    return response.data;
  }

  /**
   * Get team category by ID
   */
  async getCategory(id: number): Promise<TeamCategory> {
    const response = await this.client.get<TeamCategory>(`team/categories/${id}/`);
    return response.data;
  }

  /**
   * Create new team category
   */
  async createCategory(data: TeamCategoryRequest): Promise<TeamCategory> {
    const response = await this.client.post<TeamCategory>('team/categories/', data);
    return response.data;
  }

  /**
   * Update team category
   */
  async updateCategory(id: number, data: TeamCategoryRequest): Promise<TeamCategory> {
    const response = await this.client.put<TeamCategory>(`team/categories/${id}/`, data);
    return response.data;
  }

  /**
   * Partially update team category
   */
  async patchCategory(id: number, data: PatchedTeamCategoryRequest): Promise<TeamCategory> {
    const response = await this.client.patch<TeamCategory>(`team/categories/${id}/`, data);
    return response.data;
  }

  /**
   * Delete team category
   */
  async deleteCategory(id: number): Promise<void> {
    await this.client.delete(`team/categories/${id}/`);
  }
}

/**
 * Team Metadata Service
 */
export class TeamMetadataService {
  private client = apiClient;

  constructor(useServerClient = false) {
    if (useServerClient) {
      this.client = serverApiClient;
    }
  }

  /**
   * Get paginated list of team metadata
   */
  async getMetadata(params?: TeamMetadataQueryParams): Promise<PaginatedTeamMetadataList> {
    const query = params ? buildTeamMetadataQuery(params) : '';
    const response = await this.client.get<PaginatedTeamMetadataList>(`team/metadata/${query}`);
    return response.data;
  }

  /**
   * Get team metadata by ID
   */
  async getMetadataItem(id: number): Promise<TeamMetadata> {
    const response = await this.client.get<TeamMetadata>(`team/metadata/${id}/`);
    return response.data;
  }

  /**
   * Create new team metadata
   */
  async createMetadata(data: TeamMetadataRequest): Promise<TeamMetadata> {
    const response = await this.client.post<TeamMetadata>('team/metadata/', data);
    return response.data;
  }

  /**
   * Update team metadata
   */
  async updateMetadata(id: number, data: TeamMetadataRequest): Promise<TeamMetadata> {
    const response = await this.client.put<TeamMetadata>(`team/metadata/${id}/`, data);
    return response.data;
  }

  /**
   * Partially update team metadata
   */
  async patchMetadata(id: number, data: PatchedTeamMetadataRequest): Promise<TeamMetadata> {
    const response = await this.client.patch<TeamMetadata>(`team/metadata/${id}/`, data);
    return response.data;
  }

  /**
   * Delete team metadata
   */
  async deleteMetadata(id: number): Promise<void> {
    await this.client.delete(`team/metadata/${id}/`);
  }

  /**
   * Get team statistics
   */
  async getStatistics(): Promise<TeamStatistics> {
    const response = await this.client.get<TeamStatistics>('team/metadata/statistics/');
    return response.data;
  }
}

/**
 * Main Team Service
 * Combines all team-related services
 */
export class TeamService {
  public members: TeamMembersService;
  public categories: TeamCategoriesService;
  public metadata: TeamMetadataService;

  constructor(useServerClient = false) {
    this.members = new TeamMembersService(useServerClient);
    this.categories = new TeamCategoriesService(useServerClient);
    this.metadata = new TeamMetadataService(useServerClient);
  }
}

/**
 * Default team service instance (client-side)
 */
export const teamService = new TeamService();

/**
 * Server-side team service instance
 */
export const serverTeamService = new TeamService(true);

/**
 * Export individual services for convenience
 */
export const teamMembersService = new TeamMembersService();
export const teamCategoriesService = new TeamCategoriesService();
export const teamMetadataService = new TeamMetadataService();
