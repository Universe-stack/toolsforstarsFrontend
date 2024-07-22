//@ts-nocheck
'use client';

import React, { useState, useEffect } from 'react';
import Carousel from './UI/Slider/Carousel';
import TopChartsCarousel from './UI/Slider/TopChartsCarousel';
import ProductCard from './UI/saasProductCard/ProductCard'; // Assuming you have this component
import { useAuth } from '@/context/AuthContext';

const buttonOptions = [
  { title: "Top free" },
  { title: "Top grossing" },
  { title: "Top paid" },
];

const Hero = () => {
  const [clickedButton, setClickedButton] = useState(null);
  const { state, dispatch } = useAuth();
  const [fetchedData, setFetchedData] = useState([]);
  const [writingData, setWritingData] = useState([]);
  const [videoData, setVideoData] = useState([]);
  const [audioData, setAudioData] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await fetch('https://createcamp.onrender.com/tools/all', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json();
        console.log(data, "all products");

        // Ensure data is an array
        if (Array.isArray(data.tools)) {
          setFetchedData(data.tools);
        } else {
          console.error('Expected data to be an array:', data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllProducts();
  }, []);

  useEffect(() => {
    if (fetchedData.length) {
      setWritingData(fetchedData.filter(tool => tool.categories && tool.categories.includes('audio')));
      setVideoData(fetchedData.filter(tool => tool.categories && tool.categories.includes('video')));
      setAudioData(fetchedData.filter(tool => tool.categories && tool.categories.includes('audio')));
    }
  }, [fetchedData]);

  const handleWritingFilter = (param) => {
    if (param === 'New') {
      const sortedData = [...writingData].sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate));
      setWritingData(sortedData);
    } else if (param === 'Top Paid') {
      console.log('top paid');
    }
  };

  const handleAudioFilter = (param) => {
    if (param === 'New') {
      const sortedData = [...audioData].sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate));
      setAudioData(sortedData);
    } else if (param === 'Top Paid') {
      console.log('top paid');
    }
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
          <Carousel />
        </div>
      </div>

      <div className="w-[75%] self-center ">
        <div className="mt-[3rem]">
          <h2 className='font-[600] text-[1.5rem]'> Top Charts</h2>
          <div className='flex gap-[1rem] mt-[1rem]'>
            {buttonOptions.map((item, id) => (
              <button key={id} className={`inline-flex items-center justify-center px-[12px] py-[8px] rounded-full border hover:bg-[#e49a2d] hover:text-starsWhite hover:border-none ${clickedButton === id ? 'bg-starspink' : ''}`}>
                {item.title}
              </button>
            ))}
          </div>
          <div className='mt-[2rem]'>
            <TopChartsCarousel fetchedData={fetchedData} />
          </div>
        </div>

        <div className="mt-[3rem]">
          <h2 className='font-[600] text-[1.5rem]'> Video Editing Tools</h2>
          <div className='flex gap-[1rem] mt-[1rem]'>
            {buttonOptions.map((item, id) => (
              <button key={id} className={`inline-flex items-center justify-center px-[12px] py-[8px] rounded-full border hover:bg-[#e49a2d] hover:text-starsWhite hover:border-none ${clickedButton === id ? 'bg-starspink' : ''}`}>
                {item.title}
              </button>
            ))}
          </div>
          <div className='mt-[2rem]'>
          {videoData.length ? <TopChartsCarousel fetchedData={videoData} /> : <div>Loading...</div>}
          </div>
        </div>

        <div className="mt-[3rem]">
          <h2 className='font-[600] text-[1.5rem]'> Audio Tools</h2>
          <div className='flex gap-[1rem] mt-[1rem]'>
            {buttonOptions.map((item, id) => (
              <button key={id} onClick={() => handleAudioFilter(item.title)} className={`inline-flex items-center justify-center px-[12px] py-[8px] rounded-full border hover:bg-[#e49a2d] hover:text-starsWhite hover:border-none ${clickedButton === id ? 'bg-starspink' : ''}`}>
                {item.title}
              </button>
            ))}
          </div>
          <div className='mt-[2rem]'>
            {audioData.length ? <TopChartsCarousel fetchedData={audioData} /> : <div>Loading...</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
