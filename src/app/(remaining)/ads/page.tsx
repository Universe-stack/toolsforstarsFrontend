//@ts-nocheck
"use client"
import React from 'react'
import Adform from '@/app/component/UI/Form/Form'
import Image from 'next/image'

const Page = () => {

  return (
    <section className='w-full flex justify-center bg-starsWhite'>
        <div className='self-center w-[70%] my-[5rem] md:my-[5rem]'>
            <div className=''>
                <h1 className='text-[2rem] font-[700]'>Advertise on Cre8camp</h1>
                <p className= 'mt-2 text-[#ccc]'>Promote your products and services</p>
            </div>

            <div className=' w-full flex gap-6'>
                <div className='bg-starsWhite py-4'>
                   <Adform />
                </div>
                <div className='bg-starsWhite py-4 w-[100%] h-[100%]'>
                    <Image src={"https://res.cloudinary.com/dck5v2kub/image/upload/v1717040969/toolsForstars/alexander-grey-NkQD-RHhbvY-unsplash_xarzn4.jpg"} className="w-[100%] h-[100%] object-cover" width={400} height={500} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Page