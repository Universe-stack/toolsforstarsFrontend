//@ts-nocheck

import React from 'react';
import Carousel from './UI/Slider/Carousel';
import TopChartsCarousel from './UI/Slider/TopChartsCarousel';
import AdsCarousel from './UI/Slider/AdsCarousel';
import HeroForm from './HeroForm';
import ClientFilters from './ClientFilters'; // New client component
import HeroVideo from '../component/HeroVideo'
import Image from 'next/image'

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
  try {
    const res = await fetch('https://createcamp.onrender.com/tools/all');

    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await res.json();
    console.log(data, "data hero");

    // Ensure we return an array
    return Array.isArray(data.tools) ? data.tools : [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; // Return an empty array as fallback
  }
};

const fetchAds = async (space) => {
  try {
    const res = await fetch('https://createcamp.onrender.com/ads/all');

    if (!res.ok) {
      throw new Error('Failed to fetch ads');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching ads:', error);
    return {}; // Return an empty object as fallback
  }
};

const Hero = async () => {
  const fetchedData = await fetchAllProducts();
  const ads= await fetchAds();

  const writingData = fetchedData.filter(tool => tool.categories?.includes('writing'));
  const videoData = fetchedData.filter(tool => tool.categories?.includes('video'));
  const audioData = fetchedData.filter(tool => tool.categories?.includes('audio'));
  const designData = fetchedData.filter(tool => tool.categories?.includes('design'));
  const topChartData = fetchedData
    .filter(tool => tool.averageReview >= 0)
    .sort((a, b) => (b.averageReview + b.upvotes) - (a.averageReview + a.upvotes));


  return (
    <section className='flex flex-col justify-center w-[100%] pb-[3rem] bg-starsWhite'>
      <div className='self-center 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] xsm:w-[100%] flex justify-center gap-[5%] chrLl:gap-[2%] lg:gap-[2%] h-[100%] 2xl:h-[80vh] xl:h-[80vh] lg:h-[80%] md:h-[100%] xsm:h-[100%] sm:flex-col xsm:flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-col md:pb-[3rem] sm:pb-[3rem] xsm:pb-[3rem] relative'>
          <HeroVideo />
        <div className=' 2xl:w-[50%] chrLl:w-[40%] xl:w-[50%] lg:w-[50%] md:w-[80%] sm:w-[80%] xsm:w-[80%] flex xl:justify-between lg:justify-between md:justify-center self-center md:mt-[5rem] xsm:mt-[5rem] chrLl:mt-[1.1rem] lg:mt-[2.5rem]  z-30'>
          <div className='2xl:w-[72%] xl:w-[80%] chrLl:w-[90%] lg:w-[80%]  md:w-[100%] 2xl:ml-[21%] xl:ml-[21%] lg:ml-[21%]  md:self-center 2xl:self-start  chrLl:self-start lg:self-center xl:self-start '>
            
            <h1 className='text-4xl chrLl:text-[2.5rem] xl:text-[2.5rem] chrLl:leading-[3.5rem] lg:text-[1.65rem]  sm:text-5xl md:text-4xl font-[700] text-starsWhite text-center xl:text-left 2xl:text-left lg:text-left xsm:leading-[3rem] sm:leading-[3rem] md:leading-[3.5rem] lg:leading-[3rem] xl:leading-[3rem] 2xl:leading-[3.5rem]'> You&apos;ve got the skills already -  Let us kit you up</h1>
            <p className='mt-[1rem] text-[1rem] text-starsWhite text-center xl:text-left 2xl:text-left text-2xl xsm:text-[1.05rem] sm:text-[1.05rem] lg:text-left md:text-[1.1rem] lg:text-[0.9rem]  2xl:leading-8 xl:leading-8 lg:leading-6 xl:text-[1rem] '>
              This collection contains a variety of secret internet creator resources that you can use in your next project
            </p>

            <div className='2xl:mt-[5rem] w-[100%] xl:mt-[5rem] lg:mt-[2rem] md:mt-[4rem] sm:mt-[4rem] xsm:mt-[4rem] z-30'>
                <HeroForm />
            </div>
          </div>
        </div>
        <div className=' 2xl:w-[50%] chrLl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[90%] sm:w-[90%] xsm:w-[80%] xsm:mt-[1rem] md:mt-[1rem] sm:mt-[1rem] self-center overflow-hidden'>
          <Carousel ads={ads} />
        </div>
     </div>

      <div className="2xl:w-[75%] xl:w-[75%] chrLl:w-[90%] md:w-[80%] sm:w-[80%] xsm:w-[80%] self-center ">
        <div className="mt-[3rem]">
          <h2 className='font-[600] text-[1.5rem] text-starsBlack'> Top Charts</h2>
          <ClientFilters
            data={topChartData} // Example, you can pass different data here
            buttonOptions={buttonOptions}
            category={"top charts"}
          />
        </div>

        <div className="mt-[3rem]">
          <h2 className='font-[600] text-[1.5rem] text-starsBlack mb-1'> Video Editing Tools</h2>
          <ClientFilters
            data={videoData} // Example, you can pass different data here
            buttonOptions={buttonOptions}
            category={"video"}
          />
        </div>

        <div className="mt-[3rem]">
          <h2 className='font-[600] text-[1.5rem] text-starsBlack mb-1'> Audio Tools</h2>
          <ClientFilters
            data={audioData} // Example, you can pass different data here
            buttonOptions={buttonOptions}
            category={"audio"}
          />
        </div>


        
          <div class="relative overflow-hidden bg-starsBlack my-[4rem] rounded-2xl">
            <div class="absolute inset-0">
                <Image width={500} height={500} className="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left" src="https://res.cloudinary.com/dck5v2kub/image/upload/v1726114213/and-machines-OHoiN-8O8po-unsplash_hb0gav.jpg" alt="" />
            </div>
            <div class="absolute inset-0 hidden bg-gradient-to-r md:block from-starsBlack to-starsBlack/60"></div>
            <div class="absolute inset-0 block bg-starsBlack/80 md:hidden"></div>
            
            <AdsCarousel ads={ads} />
          </div>
        

        {/* <div className="mt-[3rem]">
          <h2 className='font-[600] text-[1.5rem] text-starsBlack mb-1'> Writing Tools</h2>
          <ClientFilters
            data={writingData} // Example, you can pass different data here
            buttonOptions={buttonOptions}
            category={"writing"}
          />
        </div> */}

        <div className="mt-[3rem]">
          <h2 className='font-[600] text-[1.5rem] text-starsBlack mb-1'> Design Tools</h2>
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
