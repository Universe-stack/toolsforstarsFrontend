import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

function ProductdetailCarousel(images:any) {
console.log(images,'images')
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
      {images.images.map((image:any, index:any) => (
        <Image key={index} src={image} alt={''} width={400} height={400} />
      ))}
    </Slider>
  );
}

export default ProductdetailCarousel;
