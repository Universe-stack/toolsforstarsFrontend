'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AdCard from '../AdCard';


function AdsCarousel({ads}:any) {

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

  console.log(ads, "from adscarousel")

  return (
    <Slider {...settings}>
      {ads?.map((ad:any, index:any) => (
        <div key={index} className='w-[100%] self-center flex justify-center items-center'>
          <AdCard title={ad.title} description={ad.description} price={ad.price} link={ad.purchaseLink} image={ad.image} />
        </div>
      ))}
    </Slider>
  );
}

export default AdsCarousel;
