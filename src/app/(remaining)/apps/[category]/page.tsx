// app/saas/[category]/page.tsx
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import SaasCarousel from '@/app/component/UI/Slider/SaasCarousel';
import Pagination from '@/app/component/Pagination';
import ProductCardList from '@/app/component/ProductCardList';
import AdsCarouselWrapper from '@/app/component/AdsCarouselWrapper';
import SortBy from '@/app/component/SortBy';

async function fetchCategoryData(category: string, page: number = 1, sortBy: string = '') {
    const res = await fetch(`https://createcamp.onrender.com/tools/apps/filterResults?category=${category}&sortBy=${sortBy}&page=${page}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch data');
    return res.json();
  }
  
  async function fetchAds() {
    const res = await fetch('https://createcamp.onrender.com/ads/all', { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch ads');
    return res.json();
  }
  
  export async function generateStaticParams() {
    const categories = ['design', 'podcast', 'video', 'team', 'writing', 'audio', 'website', 'productivity', 'image'];
    return categories.map((category) => ({ category }));
  }
  
  export default async function CategoryPage({ params, searchParams }: { params: { category: string }, searchParams: { page?: string, sortBy?: string } }) {
    const page = Number(searchParams.page) || 1;
    const sortBy = searchParams.sortBy || '';
    const category = params.category.toLowerCase();
  
    let data;
    try {
      data = await fetchCategoryData(category, page, sortBy);
    } catch (error) {
      console.error('Error fetching category data:', error);
      notFound();
    }
  
    const ads = await fetchAds();
  
    if (!data || !data.tools || data.tools.length === 0) {
      notFound();
    }
  
    return (
      <section className='w-[100%] flex flex-col justify-center relative pb-[2rem] bg-starsWhite text-starsBlack'>
        <div className='2xl:w-[75%] xl:w-[75%] lg:w-[85%] md:w-[85%] sm:w-[85%] xsm:w-[85%] self-center'>
          <div className='w-full mt-[3rem] bg-starsBlack rounded-[1.5rem] text-starsWhite text-center relative'>
            <Suspense fallback={<div>Loading ads...</div>}>
              <AdsCarouselWrapper ads={ads} />
            </Suspense>
          </div>
  
          <div className='w-[100%]'>
            <div className='flex gap-3 mt-[2rem] justify-between w-full'>
              <div className='2xl:w-[88%] xl:w-[80%] lg:w-[75%] md:w-[80%] sm:w-[76%] xsm:w-[76%] mt-[0.83rem]'>
                <SaasCarousel currentCategory={category} />
              </div>
              <div className=' bg-starsWhite text-starsBlack flex justify-end items-center'>
                <SortBy category={category} />
              </div>
            </div>
  
            <Suspense fallback={<div>Loading products...</div>}>
              <ProductCardList tools={data.tools} />
            </Suspense>
          </div>
  
          <Pagination 
            currentPage={data.pagination.currentPage} 
            totalPages={data.pagination.totalPages} 
            category={category}
          />
        </div>
      </section>
    );
  }