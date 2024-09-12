//@ts-nocheck
import { Suspense } from 'react';
import { CoursesPageClient } from './CoursesPageClient';
import { fetchCourses, fetchAds } from '@/lib/api';

export const dynamic = 'force-dynamic';

async function CoursesPage({ searchParams }) {
  const page = Number(searchParams.page) || 1;
  const sortBy = searchParams.sortBy || '';
  const category = searchParams.category || '';
  
  console.log(searchParams, "search items")
  const coursesData = await fetchCourses(page, sortBy, category);
  const adsData = await fetchAds();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CoursesPageClient 
        initialcourses={coursesData.tools} 
        initialAds={adsData}
        initialPagination={coursesData.pagination}
        initialSortBy={sortBy}
        initialCategory={category}
      />
    </Suspense>
  );
}

export default CoursesPage;