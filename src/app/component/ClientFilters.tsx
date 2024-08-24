//@ts-nocheck
'use client'
import React, { useState } from 'react';
import TopChartsCarousel from './UI/Slider/TopChartsCarousel';

type Tool = {
    categories?: string[];
    createdAt?: string;
    pricing?: number;
    averageReview?: number;
    upvotes?: number;
    productType?: string;
    aiEnabled?: boolean;
};

type ButtonOption = {
    title: string;
    category?: string;  // Optional if needed for category-based filtering
};

type Props = {
    data: Tool[];
    buttonOptions: ButtonOption[];
};

const ClientFilters = ({ data, buttonOptions,category }: Props) => {
    const [displayedData, setDisplayedData] = useState<Tool[]>(data);

    const handleFilter = (param: string) => {
        let filteredData = [...data]
        console.log(filteredData, param)

        if (param === 'New') {
            filteredData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          } else if (param === 'Top Paid') {
            filteredData = filteredData
              .filter(tool => tool.pricing > 0)
              .sort((a, b) => (b.averageReview + b.upvotes) - (a.averageReview + a.upvotes));
          } else if (param === 'Top Free') {
            filteredData = filteredData
              .filter(tool => tool.pricing === 0)
              .sort((a, b) => (b.averageReview + b.upvotes) - (a.averageReview + a.upvotes));
          } else if (param === 'Courses') {
            filteredData = filteredData
              .filter(tool => tool.productType === 'course')
              .sort((a, b) => (b.averageReview + b.upvotes) - (a.averageReview + a.upvotes));
          } else if (param === 'SAAS tools') {
            filteredData = filteredData
              .filter(tool => tool.productType === 'saas')
              .sort((a, b) => (b.averageReview + b.upvotes) - (a.averageReview + a.upvotes));
          } else if (param === 'Mobile apps') {
            filteredData = filteredData
              .filter(tool => tool.productType === 'app')
              .sort((a, b) => (b.averageReview + b.upvotes) - (a.averageReview + a.upvotes));
          } else if (param === 'AI Tool') {
            filteredData = filteredData.filter(tool => tool.aiEnabled);
          } else {
            return;
          }

        setDisplayedData(filteredData);
        console.log(displayedData,'display')
    };

    return (
        <div>
            <div className='xl:grid xl:grid-cols-10 lg:grid-cols-7 mt-4 justify-center gap-4 xsm:flex xsm:align-center xsm:overflow-x-auto xsm:justify-start scroll-container'>
                {buttonOptions.map((item, id) => (
                    <button
                        key={id}
                        onClick={() => handleFilter(item.title)}  // Use item.title as filter parameter
                        className='xl:w-full py-2 px-2 rounded-full xsm:flex-shrink-0 xsm:w-40 border hover:bg-[#e49a2d] hover:text-starsWhite hover:border-none'
                    >
                        <span className="mt-1 text-[14px]">{item.title}</span>
                    </button>
                ))}
            </div>

            <div className='mt-[2rem]'>
                {displayedData.length > 0 ? <TopChartsCarousel fetchedData={displayedData} /> : <span className="loading loading-bars loading-lg"></span>}
            </div>
        </div>
    );
};

export default ClientFilters;
