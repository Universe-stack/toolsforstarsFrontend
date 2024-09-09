//@ts-nocheck
'use client'

import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoBrush, IoMicSharp, IoVideocam, IoFolderOpen } from "react-icons/io5";
import { FaPenToSquare, FaVolumeHigh, FaGlobe } from "react-icons/fa6";
import { MdAlarm, MdPhotoLibrary } from "react-icons/md";

const categories = [
  { name: 'Design', icon: IoBrush, slug: 'design' },
  { name: 'Podcast', icon: IoMicSharp, slug: 'podcast' },
  { name: 'Video', icon: IoVideocam, slug: 'video' },
  { name: 'Team mgt', icon: IoFolderOpen, slug: 'team' },
  { name: 'Writing', icon: FaPenToSquare, slug: 'writing' },
  { name: 'Audio', icon: FaVolumeHigh, slug: 'audio' },
  { name: 'Websites', icon: FaGlobe, slug: 'website' },
  { name: 'Productivity', icon: MdAlarm, slug: 'productivity' },
  { name: 'Images', icon: MdPhotoLibrary, slug: 'image' },
];
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



export default function SaasCarousel({ currentCategory }) {


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
        breakpoint: 1024, // Large screens, desktops
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
//1024
  return (
    <Slider {...settings}>
    {categories.map((category) => (
      <div key={category.slug} className="grid justify-center align-center w-[100%]">
        <Link href={`/saas/${category.slug}`} className={`flex flex-col text-[0.9375rem] place-self-center my-[12px] ${currentCategory === category.slug ? 'text-[#121212]' : 'text-[#717171]'} hover:text-[#121212] cursor-pointer active:opacity-[70%]`}>
          <category.icon className='text-[24px] self-center' />
          <p className="text-center self-center">{category.name}</p>
        </Link>
      </div>
    ))}
  </Slider>
  );
}

