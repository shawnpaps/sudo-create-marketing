const BASE_URL = import.meta.env.PUBLIC_PAYLOAD_URL ?? 'http://localhost:3001';

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

export type MediaDoc = {
  id: string;
  url: string;
  alt: string;
};

export type Work = {
  id: string;
  label: string;
  title: string;
  category: string;
  description: string;
  thumbnail?: MediaDoc | null;
  tags?: { id: string; tag: string }[];
  playbackId?: string | null;
  siteHref?: string | null;
  hasCaseStudy: boolean;
  caseStudyHref?: string | null;
  isFeatured: boolean;
  order: number;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  status: 'live' | 'in-lab' | 'open-call';
  tags?: { id: string; tag: string }[];
  playbackId?: string | null;
  thumbnail?: MediaDoc | null;
  caseStudyHref?: string | null;
  siteHref?: string | null;
  order: number;
};

// Works
export const getWorks = (params?: Record<string, string>) =>
  fetchAPI<PaginatedResponse<Work>>('/works', params);

export const getFeaturedWorks = () =>
  fetchAPI<PaginatedResponse<Work>>('/works', {
    'where[isFeatured][equals]': 'true',
    sort: 'order',
    limit: '20',
  });

// Products
export const getProducts = (params?: Record<string, string>) =>
  fetchAPI<PaginatedResponse<Product>>('/products', params);

// Testimonials
export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  order: number;
};

export const getTestimonials = () =>
  fetchAPI<PaginatedResponse<Testimonial>>('/testimonials', { sort: 'order', limit: '100' });
