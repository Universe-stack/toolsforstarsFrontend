//@ts-nocheck
'use client'
import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {

    const [isYearly, setIsYearly] = useState(false);

  const togglePlan = () => {
    setIsYearly(!isYearly);
  };

  return (
    <section className='w-full flex justify-center'>
    <div className="bg-white w-[80%] self-center text-starsBlack">
        <section className=" bg-opacity-30 py-10 sm:py-16 lg:pt-24 lg:pb-16">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                    <div>
                        <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">THE MARKETPLACE FOR CREATORS</p>
                        <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-[4rem] leading-4 text-starsBlack order-3">Reach millions of creators</h1>
                        <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl xl:text-[18px]">Our advertising options will help you build traction with the most influential creators on the internet. Campaigns start at just $599.</p>

                        <a href="#" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-starspurpleDark text-starsWhite rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400" role="button">
                            ads@cre8camp
                            <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>

                        <p className="mt-5 text-gray-600">Or get started with <Link href="/ads/new" title="" className="text-starspurpleLight transition-all duration-200 hover:underline ">self-service ads</Link></p>
                    </div>

                    <div className='w-full flex justify-center'>
                        <Image width={400} height={500} className="w-[70%] self-center" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>

            <div className="pt-24 pb-16 bg-white sm:py-24 lg:pt-24  lg:pb-16 bg-[#FCF8F1]">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-xl font-medium text-gray-900">Trusted by world class creators</h2>
                    </div>

                    <div className="grid items-center grid-cols-2 gap-10 mt-12 md:grid-cols-4 sm:gap-y-16">
                        <div>
                            <img className="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-1.png" alt="" />
                        </div>

                        <div>
                            <img className="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-2.png" alt="" />
                        </div>

                        <div>
                            <img className="object-contain w-auto h-10 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-3.png" alt="" />
                        </div>

                        <div>
                            <img className="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-4.png" alt="" />
                        </div>
                    </div>
                </div>          
            </div>
        
        <section className="pt-24 pb-16 bg-gray-100 sm:py-16 lg:pt-24  lg:pb-16  w-full self-center">
            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-3xl lg:text-3xl">Numbers tell our story</h2>
                    <p className="mt-3 text-[16px] leading-relaxed text-gray-600">Advertising on Cre8camp helps you grow awareness, trials and usage of your product by reaching millions of the most influential early adopters and techies around the globe.</p>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-8 text-center lg:mt-8 sm:gap-x-8 md:grid-cols-3">
                    <div className='border-[1px] border-opacity-45 py-4 border-starsGrey rounded-md'>
                        <h3 className="font-bold text-[24px] ">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-starspurpleLight to-starspink"> 600+ </span>
                        </h3>
                        <p className="mt-2 text-[14px] font-medium text-gray-900">Newsletter subscribers</p>
                    </div>

                    <div className='border-[1px] border-opacity-45 py-4 border-starsGrey rounded-md'>
                        <h3 className="font-bold text-[24px] ">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-starspurpleLight to-starspink"> Millions </span>
                        </h3>
                        <p className="mt-2 text-[14px] font-medium text-gray-900">of monthly pageviews</p>
                    </div>

                    <div className='border-[1px] border-opacity-45 py-4 border-starsGrey rounded-md'>
                        <h3 className="font-bold text-[24px] ">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-starspurpleLight to-starspink"> Top creators</span>
                        </h3>
                        <p className="mt-2 text-[14px] font-medium text-gray-900">Writers, Video editors, socials handler...</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-[4rem] bg-gray-50 sm:py-16 lg:py-[4rem] w-full bg-[#FCF8F1]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 w-[100%]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-3xl lg:text-3xl">Pricing & Plans</h2>
          <p className="max-w-md mx-auto mt-4 text-[16px] leading-relaxed text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
          </p>
        </div>

        <div className="mt-10">
          <div className="flex items-center justify-center space-x-2.5">
            <span className="text-base font-medium text-gray-900"> Monthly </span>

            <button
              type="button"
              className={`relative inline-flex flex-shrink-0 h-6 py-0.5 transition-colors duration-200 ease-in-out bg-transparent border-2 border-starsBlack rounded-full cursor-pointer w-12 focus:outline-none ${
                isYearly ? 'bg-starsBlack' : ''
              }`}
              role="switch"
              aria-checked={isYearly}
              onClick={togglePlan}
            >
              <span
                aria-hidden="true"
                className={`inline-block w-4 h-4 transition duration-200 ease-in-out ${
                  isYearly ? 'translate-x-6 bg-starsWhite' : 'translate-x-0 bg-starsBlack'
                } rounded-full shadow pointer-events-none`}
              ></span>
            </button>

            <span className="text-base font-medium text-gray-900"> Forever </span>
          </div>
        </div>

        <div className="self-center grid grid-cols-1 gap-6 mx-auto sm:grid-cols-3 mt-14 md:gap-9 w-[90%]">
          <div className="overflow-hidden bg-starsWhite border-2 rounded-md">
            <div className="p-6 md:py-8 md:px-9">
              <h3 className="text-xl font-semibold text-black">Personal</h3>
              <p className="mt-2.5 text-sm text-gray-600">All the basic features to boost your freelance career</p>
              <div className="flex items-end mt-5">
                <div className="flex items-start">
                  <span className="text-xl font-medium text-black"> $ </span>
                  <p className="text-6xl font-medium tracking-tight">{isYearly ? '999' : '5'}</p>
                </div>
                <span className="ml-0.5 text-lg text-gray-600"> / {isYearly ? 'forever' : 'month'} </span>
              </div>
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center w-full px-4 py-3 mt-6 font-semibold text-starsBlack transition-all duration-200 bg-transparent border-2 rounded-full border-starspurpleDark hover:bg-tarspurpleLight hover:text-white focus:text-white focus:bg-fuchsia-600"
                role=""
              >
                Start now
              </a>
              <ul className="flex flex-col mt-8 space-y-4">
                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[16px] mt-[0.3rem] font-medium text-gray-900"> 1 Domain License </span>
                  <svg
                    className="w-4 h-4 ml-0.5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </li>
                {/* More list items... */}
              </ul>
            </div>
          </div>
          
          <div className="overflow-hidden bg-starspurpleDark text-starsWhite border-2 rounded-md border-starsBlack">
            <div className="p-6 md:py-8 md:px-9">
              <h3 className="text-xl font-semibold text-black">Personal</h3>
              <p className="mt-2.5 text-sm text-gray-600">All the basic features to boost your freelance career</p>
              <div className="flex items-end mt-5">
                <div className="flex items-start">
                  <span className="text-xl font-medium text-black"> $ </span>
                  <p className="text-6xl font-medium tracking-tight">{isYearly ? '2999' : '9'}</p>
                </div>
                <span className="ml-0.5 text-lg text-gray-600"> / {isYearly ? 'forever' : 'month'} </span>
              </div>
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center w-full px-4 py-3 mt-6 font-semibold text-starsBlack transition-all duration-200 bg-starsWhite border-2 rounded-full border-starsBlack  hover:bg-tarspurpleLight hover:text-white focus:text-white focus:bg-fuchsia-600"
                role=""
              >
                Start now
              </a>
              <ul className="flex flex-col mt-8 space-y-4">
                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[16px] mt-[0.3rem] font-medium text-gray-900"> 1 Domain License </span>
                  <svg
                    className="w-4 h-4 ml-0.5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </li>
                {/* More list items... */}
              </ul>
            </div>
          </div>

          <div className="overflow-hidden bg-starsWhite border-2 rounded-md">
            <div className="p-6 md:py-8 md:px-9">
              <h3 className="text-xl font-semibold text-black">Personal</h3>
              <p className="mt-2.5 text-sm text-gray-600">All the basic features to boost your freelance career</p>
              <div className="flex items-end mt-5">
                <div className="flex items-start">
                  <span className="text-xl font-medium text-black"> $ </span>
                  <p className="text-6xl font-medium tracking-tight">{isYearly ? '5999' : '12'}</p>
                </div>
                <span className="ml-0.5 text-lg text-gray-600"> / {isYearly ? 'forever' : 'month'} </span>
              </div>
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center w-full px-4 py-3 mt-6 font-semibold text-starsBlack transition-all duration-200 bg-transparent border-2 rounded-full border-starspurpleDark hover:bg-tarspurpleLight hover:text-white focus:text-starsBlack focus:bg-opacity-85 cursor-pointer"
                role=""
              >
                ads@cre8camp
              </a>
              <ul className="flex flex-col mt-8 space-y-4">
                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[16px] mt-[0.3rem] font-medium text-gray-900"> 1 Domain License </span>
                  <svg
                    className="w-4 h-4 ml-0.5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </li>
                {/* More list items... */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>


    </div>
    </section>
  )
}

export default Page