'use client'

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

function ProductdetailCarousel(props:any) {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
    <Slider {...settings} className='gap-[1%]'>
     {props.productImages.images?.map((image: string, index: number) => (
                <div key={' '} className='w-[100%] px-[10px] py-[5px]'>
                    <Image src={`${image}`} width={500} height={400} alt="" className='rounded-md'/>
                </div>
            ))}
    </Slider>
  );
}

export default ProductdetailCarousel;
