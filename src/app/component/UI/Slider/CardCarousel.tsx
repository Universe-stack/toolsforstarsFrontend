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
        <div className='w-full 2xl:h-[200px] xl:h-[200px] md:h-[200px] lg:h-[200px] sm:h-[100%] xsm:h-[100%] bg-contain' key={index}>
          <Image
            key={index}
            src={`${image}`}
            alt={'Screenshot'}
            layout='responsive'
            width={400}
            height={400}
            className='w-full h-full object-contain'
          />
        </div>
      ))
    ) : (
      "no images found"
    )}

    </Slider>
  );
}

export default CardCarousel;
