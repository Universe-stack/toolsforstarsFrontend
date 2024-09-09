'use client'
import {FaSliders} from 'react-icons/fa6'

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface SortByProps {
  category: string;
}

const SortBy: React.FC<SortByProps> = ({ category }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortBy = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    params.set('sortBy', sortBy);
    router.push(`/saas/${category}?${params.toString()}`);
  };

  return (
    <div className="container bg-starsWhite text-starsBlack self-center w-[80%] flex justify-end p-2 border rounded-md focus:ring-starsBlack">
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex justfy-between">
      <FaSliders className=" text-starsBlack self-center" />
      <select
        onChange={handleSortChange}
        defaultValue={searchParams.get('sortBy') || ''}
        style={{ width: '80%' }} // 20% smaller
        className=" bg-starsWhite text-starsBlack cursor-pointer self-end"
      >
        <option value="" className='bg-starsWhite text-starsBlack'>Select Filter</option>
        <option value="pricesHigh">High Prices</option>
        <option value="pricesLow">Low Prices</option>
        <option value="recentlyAdded">Recently Added</option>
        <option value="bestReviews">Best Reviews</option>
        <option value="bestUpvotes">Highest Upvotes</option>
        <option value="AI">AI Enabled</option>
      </select>
    </div>
  </div>
  );
};

export default SortBy;