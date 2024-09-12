import { cache } from 'react'

const BASE_URL = 'https://createcamp.onrender.com'

const fetchWithCache = cache(async (url:any, options:any) => {
  const res = await fetch(url, options)
  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${url}`)
  }
  return res.json()
})

async function fetchData(endpoint:any, params = {}, options = {}) {
  const url = new URL(`${BASE_URL}${endpoint}`)
  
  Object.entries(params).forEach(([key, value]) => {
    if (value) url.searchParams.append(key, value.toString())
  })

  const fetchOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    next: { revalidate: 60 }, // Cache for 60 seconds
    ...options,
  }

  return fetchWithCache(url.toString(), fetchOptions)
}

export const fetchSaasTools = (page = 1, sortBy = '', category = '') =>
  fetchData('/tools/saas', { page, sortBy, category })

export const fetchApps = (page = 1, sortBy = '', category = '') =>
  fetchData('/tools/apps', { page, sortBy, category })

export const fetchCourses = (page = 1, sortBy = '', category = '') =>
  fetchData('/tools/courses', { page, sortBy, category })

export const fetchAds = () => fetchData('/ads/all')