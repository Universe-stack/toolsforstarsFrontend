import React from 'react';
import Image from 'next/image'



const Page = () => {
  return (
    <div className="bg-starsWhite h-[100%] py-10 w-full flex flex-col justify-center items-center  ">
      <div className="max-w-2xl mx-auto text-center w-full justify-center items-center flex flex-col py-4">
        <Image className='' width={300} height={400} src={'https://res.cloudinary.com/dck5v2kub/image/upload/v1721060489/toolsForstars/Feeling_sorry-pana_pmfirm.png'} alt='sorry, we are working on it'/>
      </div>
      <p className="text-center">Sorry, we're working on your dashboard.</p>
    </div>
  )
}

export default Page