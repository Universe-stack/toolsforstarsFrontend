//@ts-nocheck
'use client'

import React, {useContext, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoBrush } from "react-icons/io5";
import { IoMicSharp } from "react-icons/io5";
import { IoVideocam } from "react-icons/io5";
import { IoFolderOpen } from "react-icons/io5";
import { FaPenToSquare } from "react-icons/fa6";
import { FaVolumeHigh } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa6";
import { MdAlarm } from "react-icons/md";
import { MdPhotoLibrary } from "react-icons/md";
import { IconsContext } from '@/context/IconsContext';


interface SaasCarouselProps {
  onIconClick: (icon: string) => void; // Explicitly define the type of onIconClick
}

function SampleNextArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black",borderRadius:'999px' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius:'999px'}}
      onClick={onClick}
    />
  );
}



function SaasCarousel() {

  const {icon, setIcon} = useContext(IconsContext)

  const handleIconClick = async (iconn) => {
    await setIcon(iconn)
    console.log(icon)
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 640, // Breakpoint for laptop devices
        settings: {
          slidesToShow: 1, // Show three slides on laptop devices
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      <div className="grid justify-center align-center w-[100%] ">
        <div className=' flex flex-col text-[0.9375rem] place-self-center my-[12px] text-[#717171] hover:text-[#121212] cursor-pointer active:opacity-[70%]' onClick={() => handleIconClick('design')} ><IoBrush className='text-[24px] self-center' /><p className="text-center self-center">Design</p></div>
      </div>
      <div className="flex justify-center align-middle w-[100%]">
      <div className='flex flex-col text-[0.9375rem] self-center my-[12px] text-[#717171] hover:text-[#121212] cursor-pointer active:opacity-[70%]'  onClick={() => handleIconClick('podcasts')}><IoMicSharp className='text-[24px] self-center' /><p className="text-center self-center">Podcast</p></div>
      </div>
      <div className="flex justify-center align-middle w-[100%]">
      <div className='flex flex-col text-[0.9375rem] self-center my-[12px] text-[#717171] hover:text-[#121212] cursor-pointer active:opacity-[70%]'  onClick={() => handleIconClick('videos')}><IoVideocam className='text-[24px] self-center' /><p className="text-center self-center">Video</p></div>
      </div>
      <div className="flex justify-center align-middle w-[100%]">
      <div className='flex flex-col text-[0.9375rem] self-center my-[12px] text-[#717171] hover:text-[#121212] cursor-pointer active:opacity-[70%]'  onClick={() => handleIconClick('team')}><IoFolderOpen className='text-[24px] self-center' /><p className="text-center self-center">Team mgt</p></div>
      </div>
      <div className="flex justify-center align-middle w-[100%]">
      <div className='flex flex-col text-[0.9375rem] self-center my-[12px] text-[#717171] hover:text-[#121212] cursor-pointer active:opacity-[70%]'  onClick={() => handleIconClick('writing')}><FaPenToSquare className='text-[24px] self-center' /><p className="text-center self-center">Writing</p></div>
      </div>
      <div className="flex justify-center align-middle w-[100%]">
      <div className='flex flex-col text-[0.9375rem] self-center my-[12px] text-[#717171] hover:text-[#121212] cursor-pointer active:opacity-[70%]'  onClick={() => handleIconClick('audio')}><FaVolumeHigh className='text-[24px] self-center' /><p className="text-center self-center">Audio</p></div>
      </div>
      <div className="flex justify-center align-middle w-[100%]">
      <div className='flex flex-col text-[0.9375rem] self-center my-[12px] text-[#717171] hover:text-[#121212] cursor-pointer active:opacity-[70%]'  onClick={() => handleIconClick('website')}><FaGlobe className='text-[24px] self-center' /><p className="text-center self-center">Websites</p></div>
      </div>
      <div className="flex justify-center align-middle w-[100%]">
      <div className='flex flex-col text-[0.9375rem] self-center my-[12px] text-[#717171] hover:text-[#121212] cursor-pointer active:opacity-[70%]'  onClick={() => handleIconClick('productivity')}><MdAlarm className='text-[24px] self-center' /><p className="text-center self-center">Productivity</p></div>
      </div>
      <div className="flex justify-center align-middle w-[100%]">
      <div className='flex flex-col text-[0.9375rem] self-center my-[12px] text-[#717171] hover:text-[#121212] cursor-pointer active:opacity-[70%]'><MdPhotoLibrary className='text-[24px] self-center' /><p className="text-center self-center"  onClick={() => handleIconClick('image')}>Images</p></div>
      </div>
      <div className="flex justify-center align-middle w-[100%]">
        <div className='flex flex-col text-[0.9375rem] self-centerem my-[12px] text-[#717171] hover:text-[#121212] cursor-pointer active:opacity-[70%]'><IoBrush className='text-[24px] self-center' /><p className="text-center self-center"  onClick={() => handleIconClick('Design')}>Design</p></div>
      </div>
      <div className="flex justify-center align-middle w-[100%]">
        <div className='flex flex-col text-[0.9375rem] self-centerem my-[12px] text-[#717171] hover:text-[#121212] cursor-pointer active:opacity-[70%]'><IoBrush className='text-[24px] self-center' /><p className="text-center self-center">Design</p></div>
      </div>
    </Slider>
  );
}

export default SaasCarousel;
