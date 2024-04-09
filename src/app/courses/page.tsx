"use client"
import React, { useContext, useState, useEffect } from 'react';
import SaasCarousel from '../component/UI/Slider/SaasCarousel';
import ProductCard from '../component/UI/productCard/ProductCard';
import { IconsContext } from '@/context/IconsContext';

export default function Page() {
  const { icon } = useContext<any>(IconsContext);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.example/${icon}`);
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [icon]); 


  return (
    <section className='w-[100%] flex flex-col justify-center relative'>
      <div className='w-[75%] self-center'>
        <div className='w-full h-[25rem] mt-[3rem] bg-starsBlack rounded-[1.5rem] text-starsWhite text-center '>
          <h2 className='font-[600] text-[3rem] pt-[7rem]'>PLACE ADS HERE</h2>
        </div>

        <div className='custom-after absolute left-0 right-0'></div>

        <div className=''>
          <div className='flex gap-3 mt-[2rem]'>
            <div className='w-[90%] mt-[0.83rem]'>
              <SaasCarousel />
            </div>
          </div>

          <div className=''>
            {data && <ProductCard data={data} />}
          </div>
        </div>
      </div>
    </section>
  );
}
