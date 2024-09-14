import { notFound } from 'next/navigation'

const BASE_URL = 'https://createcamp.onrender.com'

async function fetchWithErrorHandling(url: string, options: RequestInit = {}) {
  try {
    const res = await fetch(url)

    if (!res.ok) {
      if (res.status === 404) {
        notFound()
      }
      throw new Error(`Failed to fetch data from ${url}`)
    }

    return await res.json()
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}

async function fetchData(endpoint: string, params: Record<string, string | number> = {}) {
  const url = new URL(`${BASE_URL}${endpoint}`)
  
  Object.entries(params).forEach(([key, value]) => {
    if (value) url.searchParams.append(key, value.toString())
  })

  return fetchWithErrorHandling(url.toString())
}

export async function fetchSaasTools(page = 1, sortBy = '', category = '') {
  return fetchData('/tools/saas', { page, sortBy, category })
}

export async function fetchApps(page = 1, sortBy = '', category = '') {
  return fetchData('/tools/apps', { page, sortBy, category })
}

export async function fetchCourses(page = 1, sortBy = '', category = '') {
  return fetchData('/tools/courses', { page, sortBy, category })
}

export async function fetchAds() {
  return fetchData('/ads/all')
}
