//@ts-nocheck
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCardII from '../ProductCardII'; // Ensure you import the ProductCardII component

function TopChartsCarousel({ fetchedData }) {
  // Ensure fetchedData is an array
  const products = Array.isArray(fetchedData) ? fetchedData : [];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className='shadow-none'>
      {products.map((product) => (
        <div key={product._id}>
          <ProductCardII
            name={product.name}
            description={product.description}
            logo={product.logo}
            productType={product.productType}
          />
        </div>
      ))}
    </Slider>
  );
}

export default TopChartsCarousel;
