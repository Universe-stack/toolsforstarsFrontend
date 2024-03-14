"use client"
import React,{useState} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from '../productCard';


function Carousel() {
    
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow:2,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 3000,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 640, // Breakpoint for laptop devices
            settings: {
              slidesToShow: 1, // Show three slides on laptop devices
              slidesToScroll: 1,
            }
          }
        ]
      };
  
    return (
          <Slider {...settings}>
            <div>
              <ProductCard name="alih" description="Connect your WordPress forms with hundreds of popular tools using custom-built integrations" />
            </div>
            <div>
              <ProductCard name="Beingo" description="Connect your WordPress forms with hundreds of popular tools using custom-built integrations" />
            </div>
            <div>
              <ProductCard name="Lakpa" description="Connect your WordPress forms with hundreds of popular tools using custom-built integrations" />
            </div>
            <div>
              <ProductCard name="Feura" description="Connect your WordPress forms with hundreds of popular tools using custom-built integrations" />
            </div>
            <div>
              <ProductCard name="Bioan" description="Connect your WordPress forms with hundreds of popular tools using custom-built integrations" />
            </div>
            <div>
              <ProductCard name="haone" description="Connect your WordPress forms with hundreds of popular tools using custom-built integrations" />
            </div>
          </Slider>
    );
  }
  
  export default Carousel;