import { notFound } from 'next/navigation';

const BASE_URL = 'https://createcamp.onrender.com';

async function fetchWithErrorHandling(url: string, options: RequestInit = {}) {
  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!res.ok) {
      if (res.status === 404) {
        notFound(); // Handle 404 case
      }
      throw new Error(`Failed to fetch data from ${url}`);
    }

    return await res.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

async function fetchData(endpoint: string, params: Record<string, string | number> = {}) {
  const url = new URL(`${BASE_URL}${endpoint}`);
  
  Object.entries(params).forEach(([key, value]) => {
    if (value) url.searchParams.append(key, value.toString());
  });

  return fetchWithErrorHandling(url.toString());
}

// Fetch SaaS tools data
export async function fetchSaasTools(page = 1, sortBy = '', category = '') {
  return fetchData('/tools/saas', { page, sortBy, category });
}

// Fetch apps data
export async function fetchApps(page = 1, sortBy = '', category = '') {
  return fetchData('/tools/apps', { page, sortBy, category });
}

// Fetch courses data
export async function fetchCourses(page = 1, sortBy = '', category = '') {
  return fetchData('/tools/courses', { page, sortBy, category });
}

// Fetch all ads
export async function fetchAds() {
  return fetchData('/ads/all');
}

export const config = {
  runtime: 'edge', // Ensures that this function will run as an Edge Function
};
