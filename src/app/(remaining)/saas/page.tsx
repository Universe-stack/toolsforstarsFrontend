//@ts-nocheck
import { Suspense } from 'react';
import { SaasPageClient } from './SaasPageClient';
import { fetchSaasTools, fetchAds } from '@/lib/api';

export const dynamic = 'force-dynamic';

async function SaasPage({ searchParams }) {
  const page = Number(searchParams.page) || 1;
  const sortBy = searchParams.sortBy || '';
  const category = searchParams.category || '';
  
  console.log(searchParams, "search items")
  const saasToolsData = await fetchSaasTools(page, sortBy, category);
  const adsData = await fetchAds();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SaasPageClient 
        initialSaasTools={saasToolsData.tools} 
        initialAds={adsData}
        initialPagination={saasToolsData.pagination}
        initialSortBy={sortBy}
        initialCategory={category}
      />
    </Suspense>
  );
}

export default SaasPage;