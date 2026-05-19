const BASE_URL = import.meta.env.PAYLOAD_URL ?? 'http://localhost:3001';

async function fetchAPI<T>(path: string, params?: Record<string, string>): Promise<T> {
  const url = new URL(`/api${path}`, BASE_URL);
  if (params) {
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  }
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`Payload fetch failed: ${res.status} ${url}`);
  return res.json() as Promise<T>;
}

export type PaginatedResponse<T> = {
  docs: T[];
  totalDocs: number;
  page: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

// --- Collections ---

export const getCaseStudies = (params?: Record<string, string>) =>
  fetchAPI<PaginatedResponse<Record<string, unknown>>>('/case-studies', params);

export const getCaseStudy = (slug: string) =>
  fetchAPI<PaginatedResponse<Record<string, unknown>>>('/case-studies', {
    'where[slug][equals]': slug,
    limit: '1',
  });

export const getProjects = (params?: Record<string, string>) =>
  fetchAPI<PaginatedResponse<Record<string, unknown>>>('/projects', params);

export const getProject = (slug: string) =>
  fetchAPI<PaginatedResponse<Record<string, unknown>>>('/projects', {
    'where[slug][equals]': slug,
    limit: '1',
  });

export const getPhotos = (params?: Record<string, string>) =>
  fetchAPI<PaginatedResponse<Record<string, unknown>>>('/photos', params);

export const getServices = (params?: Record<string, string>) =>
  fetchAPI<PaginatedResponse<Record<string, unknown>>>('/services', params);

export const getPricing = (params?: Record<string, string>) =>
  fetchAPI<PaginatedResponse<Record<string, unknown>>>('/pricing', params);

export const getTech = (params?: Record<string, string>) =>
  fetchAPI<PaginatedResponse<Record<string, unknown>>>('/tech', params);
