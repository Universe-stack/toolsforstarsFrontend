//@ts-nocheck
'use client'

import React,{useState, useEffect} from 'react';
import Carousel from './UI/Slider/Carousel';
import TopChartsCarousel from './UI/Slider/TopChartsCarousel';
import { useAuth } from '@/context/AuthContext';

const buttonFirst = [
  {title:"Top free"},
  {title:"Top grossing"},
  {title:"Top paid"},
]
const Hero = () => {

  const [clickedButton, setClickedButton] = useState(null);
  const {state, dispatch} = useAuth()

  // useEffect(() => {
  //   const fetchData = async () => {
  //     console.log(await state.signUpResult.user, "sign in message");
  //   };
  
  //   fetchData();
  // }, [state]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    console.log(storedUser);
  }, []);
  

  return (
    <section className='flex flex-col justify-center w-[100vw]'>
      <div className='self-center w-[100%] flex gap-[5%] h-[100%] herbg h-[80vh]'>
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
                <button className='bg-[#e49a2d] text-starsWhite w-[30%] rounded-md hover:bg-[#3700ff] hover:text-starsWhite inline-flex items-center justify-center'>
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

      <div className="w-[75%] self-center ">
        <div className="mt-[3rem]">
          <h2 className='font-[600] text-[1.5rem]'> Top Charts</h2>
          <div className='flex gap-[1rem] mt-[1rem]'>
            {
              buttonFirst.map((item,id)=>(
                <button key={id} className={`inline-flex items-center justify-center px-[12px] py-[8px] rounded-full border hover:bg-[#3700ff] hover:text-starsWhite hover:border-none ${clickedButton === id ? 'bg-starspink' : ''}`}>
                  {item.title}
                </button>
              ))
            }
          </div>
          <div className='mt-[2rem]'>
              <TopChartsCarousel />
          </div>
        </div>

        <div className="mt-[3rem]">
          <h2 className='font-[600] text-[1.5rem]'> Video Editing Tools</h2>
          <div className='flex gap-[1rem] mt-[1rem]'>
            {
              buttonFirst.map((item,id)=>(
                <button key={id} className={`inline-flex items-center justify-center px-[12px] py-[8px] rounded-full border hover:bg-[#3700ff] hover:text-starsWhite hover:border-none ${clickedButton === id ? 'bg-starspink' : ''}`}>
                  {item.title}
                </button>
              ))
            }
          </div>
          <div className='mt-[2rem]'>
              <TopChartsCarousel />
          </div>
        </div>

        <div className="mt-[3rem]">
          <h2 className='font-[600] text-[1.5rem]'> Writing Tools</h2>
          <div className='flex gap-[1rem] mt-[1rem]'>
            {
              buttonFirst.map((item,id)=>(
                <button key={id} className={`inline-flex items-center justify-center px-[12px] py-[8px] rounded-full border hover:bg-[blue] hover:text-starsWhite hover:border-none ${clickedButton === id ? 'bg-starspink' : ''}`}>
                  {item.title}
                </button>
              ))
            }
          </div>
          <div className='mt-[2rem]'>
              <TopChartsCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
