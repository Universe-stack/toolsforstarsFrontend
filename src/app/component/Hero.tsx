import React from 'react';
import Carousel from './UI/Slider/Carousel';


const Hero = () => {
  return (
    <section className='flex flex-col justify-center w-[100vw] h-[80vh] '>
      <div className='self-center w-[100%] flex gap-[5%] h-[100%] herbg'>
        <div className='w-[50%] flex self-center '>
          <div className='w-[72%] ml-auto'>
            <h1 className='text-[48px] font-[700] text-starsWhite '> You've got the skills already -  Let us kit you up</h1>
            <p className='mt-[1rem] text-[1rem] text-starsWhite'>
              This collection contains a variety of Tailwind hero components that can be used in your next project
            </p>

            <div className='mt-[5rem] w-[100%]'>
              <p className='font-[600] text-starsWhite'>Join our newsletter to get updates on new tools weekly</p>

              <div className='flex w-[100%] gap-3 mt-[1rem]'>
                <input type="text" placeholder="Enter your email" className="input input-bordered w-[100%] max-w-xs" />
                <button className='bg-[#e49a2d] text-starsWhite w-[30%] rounded-md hover:bg-starspurpleLight hover:text-starsWhite'>
                  Join in
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[50%] self-center'>
          <Carousel />
        </div>
      </div>
    </section>
  )
}

export default Hero;
