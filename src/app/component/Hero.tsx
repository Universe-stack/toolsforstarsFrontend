//@ts-nocheck
'use client';

import React, { useState, useEffect } from 'react';
import Carousel from './UI/Slider/Carousel';
import TopChartsCarousel from './UI/Slider/TopChartsCarousel';
import AdsCarousel from './UI/Slider/AdsCarousel';
import ProductCard from './UI/saasProductCard/ProductCard'; // Assuming you have this component
import { useAuth } from '@/context/AuthContext';


const buttonOptions = [
  { title: "Top Free" },
  { title: "Top Paid" },
  { title: "AI Tool" },
  { title: "New" },
  { title: "Mobile apps" },
  { title: "SAAS tools" },
  { title: "Courses" },
];

const Hero = () => {
  const [clickedButton, setClickedButton] = useState(null);
  const { state, dispatch } = useAuth();
  const [fetchedData, setFetchedData] = useState([]);
  const [writingData, setWritingData] = useState([]);
  const [videoData, setVideoData] = useState([]);
  const [audioData, setAudioData] = useState([]);
  const [featuredData, setFeaturedData] = useState([]);
  const [topChartData, setTopChartData] = useState([]);
  const [designData, setDesignData] = useState([]);
  const [ads, setAds] = useState([])
  const [adsPro, setAdsPro] = useState([])

  useEffect(() => {
    const fetchAllProducts = async (retries = 3, delay = 8000) => {
      try {
        const res = await fetch('https://createcamp.onrender.com/tools/all', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json();
        console.log(data, "all products");

        if (Array.isArray(data.tools)) {
          setFetchedData(data.tools);
        } else {
          console.error('Expected data to be an array:', data);
        }
      } catch (error) {
        console.error('Error fetching products', error);
        if (retries > 0) {
          setTimeout(() => fetchAllProducts(retries - 1, delay * 2), delay);
        }
      }
    };

    fetchAllProducts();
  }, []);

  const fetchAds = async (retries = 3, delay = 8000) => {
    try {
      const response = await fetch('https://createcamp.onrender.com/ads/all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      if (!response.ok) {
        toast.error('Error fetching ads, please refresh!');
        throw new Error('Failed to fetch ads');
      }

      if (!data) {
        console.error('No ads found');
      } else {
        setAds(data.filter(item=>item.adSpace === 'hero-pro'));
        setAdsPro(data.filter(item=>item.adSpace === 'hero-pro'));
      }
    } catch (error) {
      console.error('Error fetching ads', error);
      if (retries > 0) {
        setTimeout(() => fetchAds(retries - 1, delay * 2), delay);
      }
    }
  };

  useEffect(() => {
    fetchAds();
  }, []);

  useEffect(() => {
    if (fetchedData.length) {
      setWritingData(fetchedData.filter(tool => tool.categories && tool.categories.includes('writing')));
      setVideoData(fetchedData.filter(tool => tool.categories && tool.categories.includes('video')));
      setAudioData(fetchedData.filter(tool => tool.categories && tool.categories.includes('audio')));
      setDesignData(fetchedData.filter(tool => tool.categories && tool.categories.includes('design')));
      setTopChartData(
        fetchedData
          .filter(tool => tool.averageReview >= 0)
          .sort((a, b) => (b.averageReview + b.upvotes) - (a.averageReview + a.upvotes))
      );
    }
  }, [fetchedData]);

  const handleWritingFilter = (param) => {
    let filteredData = fetchedData.filter(tool => tool.categories && tool.categories.includes('writing'));

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
    } else if (param === 'SAAS Tools') {
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
    setWritingData(filteredData);
  };

  const handleVideoFilter = (param) => {
    let filteredData = fetchedData.filter(tool => tool.categories && tool.categories.includes('video'));

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
    } else if (param === 'SAAS Tools') {
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
    setVideoData(filteredData);
  };

  const handleAudioFilter = (param) => {
    let filteredData = fetchedData.filter(tool => tool.categories && tool.categories.includes('audio'));

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
    } else if (param === 'SAAS Tools') {
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
    setAudioData(filteredData);
  };

  const handleDesignFilter = (param) => {
    let filteredData = fetchedData.filter(tool => tool.categories && tool.categories.includes('design'));

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
    } else if (param === 'SAAS Tools') {
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
    setDesignData(filteredData);
  };


  return (
    <section className='flex flex-col justify-center w-[100vw] pb-[3rem]'>
      <div className='self-center w-[100%] flex gap-[5%] h-[100%] herbg h-[80vh]'>
        <div className='w-[50%] flex self-center '>
          <div className='w-[72%] ml-auto'>
            <h1 className='text-[48px] font-[700] text-starsWhite '> You've got the skills already -  Let us kit you up</h1>
            <p className='mt-[1rem] text-[1rem] text-starsWhite'>
              This collection contains a variety of Tailwind hero components that can be used in your next project
            </p>

            <div className='mt-[5rem] w-[100%]'>
              <p className='font-[600] text-starsWhite'>Join our newsletter to get updates on new tools weekly</p>

              <div className='flex w-[100%] gap-3 mt-[1rem]'>
                <input type="text" placeholder="Enter your email" className="input input-bordered w-[100%] max-w-xs" />
                <button className='bg-[#e49a2d] text-starsWhite w-[30%] rounded-md hover:bg-starsGrey hover:text-starsWhite inline-flex items-center justify-center'>
                  Join in
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[50%] self-center'>
          <Carousel ads={adsPro} />
        </div>
      </div>

      <div className="w-[75%] self-center ">
        <div className="mt-[3rem]">
          <h2 className='font-[600] text-[1.5rem]'> Top Charts</h2>
          <div className='flex gap-[1rem] mt-[1rem]'>
            {buttonOptions.map((item, id) => (
              <button key={id} className={`inline-flex items-center justify-center px-[12px] py-[6px] rounded-full border hover:bg-[#e49a2d] hover:text-starsWhite hover:border-none ${clickedButton === id ? 'bg-starspink' : ''}`}>
                <span className="mt-1 text-[14px]">{item.title}</span>
              </button>
            ))}
          </div>
          <div className='mt-[2rem]'>
          {topChartData.length ? <TopChartsCarousel fetchedData={topChartData} /> : <span className="loading loading-bars loading-lg"></span>}
          </div>
        </div>

        <div className="mt-[3rem]">
          <h2 className='font-[600] text-[1.5rem]'> Video Editing Tools</h2>
          <div className='flex gap-[1rem] mt-[1rem]'>
            {buttonOptions.map((item, id) => (
              <button key={id} onClick={() => handleVideoFilter(item.title)} className={`inline-flex items-center justify-center px-[12px] py-[6px] rounded-full border hover:bg-[#e49a2d] hover:text-starsWhite hover:border-none ${clickedButton === id ? 'bg-starspink' : ''}`}>
                <span className="mt-1 text-[14px]">{item.title}</span>
              </button>
            ))}
          </div>
            <div className='mt-[2rem]'>
            {videoData.length ? <TopChartsCarousel fetchedData={videoData} /> : <span className="loading loading-bars loading-lg"></span> }
            </div>
        </div>

        <div className="mt-[3rem]">
          <h2 className='font-[600] text-[1.5rem]'> Audio Tools</h2>
          <div className='flex gap-[1rem] mt-[1rem]'>
            {buttonOptions.map((item, id) => (
              <button key={id} onClick={() => handleAudioFilter(item.title)} className={`inline-flex items-center justify-center px-[12px] py-[6px] rounded-full border hover:bg-[#e49a2d] hover:text-starsWhite hover:border-none ${clickedButton === id ? 'bg-starspink' : ''}`}>
                <span className="mt-1 text-[14px]">{item.title}</span>
              </button>
            ))}
          </div>
          <div className='mt-[2rem]'>
            {audioData.length ? <TopChartsCarousel fetchedData={audioData} /> : <span className="loading loading-bars loading-lg"></span>}
          </div>
        </div>


        
          <div class="relative overflow-hidden bg-starsBlack my-[4rem] rounded-2xl">
            <div class="absolute inset-0">
                <img class="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/5/girl-working-on-laptop.jpg" alt="" />
            </div>
            <div class="absolute inset-0 hidden bg-gradient-to-r md:block from-starsBlack to-starsBlack/60"></div>
            <div class="absolute inset-0 block bg-starsBlack/80 md:hidden"></div>
            
            <AdsCarousel ads={ads} />
          </div>
        

        <div className="mt-[3rem]">
          <h2 className='font-[600] text-[1.5rem]'> Writing Tools</h2>
          <div className='flex gap-[1rem] mt-[1rem]'>
            {buttonOptions.map((item, id) => (
              <button key={id} onClick={() => handleWritingFilter(item.title)} className={`inline-flex items-center justify-center px-[12px] py-[6px] rounded-full border hover:bg-[#e49a2d] hover:text-starsWhite hover:border-none ${clickedButton === id ? 'bg-starspink' : ''}`}>
                <span className="mt-1 text-[14px]">{item.title}</span>
              </button>
            ))}
          </div>
          <div className='mt-[2rem]'>
            {writingData.length ? <TopChartsCarousel fetchedData={writingData} /> : <span className="loading loading-bars loading-lg"></span>}
          </div>
        </div>

        <div className="mt-[3rem]">
          <h2 className='font-[600] text-[1.5rem]'> Design Tools</h2>
          <div className='flex gap-[1rem] mt-[1rem]'>
            {buttonOptions.map((item, id) => (
              <button key={id} onClick={() => handleDesignFilter(item.title)} className={`inline-flex items-center justify-center px-[12px] py-[6px] rounded-full border hover:bg-[#e49a2d] hover:text-starsWhite hover:border-none ${clickedButton === id ? 'bg-starspink' : ''}`}>
                <span className="mt-1 text-[14px]">{item.title}</span>
              </button>
            ))}
          </div>
          <div className='mt-[2rem]'>
            {designData.length ? <TopChartsCarousel fetchedData={designData} /> : <span className="loading loading-bars loading-lg"></span>}
          </div>
        </div>


      </div>
    </section>
  );
};

export default Hero;
