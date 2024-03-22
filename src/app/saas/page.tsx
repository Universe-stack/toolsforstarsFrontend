"use client"
import React from 'react';
import SaasCarousel from "../component/UI/Slider/SaasCarousel"


const SaasList = () => {
  return (
    <section className='w-[100%] flex flex-col justify-center relative'>
      <div className='w-[75%] self-center'>
        <div className='w-full h-[25rem] mt-[3rem] bg-starsBlack rounded-[1.5rem] text-starsWhite text-center '>
          <h2 className='font-[600] text-[3rem] pt-[7rem]'>PLACE ADS HERE</h2>
        </div>
        
        <div className='custom-after absolute left-0 right-0'></div>

        <div className="">
          <div className='flex gap-3 mt-[2rem]'>
             <div className='w-[90%] mt-[0.83rem]'>
                <SaasCarousel />
             </div>

          </div>

          <div className=''>

          </div>
        </div>
      </div>
    </section>
  )
}

export default SaasList