"use client"
import React, { useContext, useState, useEffect } from 'react';
import SaasCarousel from '../component/UI/Slider/SaasCarousel';
import ProductCard from '../component/UI/saasProductCard/ProductCard';
import { IconsContext } from '@/context/IconsContext';
import Link from 'next/link'

export default function Page() {
  const products = [
    { link:'', name: 'alih', description: 'Connect your WordPress forms with hundreds of popular tools using custom-built integrations',images:['https://res.cloudinary.com/dck5v2kub/image/upload/v1710263377/toolsForstars/SAASPIC1_yv31md.webp', 'https://res.cloudinary.com/dck5v2kub/image/upload/v1710263377/toolsForstars/SAASPIC1_yv31md.webp'] },
    { link:'', name: 'Beingo', description: 'Connect your WordPress forms with hundreds of popular tools using custom-built integrations',images:['https://res.cloudinary.com/dck5v2kub/image/upload/v1710263377/toolsForstars/SAASPIC1_yv31md.webp', 'https://res.cloudinary.com/dck5v2kub/image/upload/v1710263377/toolsForstars/SAASPIC1_yv31md.webp'] },
    { link:'', name: 'Lakpa', description: 'Connect your WordPress forms with hundreds of popular tools using custom-built integrations', images:['https://res.cloudinary.com/dck5v2kub/image/upload/v1710263377/toolsForstars/SAASPIC1_yv31md.webp', 'https://res.cloudinary.com/dck5v2kub/image/upload/v1710263377/toolsForstars/SAASPIC1_yv31md.webp'] },
    { link:'', name: 'Feura', description: 'Connect your WordPress forms with hundreds of popular tools using custom-built integrations',images:['https://res.cloudinary.com/dck5v2kub/image/upload/v1710263377/toolsForstars/SAASPIC1_yv31md.webp', 'https://res.cloudinary.com/dck5v2kub/image/upload/v1710263377/toolsForstars/SAASPIC1_yv31md.webp'] },
    { link:'', name: 'Bioan', description: 'Connect your WordPress forms with hundreds of popular tools using custom-built integrations',images:['https://res.cloudinary.com/dck5v2kub/image/upload/v1710263377/toolsForstars/SAASPIC1_yv31md.webp', 'https://res.cloudinary.com/dck5v2kub/image/upload/v1710263377/toolsForstars/SAASPIC1_yv31md.webp'] },
    { link:'', name: 'haone', description: 'Connect your WordPress forms with hundreds of popular tools using custom-built integrations',images:['https://res.cloudinary.com/dck5v2kub/image/upload/v1710263377/toolsForstars/SAASPIC1_yv31md.webp', 'https://res.cloudinary.com/dck5v2kub/image/upload/v1710263377/toolsForstars/SAASPIC1_yv31md.webp'] }
  ];

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

        <div className='w-[100%]'>
          <div className='flex gap-3 mt-[2rem]'>
            <div className='w-[90%] mt-[0.83rem]'>
              <SaasCarousel />
            </div>
          </div>

          <div className=''>
            {data && <ProductCard data={data} />}
          </div>

          <div className= 'grid grid-cols-4 gap-10 mt-[5rem] w-[100%]'>
              {products.map((item)=><ProductCard key={''} data={item} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
