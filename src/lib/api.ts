import { notFound } from 'next/navigation'

const BASE_URL = 'https://createcamp.onrender.com'
const TIMEOUT = 8000 // 8 seconds timeout

async function fetchWithErrorHandling(url: string, options: RequestInit = {}): Promise<any> {
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), TIMEOUT)

  try {
    const res = await fetch(url, { ...options, signal: controller.signal })

    if (!res.ok) {
      if (res.status === 404) {
        notFound()
      }
      throw new Error(`Failed to fetch data from ${url}`)
    }

    return await res.json()
  } catch (error:any) {
    if (error.name === 'AbortError') {
      console.error('Request timed out')
    } else {
      console.error('Fetch error:', error)
    }
    throw error
  } finally {
    clearTimeout(id)
  }
}

async function fetchData(endpoint: string, params: Record<string, string | number> = {}): Promise<any> {
  const url = new URL(`${BASE_URL}${endpoint}`)
  
  Object.entries(params).forEach(([key, value]) => {
    if (value) url.searchParams.append(key, value.toString())
  })

  return fetchWithErrorHandling(url.toString())
}

export async function fetchAllData(page = 1, sortBy = '', category = '') {
  try {
    const [saasTools, apps, courses, ads] = await Promise.all([
      fetchData('/tools/saas', { page, sortBy, category }),
      fetchData('/tools/apps', { page, sortBy, category }),
      fetchData('/tools/courses', { page, sortBy, category }),
      fetchData('/ads/all')
    ])

    return { saasTools, apps, courses, ads }
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export const fetchSaasTools = (page = 1, sortBy = '', category = '') => 
  fetchData('/tools/saas', { page, sortBy, category })

export const fetchApps = (page = 1, sortBy = '', category = '') => 
  fetchData('/tools/apps', { page, sortBy, category })

export const fetchCourses = (page = 1, sortBy = '', category = '') => 
  fetchData('/tools/courses', { page, sortBy, category })

export const fetchAds = () => fetchData('/ads/all')