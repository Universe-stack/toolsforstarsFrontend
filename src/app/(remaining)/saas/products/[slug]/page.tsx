// @ts-nocheck
"use client"

import React, { useState, useEffect } from 'react';
import { MdStar } from "react-icons/md";
import { HiArrowCircleUp } from "react-icons/hi";
import { AiFillCarryOut } from "react-icons/ai";
import { BiShareAlt, BiSolidBookmarkAltPlus } from "react-icons/bi";
import { FaArrowRight, FaCheck, FaCheckCircle } from "react-icons/fa";
import { FaScaleBalanced } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import ProductdetailCarousel from '../../../../component/UI/Slider/productdetailCarousel';
import YoutubeVideo from '@/app/component/YoutubeVideo';
import ReactStars from '@/app/component/UI/StarsRating';
import { Line } from 'rc-progress';
import { useBackdrop } from '@/context/BackdropContext';
import { FaCircleXmark } from "react-icons/fa6";
import { useRouter } from 'next/navigation';



const Page = () => {
    const [fetchedData, setFetchedData] = useState<any>(null);
    const [modal, setModal] = useState<any>(null);
    const { state, dispatch, setBackdrops } = useBackdrop();
    const params = useParams();
    const [searchTerm, setSearchTerm] = useState('');
    const [productComparison, setProductComparison] = useState<any[]>([]);
    const [allProducts, setAllProducts] = useState<any[]>([]);
    const [reviewContent, setReviewContent] = useState('');
    const [reviewStars, setreviewStars] = useState(1);
    const [userId, setUserId] = useState('')

    useEffect(() => {
        // Fetch main product data
        const fetchData = async () => {
            try {
                const res = await fetch(`https://createcamp.onrender.com/tools/${params.slug}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await res.json();
                console.log(data, "fetched data");
                setFetchedData(data);
            } catch (error) {
                console.error(error);
            }
        };

        // Fetch all products data
        const fetchAllProducts = async () => {
            try {
                const res = await fetch(`https://createcamp.onrender.com/tools/saas`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await res.json();
                console.log(data, "all products");

                // Ensure data is an array
                if (Array.isArray(data.tools)) {
                    setAllProducts(data.tools);
                } else {
                    console.error('Expected data to be an array:', data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
        fetchAllProducts();

        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUserId(storedUser._id);
        }
    }, [params.slug]);

    useEffect(() => {
        if (fetchedData && Array.isArray(allProducts) && allProducts.length > 0) {
            // Filter recommended products based on categories
            const filteredResults = allProducts.filter((product: any) =>
                product.categories.some((category: string) => fetchedData.tool.categories.includes(category))
            );
            setProductComparison(filteredResults);
        }
    }, [fetchedData, allProducts]);

    const filteredProducts = productComparison.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCompareAlternatives = () => {
        dispatch({ type: 'SET_BACKDROP', payload: true });
        setModal(true);
    }

    const removeCompareAlternatives = () => {
        dispatch({ type: 'SET_BACKDROP', payload: false });
        setModal(false);
    }

    const handleProductClick = (product: any) => {
        setFetchedData({ tool: product });
        removeCompareAlternatives();
    };


    const handleReviewSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('No token found');
            return;
        }
        const reviewData = {
            reviewContent,
            reviewStars,
        };
        
        
        try {
            const response = await fetch(`https://createcamp.onrender.com/tools/${params.slug}/addreview`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reviewData),
            });
            console.log(reviewData, "review data")

            if (response.ok) {
                const data = await response.json();
                console.log('Review submitted:', data);
                setReviewContent('');
                setreviewStars(1);
                // Optionally update the state to reflect the new review
            } else {
                console.error('Failed to submit review');
            }
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    };

    return (
        <div className='w-[100%] flex justify-center pb-[2rem] relative'>
            {state.backdrop && 
                <div className="absolute bg-starsBlack z-40 top-0 right-0 left-0 bottom-0 opacity-25"></div>
            }

            {modal && 
                <div className='absolute bg-starsWhite z-50 py-[1.5rem] w-[70%] mt-[35vh] rounded-[1rem] p-4'>
                    <div className="w-full flex justify-end mb-4 cursor-pointer">
                        <FaCircleXmark className='self-end size-6 text-[#FF0000] hover:opacity-75' onClick={removeCompareAlternatives} />
                    </div>
                    <div className="flex justify-between gap-[2%]">
                        <div className='w-[30%] overflow-y-scroll p-4'>
                            {filteredProducts.map(item => (
                                <div key={item.id} className="flex gap-2 justify-between w-full p-4 mb-4 border border-opacity-60 border-starsGrey shadow-sm rounded-md cursor-pointer" onClick={() => handleProductClick(item)}>
                                    <div className="object-cover w-[40%] flex items-center">
                                        <Image src={item.image} alt={item.name} className='self-center' />
                                    </div>
                                    <div className='w-[60%]'>
                                        <h3 className='text-[16px] font-[700] text-starsBlack'>{item.name}</h3>
                                        <p className='text-[12px] font-[300] text-starsGrey'>{item.job}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                
                        <div className='w-[70%] overflow-y-scroll p-4 max-h-[90vh]'>
                            <div className="mb-4">
                                <input 
                                    type="text" 
                                    placeholder="Search..." 
                                    className="w-full p-2 border border-gray-300 rounded" 
                                    value={searchTerm}
                                    onChange={e => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <div className="overflow-x-auto">
                                <table className="table table-zebra w-full">
                                    <thead className='text-starspurpleLight text-[20px] font-[700]'>
                                        <tr>
                                            <th></th>
                                            <th>{fetchedData?.tool?.name}</th>
                                            {filteredProducts.map(product => (
                                                <th key={product.id}> {product.name}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className='text-[12px]'>
                                        <tr>
                                            <th>Name</th>
                                            <td>{fetchedData?.tool?.name}</td>
                                            {filteredProducts.map(product => (
                                                <td key={product.id}>{product.name}</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <th>Features</th>
                                            <td className='flex flex-col justify-center'>{fetchedData?.tool?.features.map((item: any, index: number) => (
                                                <p className='my-[0.5rem] mt-1' key={index}>{item}</p>
                                            ))}</td>
                                            {filteredProducts.map(product => (
                                                <td key={product.id}>{product.features.map((item: any, index: number) => (<p key={index} className='my-[0.5rem]'>{item}</p>))}</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <th>Used for</th>
                                            <td className='flex flex-col justify-center'>{fetchedData?.tool?.categories.map((item: any, index: number) => (
                                                <p className='my-[0.5rem] mt-2' key={index}>{item}</p>
                                            ))}</td>
                                            {filteredProducts.map(product => (
                                                <td key={product.id}>{product.categories.map((item: any, index: number) => (<p className='my-[0.5rem]' key={index}>{item}</p>))}</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <th>Made for</th>
                                            <td className='flex flex-col justify-center'>{fetchedData?.tool?.targetAudience.map((item: any, index: number) => (
                                                <p className='my-[0.5rem] mt-2' key={index}>{item}</p>
                                            ))}</td>
                                            {filteredProducts.map(product => (
                                                <td key={product.id}>{product.targetAudience.map((item: any, index: number) => (<p className='my-[0.5rem]' key={index}>{item}</p>))}</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <th>AI enabled?</th>
                                            <td>{fetchedData?.tool?.aiEnabled}</td>
                                            {filteredProducts.map(product => (
                                                <td key={product.id}>{product.aiEnabled}</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <th>Price</th>
                                            <td>${fetchedData?.tool?.pricing}</td>
                                            {filteredProducts.map(product => (
                                                <td key={product.id}>{product.pricing}</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <th>Reviews</th>
                                            <td>{fetchedData?.tool?.averageReview}</td>
                                            {filteredProducts.map(product => (
                                                <td key={product.id}>{product.averageReview}</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <th>Product link</th>
                                            <td>{fetchedData?.tool?.productLink}</td>
                                            {filteredProducts.map(product => (
                                                <td key={product.id}>{product.productLink}</td>
                                            ))}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className='w-[75%] self-center mt-[3rem]'>
                <div className='flex justify-between items-center'>
                    <div className=''>
                        <h1 className='text-[3.5rem] leading-[4rem] font-[700]'>{fetchedData?.tool?.name || ''}</h1>
                        <div className='mt-[16px] flex flex-col'>
                            <span className='text-[14px] text-starspurpleLight'>
                                <Link href={fetchedData?.tool?.link || ''}>{fetchedData?.tool?.name || ''}</Link>
                            </span>
                        </div>
                        <div className='flex mt-[16px] mb-[24px] py-[12px]'>
                            <div className="flex flex-col items-center">
                                <div className='flex text-center items-center'>
                                    <p className='text-[14px] p-0 m-0 mt-[0.35rem]'>{fetchedData?.tool?.averageReview || ''}</p>
                                    <MdStar className='text-[14px]' />
                                </div>
                                <span className="flex gap-[0.5rem]">
                                    <p className='text-[14px] text-starsGrey p-0 m-0'>--M</p>
                                    <p className='text-[14px] text-starsGrey p-0 m-0'>reviews</p>
                                </span>
                            </div>

                            <span className="flex after:content-[''] after:w-[2px] after:h-[1rem] after:bg-starsGrey self-center mx-[2rem]"></span>

                            <div className='flex flex-col items-center'>
                                <div className='self-center flex items-center'>
                                    <div className='text-[14px] self-center text-center mt-[0.35rem]'>{fetchedData?.tool?.upvotes || ''}</div>
                                    <HiArrowCircleUp className='self-center text-[14px] text-center' />
                                </div>
                                <div className=''><p className='text-[14px] text-starsGrey p-0 m-0'>Upvotes</p></div>
                            </div>
                            <span className="flex after:content-[''] after:w-[2px] after:h-[1rem] after:bg-starsGrey self-center mx-[2rem]"></span>

                            <div className='self-center flex flex-col items-center justify-around pt-1'>
                                <span className='self-center flex items-center mb-[0.35rem]'>
                                    <AiFillCarryOut className='self-center text-[14px] text-center' />
                                </span>
                                <div className='self-end'><p className='text-[14px] text-starsGrey p-0 m-0'>Editor's choice</p></div>
                            </div>
                        </div>

                        <div className="flex gap-[16px]">
                            <button className="py-[10px] px-[16px] bg-starsBlack text-starsWhite rounded-md min-h-[44px] min-w-[200px] inline-flex items-center justify-center">
                                <Link href={fetchedData?.tool?.link || ''}>Get now</Link>
                            </button>
                            <div className="flex gap-[8px]">
                                <div className="self-center text-[14px] text-starspurpleLight">
                                    <Link href={''} className='flex gap-1'>
                                        <BiShareAlt className='self-center' />
                                        <span className="pt-1">Share</span>
                                    </Link>
                                </div>
                                <div className="self-center text-[14px]">
                                    <Link href={''} className='flex gap-1'>
                                        <BiSolidBookmarkAltPlus className='self-center' />
                                        <span className="text-starsGrey pt-1 hover:text-starspurpleDark">Add to wishlist</span>
                                    </Link>
                                </div>
                                <div className="self-center text-[14px]">
                                    <button href={''} className='flex gap-1' onClick={handleCompareAlternatives}>
                                        <FaScaleBalanced className='self-center' />
                                        <span className="text-starsGrey pt-1 hover:text-starspurpleDark">Compare alternatives</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='self-end rounded-lg w-[25rem] h-[25rem]'>
                        <Image
                            src={'https://res.cloudinary.com/dck5v2kub/image/upload/v1708206223/jaeyLusson/pngegg_13_b6usfj.png'}
                            width={500}
                            height={400}
                            alt={fetchedData?.tool?.name || ''}
                            className='self-center w-[100%] h-[100%] rounded-lg object-contain'
                        />
                    </div>
                </div>

                <div className='flex justify-between gap-[5%]'>
                    <main className="w-4/6">
                        <div className='w-[100%]'>
                            <ProductdetailCarousel productImages={fetchedData} />
                        </div>
                        <div className="pt-[24px]">
                            <header className="pb-[20px]">
                                <div className='flex'>
                                    <h2 className="font-[800] mr-[12px] text-[1.5rem] text-starsBlack">About this software</h2>
                                    <FaArrowRight className='self-center' />
                                </div>
                            </header>
                            <p className="text-[.875rem] font-[400] leading-[1.25rem]">{fetchedData?.tool?.description || ''}</p>

                            <div className="mt-[36px] text-[.875rem] font-[400] leading-[1.25rem] ">
                                <div className='font-[700]'>updated on</div>
                                <div className='mt-[4px] text-starspurpleLight'>Apr 16, 2024</div>
                            </div>
                        </div>

                        <div className="mt-[32px]">
                            <h2 className="mb-[12px] text-[1.35rem] font-[700] text-starsBlack">Best for</h2>
                            <div className="grid grid-cols-2 gap-x-3 gap-y-5">
                                <div className="">
                                    <ul className="">
                                        {fetchedData?.tool?.targetAudience.map((item: any) => (
                                            <li key={item} className="flex gap-[0.5rem] text-[.875rem] font-[400] leading-[1.25rem]">
                                                <FaCheckCircle className="self-center" />
                                                <p className='pt-1'>{item}</p>
                                            </li>
                                        )) || ''}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <button className='rounded-full mt-[32px] text-[.675rem] font-[400] leading-[1.25rem] py-[0.45rem] px-[0.8rem] inline-flex items-center justify-center bg-starsBlack text-starsWhite'>
                            <Link href={''}> entertainment </Link>
                        </button>

                        <div className='mt-[48px]'>
                            <YoutubeVideo videoId="NgkCgqIogcY" height="500" width="800" autoplay={0} />
                        </div>

                        <div className="mt-[32px]">
                            <h3 className="font-[800] text-[1.5rem] text-starsBlack">Plans & Features</h3>

                            <div className="pt-[12px]">
                                <ul className="">
                                    {fetchedData?.tool?.features.map((item: any) => (
                                        <li key={item} className="flex gap-[0.5rem] text-[.875rem] font-[400] leading-[1.25rem]">
                                            <FaCheckCircle className="self-center" />
                                            <p className='pt-1'>{item}</p>
                                        </li>
                                    )) || ''}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-[64px] w-[100%]">
                            <div className=""><h2 className="text-[1.5rem] font-[800] text-starsBlack">Rating & Reviews</h2></div>

                            <div className="flex gap-[5%] mt-[32px] w-[100%] py-[12px]">
                                <div className="">
                                    <div className="text-[3.5rem] leading-[4rem] text-starsBlack">4.3</div>
                                    <div className=""><ReactStars value={3} isEdit={false} className='' /></div>
                                    <div className='mt-[.5rem]'>250 reviews</div>
                                </div>

                                <div className="w-[95%]">
                                    <div className='flex gap-3 w-[100%] justify-start'>
                                        <div className=''>5</div>
                                        <div className='w-[95%] self-center'>
                                            <Line percent={20} strokeWidth={1} strokeColor="#000000" className='w-[100%] self-center' />
                                        </div>
                                    </div>
                                    <div className='flex gap-3 w-[100%]'>
                                        <div className=''>4</div>
                                        <div className='w-[95%] self-center'><Line percent={25} strokeWidth={1} strokeColor="#000000" className='w-[100%] self-center' /></div>
                                    </div>
                                    <div className='flex gap-3 w-[100%]'>
                                        <div className=''>3</div>
                                        <div className='w-[95%] self-center'><Line percent={40} strokeWidth={1} strokeColor="#000000" className='w-[100%] self-center' /></div>
                                    </div>
                                    <div className='flex gap-3 w-[100%]'>
                                        <div className=''>2</div>
                                        <div className='w-[95%] self-center'><Line percent={20} strokeWidth={1} strokeColor="#000000" className='w-[100%] self-center' /></div>
                                    </div>
                                    <div className='flex gap-4 w-[100%]'>
                                        <div className=''>1</div>
                                        <div className='w-[95%] self-center'><Line percent={80} strokeWidth={1} strokeColor="#000000" className='w-[100%] self-center' /></div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[36px]">
                                <div className="flex gap-[1rem]">
                                    <div className="rounded-full w-[1.5rem] h-[1.5rem] bg-starspink self-center text-center text-starsWhite items-center">V</div>
                                    <div className="self-center items-center mt-1 text-starsBlack">Vivian Mia</div>
                                </div>

                                <div className="pt-[16px]">
                                    <div className='flex gap-3 items-center'>
                                        <ReactStars value={3} isEdit={false} className='' />
                                        <p className='text-starsBlack mt-1'>February 23, 2024</p>
                                    </div>
                                    <p className='text-[#808080] mt-[16px] text-[16px]'>
                                        I don't like some of the features of this app. First of all, it doesn't show new trends on FYP. If you try to add a particular effect like black and white or slow motion on a video you are recreating for a trend, it doesn't work. When I upload a video, the quality of the videos and pictures absolutely disappear. Very frustreviewStars. You guys should do something about it or I will delete it soon.
                                    </p>
                                </div>
                            </div>

                            <form className="mt-[36px] border-t border-[#d4d3d3] py-4" onSubmit={handleReviewSubmit}>
                                <label htmlFor="" className='font-[800] text-[1.5rem]'>Add a rating</label>
                                <textarea
                                    className="textarea textarea-bordered w-[100%] mt-2"
                                    placeholder="Add a review"
                                    value={reviewContent}
                                    onChange={(e) => setReviewContent(e.target.value)}
                                ></textarea>
                                <div className='flex items-center justify-between'>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <input
                                                key={star}
                                                type="radio"
                                                name="rating-1"
                                                className="mask mask-star"
                                                checked={reviewStars === star}
                                                onChange={() => setreviewStars(star)}
                                            />
                                        ))}
                                    </div>
                                    <button type="submit" className='mt-1 rounded-md bg-starsBlack text-starsWhite px-4 py-2'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </main>

                    <aside className='w-2/6 sticky'>
                        <div className="flex gap-[1rem]">
                            <h2 className="text-[24px]">Similar Apps</h2>
                            <FaArrowRight className='self-center' />
                        </div>

                        <div className='mt-[2rem] flex flex-col gap-4'>
                            <Link href={`/saas/products/id`}>
                                <div className='flex w-full gap-4 h-[8rem] p-[1rem] rounded-lg shadow-md border border-starsBlack'>
                                    <div className='h-[70%] w-[30%] bg-starsBlack self-center rounded-md'>
                                        <Image
                                            width={500}
                                            height={500}
                                            alt=''
                                            className='h-[100%] w-full self-center'
                                            src={'https://res.cloudinary.com/dck5v2kub/image/upload/v1708206223/jaeyLusson/pngegg_13_b6usfj.png'}
                                        />
                                    </div>
                                    <div className='flex flex-col justify-center w-[70%]'>
                                        <h3 className='text-[20px] font-[800] text-starsBlack'>Name of app</h3>
                                        <p className='text-[16px] text-[#797979] leading-4 mt-1'>Description of the app that helps people to sing</p>
                                    </div>
                                </div>
                            </Link>

                            <Link href={`/saas/products/id`}>
                                <div className='flex w-full gap-4 h-[8rem] p-[1rem] rounded-lg shadow-md border border-starsBlack'>
                                    <div className='h-[70%] w-[30%] bg-starsBlack self-center rounded-md'>
                                        <Image
                                            width={500}
                                            height={500}
                                            alt=''
                                            className='h-[100%] w-full self-center'
                                            src={'https://res.cloudinary.com/dck5v2kub/image/upload/v1708206223/jaeyLusson/pngegg_13_b6usfj.png'}
                                        />
                                    </div>
                                    <div className='flex flex-col justify-center w-[70%]'>
                                        <h3 className='text-[20px] font-[800] text-starsBlack'>Name of app</h3>
                                        <p className='text-[16px] text-[#797979] leading-4 mt-1'>Description of the app that helps people to sing</p>
                                    </div>
                                </div>
                            </Link>

                            <Link href={`/saas/products/id`}>
                                <div className='flex w-full gap-4 h-[8rem] p-[1rem] rounded-lg shadow-md border border-starsBlack'>
                                    <div className='h-[70%] w-[30%] bg-starsBlack self-center rounded-md'>
                                        <Image
                                            width={500}
                                            height={500}
                                            alt=''
                                            className='h-[100%] w-full self-center'
                                            src={'https://res.cloudinary.com/dck5v2kub/image/upload/v1708206223/jaeyLusson/pngegg_13_b6usfj.png'}
                                        />
                                    </div>
                                    <div className='flex flex-col justify-center w-[70%]'>
                                        <h3 className='text-[20px] font-[800] text-starsBlack'>Name of app</h3>
                                        <p className='text-[16px] text-[#797979] leading-4 mt-1'>Description of the app that helps people to sing</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default Page;
