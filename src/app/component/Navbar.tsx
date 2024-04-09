'use client'
import React, {useState} from 'react';
import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/logo1.png";
import { ButtonHTMLAttributes } from "react";


const servicesLinks= [
  {id:1, title:"Design", desc:"We create", image:"https://res.cloudinary.com/dck5v2kub/image/upload/v1709453478/jaeyLusson/4738060_1_ryxtwn.jpg", links:["Product design","graphic design", "3D Animation"]},
  {id:2, title:"Engineering", desc:"We build", image:"https://res.cloudinary.com/dck5v2kub/image/upload/v1709453542/jaeyLusson/4291099_1_labuo5.jpg", links:["Web apps", " Mobile apps" ,"SAAS development"]},
  {id:3, title:"Content", desc:"We sell", image:"https://res.cloudinary.com/dck5v2kub/image/upload/v1709453518/jaeyLusson/4590506_1_en66hu.jpg", links:["Content writing" ,"SEO"]}
]

const Navbar = () => {

//   const [IsDropdownOpen, setIsDropdownOpen] = useState(true);

//   const toggleDropdown = () => {
//     console.log(`${IsDropdownOpen}`,"entered");
//     setIsDropdownOpen(prevState => !prevState);
//   };  
  

  return (
    <nav className="flex flex-col justify-center w-full xl:py-[1.5rem] xsm:py-[1rem] relative">
        <div className=" flex align-middle justify-between w-[95%] self-center ">
            <div className="flex lg:gap-[3.3rem] xsm:gap-[5rem] xl:gap-[5rem] md:gap-[2rem]  align-middle text-center  md:w-[80%] md:justify-start xsm:w-[55%] xsm:justify-between lg:w-[90%]">

                <h2 className='self-center font-[700]'>CreateCamp</h2>
                <div className="md:flex self-center xsm:hidden">
                    <ul className="flex xl:gap-[2.5rem] md:gap-[1.6rem]">
                        <li className="font-[500] leading-normal text-[16px] hover:text-starspurpleLight"><Link href={"/"}>SaaS</Link></li>
                        <li className="text-[16px] font-[500] leading-normal flex justify-center hover:text-starspurpleLight">
                          <Link href={"/"} className="flex gap-1 self-center">Apps </Link>
                        </li>
                        <li className="text-[16px] font-[500] leading-normal hover:text-starspurpleLight"><Link href={"/"}>Books</Link></li>
                        <li className="text-[16px] font-[500] leading-normal hover:text-starspurpleLight"><Link href={"/"}>Courses</Link></li>
                        <li className="text-[16px] font-[500] leading-normal hover:text-starspurpleLight"><Link href={"/"}>List your product</Link></li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col justify-center'>
                <button className="self-center bg-[#000000] text-[#FFFFFF] rounded-md p-[0.825rem] flex gap-[0.625rem] justify-center align-middle text-[1rem] font-[500] md:w-[6.875rem] md:p-[0.5rem] xsm: w-[6.6rem] xsm:gap-[0.1rem] xsm:text-[0.8rem] xsm:p-[0.5rem] xsm:hidden lg:flex xl:flex md:flex">Sign up
                <span className="self-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.964} stroke="currentColor" className="w-[0.85938rem] h-[0.85938rem] self-center">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </span>
                </button>

                <button className='rounded-full bg-[#000000] text-[#FFFFFF] p-[0.325rem] xl:hidden lg:hidden md:hidden'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>
            </div>
                  
        </div>
    </nav>
  )
}

export default Navbar