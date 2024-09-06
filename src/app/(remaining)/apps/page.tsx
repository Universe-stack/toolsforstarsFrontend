//@ts-nocheck
"use client";
import React, { useContext, useState, useEffect } from 'react';
import SaasCarousel from '../../component/UI/Slider/SaasCarousel';
import AdsCarousel from '@/app/component/UI/Slider/AdsCarousel';
import ProductCard from '../../component/UI/saasProductCard/ProductCard';
import { IconsContext } from '@/context/IconsContext';
import { useResource } from '@/context/ResourceContext';
import { useBackdrop } from '@/context/BackdropContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiOutlineFilter } from "react-icons/hi";
import { FaSliders, FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";

export default function Page() {
  const { icon } = useContext<any>(IconsContext);
  const { state, dispatch, handleFetchAllApps, handleFetchFilteredApps } = useResource();
  const { pagination } = state;
  const {setBackdrops} = useBackdrop()
  const [appTools, setappTools] = useState([]);
  const [error, setError] = useState(null);
  const [backdrop, setBackdrop] = useState<boolean>(false);
  const [filter, setFilter] = useState({ title: '', selectedValue: '' });
  const [submitted, setSubmitted] = useState(false);
  const [ads, setAds] = useState([]);


  const handleChange = (e) => {
    setFilter({ ...filter, selectedValue: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      await handleFetchFilteredApps(filter.selectedValue);
    } catch (error) {
      console.error('Filter fetch failed:', error);
    }
  };

  const handleIconChange = async (selectedIcon) => {
    setSubmitted(false);
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await fetch(`https://createcamp.onrender.com/tools/apps/filterResults?category=${selectedIcon}`);
      const data = await response.json();

      if (!response.ok) {
        toast.error('Error fetching tools, try again!');
        throw new Error('Failed to fetch app tools');
      }

      if (data.tools.length <= 0) {
        toast.error(`No tools found for ${selectedIcon}`);
      } else {
        toast.success('Tools fetched successfully!');
      }

      setappTools(data.tools);
      setError(null);
    } catch (error) {
      console.error('Error fetching apps tools:', error);
      setError('Error fetching apps tools. Please try again.');
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const fetchData = async (page = 1, retries = 3, delay = 8000) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      await handleFetchAllApps(page);
    } catch (error) {
      console.error('Fetching Apps data failed:', error);
      if (retries > 0) {
        setTimeout(() => fetchData(page, retries - 1, delay * 2), delay);
      } else {
        setError('Fetching Apps data failed. Please try again.');
      }
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const handlePreviousPage = () => {
    if (state.pagination.currentPage > 1) {
      const previousPage = state.pagination.currentPage - 1;
      dispatch({ type: 'SET_PAGINATION', payload: previousPage });
      fetchData(previousPage);
    }
  };

  const handleNextPage = () => {
    if (state.pagination.currentPage < state.pagination.totalPages) {
      const nextPage = state.pagination.currentPage + 1;
      dispatch({ type: 'SET_PAGINATION', payload: nextPage });
      fetchData(nextPage);
    }
  };

  const handleFilteredPreviousPage = () => {
    if (pagination.currentPage > 1) {
      handleFetchFilteredApps(filter.selectedValue, Number(state.pagination.currentPage) - 1);
    }
  };
  
const handleFilteredNextPage = ()=>  {
  if (pagination.currentPage < pagination.totalPages) {
      handleFetchFilteredApps(filter.selectedValue, Number(pagination.currentPage) + 1 );
  }
}

  const fetchAds = async (retries = 3, delay = 8000) => {
    try {
      const response = await fetch('https://createcamp.onrender.com/ads/all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      if (!response.ok) {
        toast.error('Error fetching ads, please refresh!');
        throw new Error('Failed to fetch ads');
      }

      if (!data) {
        toast.error('No ads found');
      } else {
        setAds(data);
      }
    } catch (error) {
      console.error('Error fetching ads', error);
      if (retries > 0) {
        setTimeout(() => fetchAds(retries - 1, delay * 2), delay);
      }
    }
  };

  useEffect(() => {
    fetchData(state.pagination.currentPage);
    fetchAds();
  }, []);



  const backdropSet = () => {
    setBackdrop(true);
  };

  const subMit = submitted ? (
    state.appsFiltered?.tools.map((item) => (
      <ProductCard key={item.id} data={item} />
    ))
  ) : null;


  const content = appTools.length > 0 ? (
    appTools.map((tool) => (
      <ProductCard key={tool.id} data={tool} />
    ))
  ) : state.appsResources?.tools ? (
    state.appsResources.tools.map((item) => (
      <ProductCard key={item.id} data={item} />
    ))
  ) : (
    <div className='text-center flex justify-center items-center h-full w-full absolute top-0 bottom-0 left-0 right-0'>
      No resources to show, check your internet
    </div>
  );

  return (
    <section className='w-[100%] flex flex-col justify-center relative pb-[2rem] bg-starsWhite text-starsBlack'>
      <ToastContainer className="absolute" />
      {state.isLoading && (
          <div className="absolute bg-starsBlack z-40 top-0 right-0 left-0 bottom-0 opacity-25" onClick={() => setBackdrop(false)}></div>
      )}

      {backdrop && (
        <>
          <div className="absolute bg-starsBlack z-40 top-0 right-0 left-0 bottom-0 opacity-25" onClick={() => setBackdrop(false)}></div>
          <div className='w-[20rem] bg-starsWhite rounded-md absolute self-center mt-[2rem] z-50 top-4'>
            <div className='w-[100%] border-starsGrey border-b flex justify-between py-1'>
              <div className="flex justify-end w-[55%] self-center font-[600] text-[20px] gap-2">Filters <span className="mt-1"><HiOutlineFilter /></span></div>
              <div className='w-[45%] flex justify-end px-4'><button className='p-3 self-center cursor-pointer' onClick={() => setBackdrop(false)}>x</button></div>
            </div>

            <div className="container mx-auto p-4">
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <label htmlFor="filterSelect" className="text-base font-medium">Select Filter:</label>
                <select id="filterSelect" value={filter.selectedValue} onChange={handleChange} className="rounded-md border border-starsGrey shadow-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-starspurpleDark">
                  <option value="">Filter By</option>
                  <option value="pricesHigh">High Prices first</option>
                  <option value="pricesLow">Low Prices First</option>
                  <option value="recentlyAdded">Recently Added</option>
                  <option value="bestReviews">Best Reviews</option>
                  <option value="bestUpvotes">Highest Upvotes</option>
                  <option value="aiEnabled">AI Enabled</option>
                </select>
                <button type="submit" className="inline-flex items-center px-4 py-2 bg-starsBlack text-starsWhite font-bold rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-starspurpleDark">Apply Filter</button>
              </form>
            </div>
          </div>
        </>
      )}

      <div className='2xl:w-[75%] xl:w-[75%] lg:w-[85%] md:w-[85%] sm:w-[85%] xsm:w-[85%] self-center'>
        <div className='w-full mt-[3rem] bg-starsBlack rounded-[1.5rem] text-starsWhite text-center relative '>
          <AdsCarousel ads={ads} />
        </div>

        <div className='custom-after absolute left-0 right-0'></div>

        <div className='w-[100%]'>
          <div className='flex gap-3 mt-[2rem] justify-between'>
            <div className='2xl:w-[88%] xl:w-[80%] lg:w-[75%] md:w-[80%] sm:w-[76%] xsm:w-[76%] mt-[0.83rem]'>
              <SaasCarousel onIconChange={handleIconChange} />
            </div>
            <button className='self-center flex justify-center items-center border border-starsGrey rounded-md px-3 gap-2 h-[2.5rem] ml-2' onClick={backdropSet}>
              <div className='self-center'><FaSliders className='text-[16px] self-center text-starsBlack' /> </div>
              <div className='self-center 2xl:block xl:block lg:block md:block  sm:hidden xsm:hidden '>Filter</div>
            </button>
          </div>

          <div className='grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-2 gap-5 mt-[5rem] w-[100%] justify-center items-center relativee'>
            {submitted ? subMit : content}
          </div>
        </div>

        <div className='w-full flex justify-end mt-8'>
        {state.appsFiltered ? (
          <div className="flex gap-2 items-center">
            <button className='join-item btn btn-outline flex gap-2 items-center' onClick={handleFilteredPreviousPage}  disabled={state.pagination.currentPage <= 1}>
              Previous <FaAnglesLeft className='pb-[0.4rem] text-[1.5rem]' />
            </button>
            <span className='self-center text-starspurpleLight'>{`${state.pagination.currentPage} / ${state.pagination.totalPages}`}</span>
            <button className='join-item btn btn-outline flex gap-2 items-center' onClick={handleFilteredNextPage} disabled={state.pagination.currentPage >= state.pagination.totalPages}>
              Next <FaAnglesRight className='pb-[0.4rem] text-[1.5rem]' />
            </button>
          </div>
        ) : (
          <div className="join grid grid-cols-2 self-end w-[15rem] ">
            <button className="join-item btn btn-outline flex gap-2 items-center" onClick={handlePreviousPage} disabled={state.pagination.currentPage === 1}>
              Previous <FaAnglesLeft className='pb-[0.4rem] text-[1.5rem]' />
            </button>
            <button className="join-item btn btn-outline flex gap-2 items-center" onClick={handleNextPage} disabled={state.pagination.currentPage === state.pagination.totalPages}>
              Next <FaAnglesRight className='pb-[0.4rem] text-[1.5rem]' />
            </button>
          </div>
        )}
      </div>

      </div>
    </section>
  );
}
