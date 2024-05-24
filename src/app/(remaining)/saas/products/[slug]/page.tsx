"use client"

import React, {useState, useEffect} from 'react';
import { MdStar } from "react-icons/md";
import { HiArrowCircleUp } from "react-icons/hi";
import { AiFillCarryOut } from "react-icons/ai";
import { BiShareAlt } from "react-icons/bi";
import { BiSolidBookmarkAltPlus } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaScaleBalanced } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import ProductdetailCarousel from '../../../../component/UI/Slider/productdetailCarousel'
import YoutubeVideo from '@/app/component/YoutubeVideo';
import ReactStars from '@/app/component/UI/StarsRating';
import { Line} from 'rc-progress'


const Page = () => {

    const products={ link:'', name: 'alih', description: 'Connect your WordPress forms with hundreds of popular tools using custom-built integrations',images:['https://res.cloudinary.com/dck5v2kub/image/upload/v1710263377/toolsForstars/SAASPIC1_yv31md.webp', 'https://res.cloudinary.com/dck5v2kub/image/upload/v1710263377/toolsForstars/SAASPIC1_yv31md.webp'] }

    const [data, setData] = useState<any>(null);

    // const {toolId} = useParams()
    
    // useEffect(()=>{
    //     const fetchData = async () => {
    //         try {
    //           const res = await fetch(`https://api.example/saas/tools/${toolId}`);
    //           if (!res.ok) {
    //             throw new Error('Failed to fetch data');
    //           }
    //           const jsonData = await res.json();
    //           setData(jsonData);
    //         } catch (error) {
    //           console.error(error);
    //         }
    //       };
      
    //       fetchData();
    // },[toolId])

  return (
    <div className='w-[100%] flex justify-center mb-[2rem]'>
        <div className=' w-[75%] self-center mt-[3rem]'>
            <div className='flex justify-between'>
                <div className=''>
                    <h1 className='text-[3.5rem] leading-[4rem] font-[700]'>Appsumo: Buy your Software</h1>
                    <div className='mt-[16px] flex flex-col'>
                        <span className='text-[14px] text-starspurpleLight'><Link href={''}>Appsumo</Link></span>
                        <span className='text-[12px] text-starsGrey'>In-app purchases</span>
                    </div>
                    <div className='flex mt-[16px] mb-[24px] py-[12px]'>
                    <div className="flex flex-col items-center">
                        <div className='flex text-center items-center'>
                            <p className='text-[14px]'>3.1</p>
                            <MdStar className='text-[14px]'/>
                        </div>
                        <span className="flex gap-[0.5rem]">
                            <p className='text-[14px] text-starsGrey'>5.67M</p>
                            <p className='text-[14px] text-starsGrey'>reviews</p>
                        </span>  
                    </div>

                        <span className="flex after:content-[''] after:w-[2px] after:h-[1rem] after:bg-starsGrey self-center mx-[2rem]"></span>

                        <div className='flex flex-col items-center'>
                            <div className='self-center flex items-center'>
                                <div className='text-[14px] self-center text-center'>109</div>
                                <HiArrowCircleUp className='self-center text-[14px] text-center leading-[1rem]'/>
                            </div>
                            <div className=''><p className='text-[14px] text-starsGrey'>Upvotes</p></div>
                        </div>
                        <span className="flex after:content-[''] after:w-[2px] after:h-[1rem] after:bg-starsGrey self-center mx-[2rem]"></span>

                        <div className='flex flex-col justify-center items-center'>
                            <span className='self-center flex items-center'>
                                <AiFillCarryOut className='self-center text-[14px]'/>
                            </span>
                            <div className='text-[14px] self-center'>Editors choice</div>
                        </div>
                    </div>

                    <div className="flex gap-[16px]">
                        <button className="py-[10px] px-[16px] bg-starsBlack text-starsWhite rounded-md min-h-[44px] min-w-[200px] inline-flex items-center justify-center"><Link href={''}>Get now</Link></button>
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
                            <div className=" self-center text-[14px]">
                            <Link href={''} className='flex gap-1'>
                                    <FaScaleBalanced className='self-center'/>
                                    <span className="text-starsGrey">Compare alternatives</span>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                        <Image src={'https://res.cloudinary.com/dck5v2kub/image/upload/v1708206223/jaeyLusson/pngegg_13_b6usfj.png'} width={500} height={400} alt='tool logo' className='' />
                </div>
            </div>

            <div className='flex justify-between gap-[5%]'>
                <main className="w-4/6">
                    <div className='w-[100%]'>
                        <ProductdetailCarousel productImages={products} />
                    </div>
                    <div className="pt-[24px]">
                        <header className="pb-[20px]">
                            <div className='flex'>
                                <h2 className="font-[800] mr-[16px]"> About this software</h2>
                                <FaArrowRight className='self-center' />
                            </div>
                        </header>
                        <p className="text-[.875rem] font-[400] leading-[1.25rem]">BET+ is a premium online streaming service with over 2,000 hours of your favorite Black content from the best Black creators. Now, you can stream Black culture: the movies you remember, the TV shows you love and the new series you cant live without, and theyre all in one place.<br/>Everything from modern favorites like Average Joe and The Ms. Pat Show to classics like The Wayans Brothers and Being Mary Jane is available on BET+.</p>

                        <div className="pt-[20px] text-[.875rem] font-[400] leading-[1.25rem]">
                            <div className='font-[700]'>updated on</div>
                            <div className='mt-[4px]'>Apr 16, 2024</div>
                        </div>
                    </div>

                    <div className="mt-[32px]">
                        <h2 className="my-[16px] text-[1.35rem]">At a glance</h2>
                        <div className="grid grid-cols-2 gap-x-3 gap-y-5">
                            <div className="">
                                <h3 className="text-[800]">Best For</h3>
                                <ul className="">
                                    <li className="flex gap-[1rem] text-[.875rem] font-[400] leading-[1.25rem] mt-[8px]">
                                        <FaCheckCircle className="self-center"/>
                                        <p className=''>Content Marketing</p>
                                    </li>
                                    <li className="flex gap-[1rem] text-[.875rem] font-[400] leading-[1.25rem] mt-[8px]">
                                        <FaCheckCircle className="self-center"/>
                                        <p className=''>Marketing Agencies</p>
                                    </li>
                                    <li className="flex gap-[1rem] text-[.875rem] font-[400] leading-[1.25rem] mt-[8px]">
                                        <FaCheckCircle className="self-center"/>
                                        <p className=''>Small businesses</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="">
                                <h3 className="text-[800]">Integrations</h3>
                                <ul className="">
                                    <li className="flex gap-[1rem] text-[.875rem] font-[400] leading-[1.25rem] mt-[8px]">
                                        <FaCheckCircle className="self-center"/>
                                        <p className=''>Facebook</p>
                                    </li>
                                    <li className="flex gap-[1rem] text-[.875rem] font-[400] leading-[1.25rem] mt-[8px]">
                                        <FaCheckCircle className="self-center"/>
                                        <p className=''>Tiktok</p>
                                    </li>
                                    <li className="flex gap-[1rem] text-[.875rem] font-[400] leading-[1.25rem] mt-[8px]">
                                        <FaCheckCircle className="self-center"/>
                                        <p className=''>Snapchat</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="">
                                <h3 className="text-[800]">Alternative to</h3>
                                <ul className="">
                                    <li className="flex gap-[1rem] text-[.875rem] font-[400] leading-[1.25rem] mt-[8px]">
                                        <FaCheckCircle className="self-center"/>
                                        <p className=''>Content Marketing</p>
                                    </li>
                                    <li className="flex gap-[1rem] text-[.875rem] font-[400] leading-[1.25rem] mt-[8px]">
                                        <FaCheckCircle className="self-center"/>
                                        <p className=''>Marketing Agencies</p>
                                    </li>
                                    <li className="flex gap-[1rem] text-[.875rem] font-[400] leading-[1.25rem] mt-[8px]">
                                        <FaCheckCircle className="self-center"/>
                                        <p className=''>Small businesses</p>
                                    </li>
                                </ul>
                            </div>


                        </div>
                    </div>

                    <button className='rounded-full mt-[32px] text-[.875rem] font-[400] leading-[1.25rem] border border-starsGrey py-[0.45rem] px-[0.8rem] inline-flex items-center justify-center'>
                        <Link href={''}> Entertainment </Link>
                    </button>

                    <div className='mt-[32px]'>
                        <YoutubeVideo videoId="NgkCgqIogcY" height="500" width="800" autoplay={0} />
                    </div>

                    <div className="mt-[32px]">
                        <h3 className="font-[800]">Plans & Features</h3>

                        <div className="pt-[14.5px]">
                            <div className="flex gap-[1rem] text-[.875rem] font-[400] leading-[1.25rem] mt-[8px] ">
                                <FaCheck className='self-center' />
                                <p className="">Edit videos by editing the script</p>
                            </div>
                            <div className="flex gap-[1rem] text-[.875rem] font-[400] leading-[1.25rem] mt-[8px]">
                                <FaCheck className='self-center' />
                            <p className="">Edit videos by editing the script</p>
                            </div>
                            <div className="flex gap-[1rem] text-[.875rem] font-[400] leading-[1.25rem] mt-[8px]">
                                <FaCheck className='self-center' />
                            <p className="">Edit videos by editing the script</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-[32px] w-[100%]">
                        <div className=""><h2 className="">Ratings & Reviews</h2></div>

                        <div className="flex gap-[5%] mt-[32px] w-[100%]  py-[12px]">
                            <div className="">
                                <div className="text-[3.5rem] leading-[4rem] ">4.3</div>
                                <div className=""><ReactStars value={3} isEdit={false}/></div>
                                <div className='mt-[.5rem]'>250 reviews</div>
                            </div>

                            <div className="w-[95%]">
                                <div className='flex gap-4 w-[100%]'>
                                    <div className=''>5</div>
                                    <div className='w-[95%] self-center'>
                                        <Line percent={20} strokeWidth={1} strokeColor="#000000" className='w-[100%] self-center'/> 
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <div className=''>4</div>
                                    <div className='w-[95%] self-center'><Line percent={25} strokeWidth={1} strokeColor="#000000" className='w-[100%] self-center'/> </div>
                                </div>
                                <div className='flex gap-3'>
                                    <div className=''>3</div>
                                    <div className='w-[95%] self-center'><Line percent={40} strokeWidth={1} strokeColor="#000000" className='w-[100%] self-center'/></div>
                                </div>
                                <div className='flex gap-3'>
                                    <div className=''>2</div>
                                    <div className='w-[95%] self-center'><Line percent={20} strokeWidth={1} strokeColor="#000000" className='w-[100%] self-center'/></div>
                                </div>
                                <div className='flex gap-3'>
                                    <div className=''>1</div>
                                    <div className='w-[95%] self-center'><Line percent={80} strokeWidth={1} strokeColor="#000000" className='w-[100%] self-center'/></div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-[32px]">
                                <div className="flex gap-[1rem]">
                                    <div className="rounded-full w-[1.5rem] h-[1.5rem] bg-starspink self-center text-center text-starsWhite">V</div>
                                    <div className="self-center">Vivian Mia</div>
                                </div>

                                <div className=" pt-[16px]">
                                    <div className='flex gap-3'>
                                        <ReactStars value={3} isEdit={false} />
                                        <p className='text-starsGrey'>Febuary 23, 2024</p>
                                    </div>
                                    <p className='text-starsGrey mt-[16px] text-[16px]'>
                                        I dont like some of the features of this app. First of all It effects doesnt work, It doesnt show new trends on fyp, if you try to add a particular effect like black and white or slow motion on a video you are recreating for a trend it doesnt work. When I upload video the quality of the videos and pictures absolutely disappear. Very frustrating you guys should do something about it or I delete it Soon.
                                    </p>

                                    <div className='text-[14px] text-starsGrey mt-[16px]'>
                                        <p className=''>36,090 people found this review helpful</p>
                                        <div className='mt-[12px]'>
                                            <p className=''>Did you find this review helpful?</p>
                                            <div className='flex gap-3 mt-[8px]'>
                                                <button className='rounded-full border py-[6px] px-[16px] inline-flex items-center justify-center'>Yes</button>
                                                <button className='rounded-full border py-[6px] px-[16px] inline-flex items-center justify-center'>No</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[32px]">
                                <div className="flex gap-[1rem]">
                                    <div className="rounded-full w-[1.5rem] h-[1.5rem] bg-starspink self-center text-center text-starsWhite">V</div>
                                    <div className="self-center">Vivian Mia</div>
                                </div>

                                <div className=" pt-[16px]">
                                    <div className='flex gap-3'>
                                        <ReactStars value={3} isEdit={false} />
                                        <p className='text-starsGrey'>Febuary 23, 2024</p>
                                    </div>
                                    <p className='text-starsGrey mt-[16px] text-[16px]'>
                                        I dont like some of the features of this app. First of all It effects show new trends on fyp, if you try to add a particular effect like black and white or slow motion on a video you are recreating for a trend it doesnt work. When I upload video the quality of the videos and pictures absolutely disappear. Very frustrating you guys should do something about it or I delete it Soon.
                                    </p>

                                    <div className='text-[14px] text-starsGrey mt-[16px]'>
                                        <p className=''>36,090 people found this review helpful</p>
                                        <div className='mt-[12px]'>
                                            <p className=''>Did you find this review helpful?</p>
                                            <div className='flex gap-3 mt-[8px]'>
                                                <button className='rounded-full border py-[6px] px-[16px] inline-flex items-center justify-center'>Yes</button>
                                                <button className='rounded-full border py-[6px] px-[16px] inline-flex items-center justify-center'>No</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </main>


                <aside className='w-2/6 sticky'>
                    <div className="flex gap-[1rem]">
                        <h2 className="text-[24px]">Similar Apps</h2>
                        <FaArrowRight className='self-center' />
                    </div>

                    <div className=""></div>
                </aside>
            </div>
        </div>

    </div>
  )
}

export default Page