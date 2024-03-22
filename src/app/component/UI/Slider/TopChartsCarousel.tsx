import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCardII from '../ProductCardII'

function TopChartsCarousel() {
  const products = [
    { name: 'alih', description: 'Connect your WordPress forms with hundreds of popular tools using custom-built integrations' },
    { name: 'Beingo', description: 'Connect your WordPress forms with hundreds of popular tools using custom-built integrations' },
    { name: 'Lakpa', description: 'Connect your WordPress forms with hundreds of popular tools using custom-built integrations' },
    { name: 'Feura', description: 'Connect your WordPress forms with hundreds of popular tools using custom-built integrations' },
    { name: 'Bioan', description: 'Connect your WordPress forms with hundreds of popular tools using custom-built integrations' },
    { name: 'haone', description: 'Connect your WordPress forms with hundreds of popular tools using custom-built integrations' }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <Slider {...settings} className='shadow-none'>
      {products.map((product, index) => (
        <div key={index}>
          <ProductCardII name={product.name} description={product.description} />
        </div>
      ))}
    </Slider>
  );
}

export default TopChartsCarousel;
