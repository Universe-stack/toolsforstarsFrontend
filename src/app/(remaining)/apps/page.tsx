//@ts-nocheck
import { Suspense } from 'react';
import { AppPageClient } from './AppPageClient';
import { fetchAds, fetchApps } from '@/lib/api';

export const dynamic = 'force-dynamic';

async function Page({ searchParams }) {
  const page = Number(searchParams.page) || 1;
  const sortBy = searchParams.sortBy || '';
  const category = searchParams.category || '';
  
  console.log(searchParams, "search items")
  const appsToolsData = await fetchApps(page, sortBy, category);
  const adsData = await fetchAds();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppPageClient 
        initialSaasTools={appsToolsData.tools} 
        initialAds={adsData}
        initialPagination={appsToolsData.pagination}
        initialSortBy={sortBy}
        initialCategory={category}
      />
    </Suspense>
  );
}

export default Page;