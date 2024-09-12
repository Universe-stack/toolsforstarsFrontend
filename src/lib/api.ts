export async function fetchSaasTools(page = 1, sortBy = '', category = '') {
  const url = new URL('https://createcamp.onrender.com/tools/saas');
  url.searchParams.append('page', page.toString());
  if (sortBy) url.searchParams.append('sortBy', sortBy);
  if (category) url.searchParams.append('category', category);
  console.log(sortBy, "sort by")

  const res = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  console.log(res, "data")

  if (!res.ok) {
    throw new Error('Failed to fetch SaaS tools');
  }

  return res.json();
}

export async function fetchApps(page = 1, sortBy = '', category = '') {
  const url = new URL('https://createcamp.onrender.com/tools/apps');
  url.searchParams.append('page', page.toString());
  if (sortBy) url.searchParams.append('sortBy', sortBy);
  if (category) url.searchParams.append('category', category);
  console.log(sortBy, "sort by")

  const res = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  console.log(res, "data")

  if (!res.ok) {
    throw new Error('Failed to fetch SaaS tools');
  }

  return res.json();
}


export async function fetchCourses(page = 1, sortBy = '', category = '') {
  const url = new URL('https://createcamp.onrender.com/tools/courses');
  url.searchParams.append('page', page.toString());
  if (sortBy) url.searchParams.append('sortBy', sortBy);
  if (category) url.searchParams.append('category', category);
  console.log(sortBy, "sort by")

  const res = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  console.log(res, "data")

  if (!res.ok) {
    throw new Error('Failed to fetch SaaS tools');
  }

  return res.json();
}

export async function fetchAds() {
  const res = await fetch('https://createcamp.onrender.com/ads/all', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch ads');
  }

  return res.json();
}