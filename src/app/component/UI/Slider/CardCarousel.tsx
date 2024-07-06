'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

function CardCarousel({ data }: { data: any }) {

console.log(data,'images')

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
      {data && data.screenshots ? (
        data.screenshots.map((image: any, index: number) => (
          <div className='w-[100%] h-[150px] bg-contain'>
            <Image key={index} src={`${image}`} alt={''} width={400} height={400} className='w-[100%] h-[100%]' />
          </div>
        ))
      ) : (
        "no images found"
      )}
    </Slider>
  );
}

export default CardCarousel;
