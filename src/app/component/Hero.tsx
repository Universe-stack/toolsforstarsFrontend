//@ts-nocheck

import React from 'react';
import Carousel from './UI/Slider/Carousel';
import TopChartsCarousel from './UI/Slider/TopChartsCarousel';
import AdsCarousel from './UI/Slider/AdsCarousel';
import HeroForm from './HeroForm';
import ClientFilters from './ClientFilters'; // New client component

const buttonOptions = [
  { title: "Top Free" },
  { title: "Top Paid" },
  { title: "AI Tool" },
  { title: "New" },
  { title: "Mobile apps" },
  { title: "SAAS tools" },
  { title: "Courses" },
];

const fetchAllProducts = async () => {
  const res = await fetch('https://createcamp.onrender.com/tools/all', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return Array.isArray(data.tools) ? data.tools : [];
};

const fetchAds = async (space) => {
  const res = await fetch('https://createcamp.onrender.com/ads/all', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data.filter(item => item.adSpace === space);
};

const Hero = async () => {
  const fetchedData = await fetchAllProducts();
  const ads = await fetchAds('hero');
  const adsPro = await fetchAds('hero-pro');

  const writingData = fetchedData.filter(tool => tool.categories?.includes('writing'));
  const videoData = fetchedData.filter(tool => tool.categories?.includes('video'));
  const audioData = fetchedData.filter(tool => tool.categories?.includes('audio'));
  const designData = fetchedData.filter(tool => tool.categories?.includes('design'));
  const topChartData = fetchedData
    .filter(tool => tool.averageReview >= 0)
    .sort((a, b) => (b.averageReview + b.upvotes) - (a.averageReview + a.upvotes));


  return (
    <section className='flex flex-col justify-center w-[100vw] pb-[3rem] bg-starsWhite'>
      <div className='self-center 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] xsm:w-[100%] flex gap-[5%] h-[100%] herbg 2xl:h-[80vh] md:h-[100%] xsm:h-[100%] sm:flex-col xsm:flex-col 2xl:flex-row md:pb-[3rem] sm:pb-[3rem] xsm:pb-[3rem]'>
        <div className='2xl:w-[50%] md:w-[80%] sm:w-[90%] xsm:w-[90%] flex self-center md:mt-[5rem] xsm:mt-[5rem]'>
          <div className='2xl:w-[72%] md:w-[100%] 2xl:ml-auto md:ml-0 md:self-center'>
            <h1 className='text-[48px] font-[700] text-starsWhite '> You&apos;ve got the skills already -  Let us kit you up</h1>
            <p className='mt-[1rem] text-[1rem] text-starsWhite'>
              This collection contains a variety of Tailwind hero components that can be used in your next project
            </p>

            <div className='mt-[5rem] w-[100%]'>
              <HeroForm />
            </div>
          </div>
        </div>
        <div className='2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[90%] sm:w-[90%] xsm:w-[80%] xsm:mt-[1rem] md:mt-[1rem] sm:mt-[1rem] self-center'>
          <Carousel ads={adsPro} />
        </div>
      </div>

      <div className="2xl:w-[75%] xl:w-[75%] md:w-[90%] sm:w-[90%] xsm:w-[90%] self-center ">
        <div className="mt-[3rem]">
          <h2 className='font-[600] text-[1.5rem]'> Top Charts</h2>
          <ClientFilters
            data={topChartData} // Example, you can pass different data here
            buttonOptions={buttonOptions}
            category={"top charts"}
          />
        </div>

        <div className="mt-[3rem]">
          <h2 className='font-[600] text-[1.5rem] mb-1'> Video Editing Tools</h2>
          <ClientFilters
            data={videoData} // Example, you can pass different data here
            buttonOptions={buttonOptions}
            category={"video"}
          />
        </div>

        <div className="mt-[3rem]">
          <h2 className='font-[600] text-[1.5rem] mb-1'> Audio Tools</h2>
          <ClientFilters
            data={audioData} // Example, you can pass different data here
            buttonOptions={buttonOptions}
            category={"audio"}
          />
        </div>


        
          <div class="relative overflow-hidden bg-starsBlack my-[4rem] rounded-2xl">
            <div class="absolute inset-0">
                <img class="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left" src="https://res.cloudinary.com/dck5v2kub/image/upload/v1722888783/toolsForstars/hero_ads_background_hqwjwu.jpg" alt="" />
            </div>
            <div class="absolute inset-0 hidden bg-gradient-to-r md:block from-starsBlack to-starsBlack/60"></div>
            <div class="absolute inset-0 block bg-starsBlack/80 md:hidden"></div>
            
            <AdsCarousel ads={ads} />
          </div>
        

        <div className="mt-[3rem]">
          <h2 className='font-[600] text-[1.5rem] mb-1'> Writing Tools</h2>
          <ClientFilters
            data={writingData} // Example, you can pass different data here
            buttonOptions={buttonOptions}
            category={"writing"}
          />
        </div>

        <div className="mt-[3rem]">
          <h2 className='font-[600] text-[1.5rem] mb-1'> Design Tools</h2>
          <ClientFilters
            data={designData} // Example, you can pass different data here
            buttonOptions={buttonOptions}
            category={"design"}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
