// @ts-nocheck
"use client"
import React from 'react'
import AdForm from '@/app/component/UI/Form/Form'
import Image from 'next/image';
import { usePayments } from '@/context/PaymentsContext';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter()
  const { state, dispatch,setPrice, setDescription, setPaid, setDuration, setLink, setTitle, setAdspace, setStartingDate, setImage, setCampaignBudget} = usePayments();

  const handleAdSubmit = async (e, formData) => {
    e.preventDefault();
    console.log(formData, "form data")
    try {
      await dispatch(setPrice(formData.price));
      await dispatch(setDescription(formData.adSpace));
      await dispatch(setPaid(formData.paid));
      await dispatch(setDuration(formData.duration));
      await dispatch(setLink(formData.link));
      await dispatch(setTitle(formData.title));
      await dispatch(setAdspace(formData.adSpace));
      await dispatch(setStartingDate(formData.startingDate));
      await dispatch(setImage(formData.image));
      await dispatch(setCampaignBudget(formData.campaignBudget));
    } catch (err) {
      console.log(err, "error sending form");
    }

    if (state.paid) {
      console.log(state.isPaid, "payment sent");
      console.log(formData, "form is sent!");
    }

    router.push('/payments');
  };

  return (
    <section className='w-full flex justify-center bg-starsWhite'>
      
      <div className='self-center w-[70%] my-[5rem] md:my-[5rem]'>
        <div className=''>
          <h1 className='text-[2rem] font-[700]'>Advertise on Cre8camp</h1>
          <p className='mt-2 text-[#ccc]'>Promote your products and services</p>
        </div>

        <div className='w-full flex gap-10 mb-6 mt-8' style={{ height: 'calc(100vh - 5rem)'}}>
          <div className='bg-starsWhite flex-1'>
            <AdForm onSubmit={handleAdSubmit} />
          </div>
          <div className='bg-starsWhite  flex-1'>
            <Image 
              src={"https://res.cloudinary.com/dck5v2kub/image/upload/v1710355703/toolsForstars/karsten-winegeart-W3FIaYKNxGQ-unsplash_skck8m.jpg"} 
              className="w-full h-full object-cover" 
              width={500} 
              height={500} 
              alt="" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page;
