"use client"

import React from 'react';
import { MdStar } from "react-icons/md";
import { HiArrowCircleUp } from "react-icons/hi";
import { AiFillCarryOut } from "react-icons/ai";
import { BiShareAlt } from "react-icons/bi";
import { BiSolidBookmarkAltPlus } from "react-icons/bi";
import Link from 'next/link';
import Image from 'next/image'

const Page = () => {
  return (
    <div className='w-[100%] flex justify-center '>
        <div className=' w-[75%] self-center mt-[3rem]'>
            <div className='flex justify-between'>
                <div className=''>
                    <h1 className='text-[3.5rem] leading-[4rem] font-[700]'>Appsumo: Buy your Software</h1>
                    <div className='mt-[16px] flex flex-col'>
                        <span className='text-[14px] text-starspurpleLight'><Link href={''}>Appsumo</Link></span>
                        <span className='text-[12px] text-starsGrey'>In-app purchases</span>
                    </div>
                    <div className='flex mt-[16px] mb-[24px] py-[12px]'>
                        <div className="flex flex-col">
                            <div className='self-center text-center flex items-center'>
                                <span className='text-[14px]'>3.1</span>
                                <MdStar className='self-center text-[14px]'/>
                            </div>
                            <span className="flex gap-[0.5rem]"><p className='text-[14px] text-starsGrey'>5.67M</p> <p className='text-[14px] text-starsGrey'>reviews</p></span>  
                        </div>
                        <span className="flex after:content-[''] after:w-[2px] after:h-[1rem] after:bg-starsGrey self-center mx-[2rem]"></span>

                        <div className='flex flex-col'>
                            <div className='self-center flex items-center'>
                                <span className='text-[14px]'>109</span>
                                <HiArrowCircleUp className='self-center text-[14px]'/>
                            </div>
                            <div className=''><p className='text-[14px] text-starsGrey'>Upvotes</p></div>
                        </div>
                        <span className="flex after:content-[''] after:w-[2px] after:h-[1rem] after:bg-starsGrey self-center mx-[2rem]"></span>

                        <div className='flex flex-col justify-center items-center'>
                            <span className='self-center flex items-center'>
                                <AiFillCarryOut className='self-center text-[14px]'/>
                            </span>
                            <span className='text-[14px] '><p className='text-[14px] text-starsGrey'>Editors choice</p></span>
                        </div>
                    </div>

                    <div className="flex gap-[16px]">
                        <button className="py-[10px] px-[16px] bg-starsBlack text-starsWhite rounded-md min-h-[44px] min-w-[200px]"><Link href={''}>Get now</Link></button>
                        <div className="flex gap-[8px]">
                            <div className="self-center text-[14px] text-starspurpleLight">
                                <Link href={''} className='flex gap-1'>
                                    <BiShareAlt className='self-center'/>
                                    <span className="">Share</span>
                                </Link>
                            </div>
                            <div className=" self-center text-[14px]">
                            <Link href={''} className='flex gap-1'>
                                    <BiSolidBookmarkAltPlus className='self-center'/>
                                    <span className="text-starsGrey">Add to wishlist</span>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                        <Image src={'https://res.cloudinary.com/dck5v2kub/image/upload/v1708206223/jaeyLusson/pngegg_13_b6usfj.png'} width={500} height={400} alt='tool logo' className='' />
                </div>
            </div>

            <div className='flex justify-between'>
                <main className="w-4/6 bg-starspurpleLight">
                    this is main
                </main>
                <aside className='w-2/6 bg-starspink'>this is aside</aside>
            </div>
        </div>

    </div>
  )
}

export default Page