//@ts-nocheck
'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { HiOutlineUserCircle } from "react-icons/hi";
import SearchComponent from './UI/Slider/SearchComponent';

const Navbar = () => {
  const [storedUser, setStoredUser] = useState(null);

  useEffect(() => {
    // Access localStorage only on the client side
    const user = JSON.parse(localStorage.getItem('user'));
    setStoredUser(user);
  }, []);

  function handleLogOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.href = '/signIn';
  }

  return (
    <nav className="flex flex-col justify-center w-full xl:py-[1.5rem] xsm:py-[1rem] relative shadow border-b border-[#ccc] bg-starsWhite">
      <div className="flex align-middle justify-between w-[95%] self-center">
        <div className="flex lg:gap-[3.3rem] xsm:gap-[5rem] xl:gap-[5rem] md:gap-[2rem] align-middle text-center md:w-[80%] md:justify-start xsm:w-[55%] xsm:justify-between lg:w-[90%]">
          <Link href={'/'}>
            <Image 
              src={"https://res.cloudinary.com/dck5v2kub/image/upload/v1714846214/jaeyLusson/createcampOne_3b467f.png"} 
              alt="Logo" 
              width={400} 
              height={500} 
              className='h-[3rem] w-[4rem] cursor-pointer' 
            />
          </Link>
          <div className="flex self-center">
            <ul className="flex xl:gap-[2.5rem] md:gap-[1.6rem] 2xl:flex xl:flex lg:flex md:flex-row sm:hidden xsm:hidden">
              <li className="font-[500] leading-normal text-[16px] hover:text-starspurpleLight text-starsBlack"><Link href={"/saas"}>Saas</Link></li>
              <li className="text-[16px] font-[500] leading-normal flex justify-center hover:text-starspurpleLight text-starsBlack">
                <Link href={"/apps"} className="flex gap-1 self-center">Apps</Link>
              </li>
              <li className="text-[16px] font-[500] leading-normal hover:text-starspurpleLight text-starsBlack"><Link href={"/blog"}>Blog</Link></li>
              <li className="text-[16px] font-[500] leading-normal hover:text-starspurpleLight text-starsBlack"><Link href={"/courses"}>Courses</Link></li>
              <li className="text-[16px] font-[500] leading-normal hover:text-starspurpleLight text-starsBlack"><Link href={"/dashboard"}>List your product</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex gap-[2rem] items-center">
          <div className="2xl:block xl:block lg:block md:block sm:hidden xsm:hidden">
            <SearchComponent />
          </div>
          <div className='flex justify-center'>
            {storedUser ? (
              <div className="dropdown dropdown-end bg-starsWhite text-starsBlack">
                <div tabIndex={0} role="button" className="btn m-1">
                  <HiOutlineUserCircle className='text-[24px] font-[600] text-starsWhite' />
                </div>
                <ul tabIndex={0} className="dropdown-content z-50 menu p-2 rounded-box w-52 shadow-md bg-starsWhite text-starsBlack border border-starsBlack">
                  <li>
                    <div className="my-[1rem] flex flex-col justify-center">
                      <div className="text-[12px] text-starsGrey mb-[1px] self-center">Welcome back</div>
                      <div className="text-[18px] font-[700] text-starsBlack self-center">{storedUser?.username}</div>
                    </div>
                  </li>
                  <li><Link href={'/dashboard'}>Dashboard</Link></li>
                  <li><Link href={'/help'}>Help Center</Link></li>
                  <li><button onClick={handleLogOut}>Logout</button></li>
                </ul>
              </div>
            ) : (
              <Link href={"/signIn"} className="self-center bg-[#000000] text-[#FFFFFF] rounded-md  flex gap-[0.625rem] justify-center align-middle 2xl:text-[1rem] 2xl:py-2 font-[500] md:w-[6.875rem] md:px-[0.5rem] md:py-[0.635rem] xsm:w-[6.6rem] xsm:gap-[0.1rem] xsm:text-[0.8rem] xsm:p-[0.5rem] xsm:hidden lg:flex xl:flex md:flex">
                Sign up
                <span className="self-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.964} stroke="currentColor" className="w-[0.85938rem] h-[0.85938rem] self-center">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </span>
              </Link>
            )}
            <button className='rounded-md bg-[#000000] text-[#FFFFFF] p-[0.525rem] mx-2 xl:hidden lg:hidden md:block sm:block self-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
