//@ts-nocheck
'use client'
import React, {useState, useEffect} from 'react';
import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/logo1.png";
import { ButtonHTMLAttributes } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";



const Navbar = () => {
  
    const storedUser = JSON.parse(localStorage.getItem('user'));
    console.log(storedUser);

    function handleLogOut() {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      window.location.href = '/signIn';
    }
 

  return (
    <nav className="flex flex-col justify-center w-full xl:py-[1.5rem] xsm:py-[1rem] relative shadow">
        <div className=" flex align-middle justify-between w-[95%] self-center ">
            <div className="flex lg:gap-[3.3rem] xsm:gap-[5rem] xl:gap-[5rem] md:gap-[2rem]  align-middle text-center  md:w-[80%] md:justify-start xsm:w-[55%] xsm:justify-between lg:w-[90%]">
                <div className=''>
                  <Image src={"https://res.cloudinary.com/dck5v2kub/image/upload/v1714846214/jaeyLusson/createcampOne_3b467f.png"} alt="Logo" width={400} height={500} className='h-[3rem] w-[4rem]' />
                </div>
                <div className="md:flex self-center xsm:hidden">
                    <ul className="flex xl:gap-[2.5rem] md:gap-[1.6rem]">
                        <li className="font-[500] leading-normal text-[16px] hover:text-starspurpleLight"><Link href={"/saas"}>Saas</Link></li>
                        <li className="text-[16px] font-[500] leading-normal flex justify-center hover:text-starspurpleLight">
                          <Link href={"/apps"} className="flex gap-1 self-center">Apps </Link>
                        </li>
                        <li className="text-[16px] font-[500] leading-normal hover:text-starspurpleLight"><Link href={"/blog"}>Blog</Link></li>
                        <li className="text-[16px] font-[500] leading-normal hover:text-starspurpleLight"><Link href={"/courses"}>Courses</Link></li>
                        <li className="text-[16px] font-[500] leading-normal hover:text-starspurpleLight"><Link href={"/dashboard"}>List your product</Link></li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col justify-center'>
                {storedUser ? 
                (<div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1"><HiOutlineUserCircle className='text-[24px] font-[600]'/></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2  bg-base-100 rounded-box w-52 shadow-md">
                      <li><div className="my-[1rem] flex flex-col justify-center">
                            <div className="text-[12px] text-starsGrey mb-[1px] self-center">Welcome back</div>
                            <div className="text-[18px] font-[700] text-starsBlack self-center">{storedUser.username}</div>
                          </div>
                      </li>
                      <li><a>Dashboard</a></li>
                      <li><a>Help center</a></li>
                      <li><button onClick={handleLogOut}>Logout</button></li>
                    </ul>
                  </div>
                )
                :
                                (<Link href={"/signIn"} className="self-center bg-[#000000] text-[#FFFFFF] rounded-md p-[0.825rem] flex gap-[0.625rem] justify-center align-middle text-[1rem] font-[500] md:w-[6.875rem] md:p-[0.5rem] xsm: w-[6.6rem] xsm:gap-[0.1rem] xsm:text-[0.8rem] xsm:p-[0.5rem] xsm:hidden lg:flex xl:flex md:flex">Sign up
                                <span className="self-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.964} stroke="currentColor" className="w-[0.85938rem] h-[0.85938rem] self-center">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </span>
                                </Link>)
                }

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