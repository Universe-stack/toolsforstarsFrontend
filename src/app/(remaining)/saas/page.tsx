//@ts-nocheck
"use client"
import React, { useContext, useState, useEffect } from 'react';
import SaasCarousel from '../../component/UI/Slider/SaasCarousel';
import ProductCard from '../../component/UI/saasProductCard/ProductCard';
import { IconsContext } from '@/context/IconsContext';
import Link from 'next/link'
import { FaSliders } from "react-icons/fa6";
import { useResource } from '@/context/ResourceContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Page() {
  const { icon } = useContext<any>(IconsContext);
  const [saasTools, setSaasTools] = useState([]); // State to store Saas tools
  const [error, setError] = useState(null);
  const [backdrop, setBackdrop] = useState<boolean>(false);
  const { state, dispatch, handleFetchAllSaas } = useResource();

  const handleIconChange = async (selectedIcon) => {
    console.log('Selected Icon:', selectedIcon);
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await fetch(`https://createcamp.onrender.com/tools/saas/filterResults?category=${selectedIcon}`);
      if (!response.ok) {
        toast.error('Error fetching tools, try again!');
        throw new Error('Failed to fetch Saas tools');
        
      }
      const data = await response.json();
      if(data.tools.length <= 0){
        toast.error(`No tools found for ${selectedIcon} `)
      }else if(data.tools.length >= 0){
        toast.success('Tools fetched successful!');
      }
      console.log(data, "data from tools")
      setSaasTools(data.tools); // Update saasTools state with fetched tools
      setError(null);
    } catch (error) {
      console.error('Error fetching Saas tools:', error);
      setError('Error fetching Saas tools. Please try again.');
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log('Fetching from saas...')
      try {
        dispatch({ type: 'SET_LOADING', payload: true });
        await handleFetchAllSaas();
      } catch (error) {
        console.error('Fetching SAAS data failed:', error);
        setError('Fetching SAAS data failed. Please try again.');
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };
    fetchData();
  }, []); // Empty dependency array to run the effect only once after the initial render

  console.log(state.saasResources, "state")

  const backdropSet = () => {
    setBackdrop(true);
    console.log(backdrop);
  };

  return (
    <section className='w-[100%] flex flex-col justify-center relative'>
      <ToastContainer className="absolute" />
      { backdrop ? <><div className="absolute bg-starsBlack z-40 top-0 right-0 left-0 bottom-0 opacity-25" onClick={()=>setBackdrop(false)}></div>
      <div className='w-[40rem] h-[35rem] bg-starsWhite rounded-md absolute self-center mt-[2rem] z-50 top-4 overflow-y-scroll'>
        <div className='w-[100%] border-starsGrey border-b flex justify-between py-1'>
            <div className="flex justify-end w-[55%] self-center">Filters</div>
            <div className='w-[45%] flex justify-end px-4'><button className='p-3 self-center cursor-pointer' onClick={()=>setBackdrop(false)}>x</button></div>
        </div>
      </div> </> : null}
      
      <div className='w-[75%] self-center'>
        <div className='w-full h-[25rem] mt-[3rem] bg-starsBlack rounded-[1.5rem] text-starsWhite text-center '>
          <h2 className='font-[600] text-[3rem] pt-[7rem]'>PLACE ADS HERE</h2>
        </div>

        <div className='custom-after absolute left-0 right-0'></div>

        <div className='w-[100%]'>
          <div className='flex gap-3 mt-[2rem] justify-between'>
            <div className='w-[88%] mt-[0.83rem]'>
              <SaasCarousel onIconChange={handleIconChange}/>
            </div>
            <button className='self-center flex justify-center items-center border border-starsGrey rounded-md px-3 gap-2 h-[2.5rem] ml-2' onClick={backdropSet}>
              <div className=' self-center'><FaSliders className='text-[16px] self-center text-starsBlack'/> </div>
              <div className='self-center'>Filter</div>
            </button>
          </div>

          <div className='grid grid-cols-4 gap-10 mt-[5rem] w-[100%]'>
            {saasTools.length > 0 ? (
              saasTools.map((tool) => (
                <ProductCard key={tool.id} data={tool} />
              ))
            ) : (
              state.saasResources && state.saasResources.tools.map((item) => (
                <ProductCard key={item.id} data={item} />
              ))
            )}
          </div>         
        </div>
      </div>
    </section>
  );
}