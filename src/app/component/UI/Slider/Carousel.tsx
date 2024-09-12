'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from '../productCard';

function Carousel({ads}:any) {

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
          slidesToShow: 1, 
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings} className='z-30'>
      {ads.map((product:any, index:any) => (
        <div key={index} >
          <ProductCard name={product.title} description={product.description} productLink={product.purchaseLink} price={product.price} image={product.image}  />
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;
