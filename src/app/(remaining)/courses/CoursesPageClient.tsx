//@ts-nocheck
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import SaasCarousel from '../../component/UI/Slider/SaasCarousel';
import AdsCarousel from '@/app/component/UI/Slider/AdsCarousel';
import ProductCard from '../../component/UI/saasProductCard/ProductCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiOutlineFilter } from "react-icons/hi";
import { FaSliders, FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";

export function CoursesPageClient({ initialcourses, initialAds, initialPagination, initialSortBy, initialCategory }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [courses, setcourses] = useState(initialcourses);
  const [ads, setAds] = useState(initialAds);
  const [pagination, setPagination] = useState(initialPagination);
  const [isLoading, setIsLoading] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  const [filter, setFilter] = useState({ selectedValue: initialSortBy });

  useEffect(() => {
    setcourses(initialcourses);
    setAds(initialAds);
    setPagination(initialPagination);
  }, [initialcourses, initialAds, initialPagination]);

  const handleChange = (e) => {
    setFilter({ selectedValue: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateURL(1, filter.selectedValue);
  };

  const handleIconChange = async (selectedIcon) => {
    updateURL(1, '', selectedIcon);
  };

  const handlePreviousPage = () => {
    if (pagination.currentPage > 1) {
      updateURL(pagination.currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (pagination.currentPage < pagination.totalPages) {
      updateURL(pagination.currentPage + 1);
    }
  };

  const backdropSet = () => {
    setBackdrop(true);
  };

  const updateURL = (page, sortBy = searchParams.get('sortBy') || '', category = searchParams.get('category') || '') => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    if (sortBy) params.set('sortBy', sortBy);
    if (category) params.set('category', category);
    router.push(`?${params.toString()}`);
  };

  return (
    <section className='w-[100%] flex flex-col justify-center relative pb-[2rem] bg-starsWhite text-starsBlack'>
    <ToastContainer className="absolute" />
    {isLoading && (
      <div className="absolute bg-starsBlack z-40 top-0 right-0 left-0 bottom-0 opacity-25" onClick={() => setBackdrop(false)}></div>
    )}
  
    {backdrop && (
      <>
        <div className="absolute bg-starsBlack z-40 top-0 right-0 left-0 bottom-0 opacity-25" onClick={() => setBackdrop(false)}></div>
        <div className='w-[20rem] bg-starsWhite rounded-md absolute self-center mt-[2rem] z-50 top-4'>
          <div className='w-[100%] border-starsGrey border-b flex justify-between py-1'>
            <div className="flex justify-end w-[55%] self-center font-[600] text-[20px] gap-2">Filters <span className="mt-1"><HiOutlineFilter /></span></div>
            <div className='w-[45%] flex justify-end px-4'><button className='p-3 self-center cursor-pointer' onClick={() => setBackdrop(false)}>x</button></div>
          </div>
  
          <div className="container mx-auto p-4 bg-starsWhite text-starsBlack">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-starsWhite text-starsBlack">
              <label htmlFor="filterSelect" className="text-base font-medium">Select Filter:</label>
              <select 
                id="filterSelect" 
                value={filter.selectedValue} 
                onChange={handleChange} 
                className=" bg-starsWhite text-starsBlack rounded-md border border-starsGrey shadow-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-starspurpleDark"
              >
                <option value="">Filter By</option>
                <option value="pricesHigh">High Prices first</option>
                <option value="pricesLow">Low Prices First</option>
                <option value="recentlyAdded">Recently Added</option>
                <option value="bestReviews">Best Reviews</option>
                <option value="bestUpvotes">Highest Upvotes</option>
                <option value="aiEnabled">AI Enabled</option>
              </select>
              <button 
                type="submit" 
                className="inline-flex items-center px-4 py-2 bg-starsBlack text-starsWhite font-bold rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-starspurpleDark"
              >
                Apply Filter
              </button>
            </form>
          </div>
        </div>
      </>
    )}
  
    <div className='2xl:w-[75%] xl:w-[75%] lg:w-[85%] md:w-[85%] sm:w-[85%] xsm:w-[85%] self-center'>
      <div className='w-full mt-[3rem] bg-starsBlack rounded-[1.5rem] text-starsWhite text-center relative'>
        <AdsCarousel ads={ads} />
      </div>
  
      <div className='custom-after absolute left-0 right-0'></div>
  
      <div className='w-[100%]'>
        <div className='flex gap-3 mt-[2rem] justify-between'>
          <div className='2xl:w-[88%] xl:w-[80%] lg:w-[75%] md:w-[80%] sm:w-[76%] xsm:w-[76%] mt-[0.83rem]'>
            <SaasCarousel onIconChange={handleIconChange} />
          </div>
          <button 
            className='self-center flex justify-center items-center border border-starsGrey rounded-md px-3 gap-2 h-[2.5rem] ml-2' 
            onClick={() => setBackdrop(true)}
          >
            <div className='self-center'><FaSliders className='text-[16px] self-center text-starsBlack' /></div>
            <div className='self-center 2xl:block xl:block lg:block md:block sm:hidden xsm:hidden'>Filter</div>
          </button>
        </div>
  
        <div className='grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-2 gap-5 mt-[5rem] w-[100%] justify-center items-center relative'>
          {courses?.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
      </div>
  
      <div className='w-full flex justify-end mt-8'>
        <div className="join grid grid-cols-2 self-end w-[15rem]">
          <button 
            className="join-item btn btn-outline flex gap-2 items-center" 
            onClick={handlePreviousPage} 
            disabled={pagination.currentPage === 1}
          >
            Previous <FaAnglesLeft className='pb-[0.4rem] text-[1.5rem]' />
          </button>
          <button 
            className="join-item btn btn-outline flex gap-2 items-center" 
            onClick={handleNextPage} 
            disabled={pagination.currentPage === pagination.totalPages}
          >
            Next <FaAnglesRight className='pb-[0.4rem] text-[1.5rem]' />
          </button>
        </div>
      </div>
    </div>
  </section>
  );
}
