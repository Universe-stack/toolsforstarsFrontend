//@ts-nocheck
'use client'
import React from 'react'
import PaypalCheckoutButton from '@/app/utils/PaypalCheckoutButton'
import { usePayments } from '@/context/PaymentsContext'



const Page = () => {
    const { state, dispatch} = usePayments();
    console.log(state, "state")

    const client = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
    console.log(client,"client id")

    const payment = {
        clientId:client,
        intent:"capture",
    }

  return (
    <section className='flex justify-center items-center align-middle w-full h-[80vh]  bg-[#e9e6e6]'>

        <div className='self-center w-[28%] p-6 bg-starsWhite rounded-md'>
           <div className='w-[100%] flex flex-col gap-8 mb-4'>
            <div className='flex justify-between'>
                <h3 className='font-[700]'>Payment For</h3>
                <span className=''>{state.description}</span>
            </div>
            <div className='flex justify-between'>
                <h3 className='font-[700]'>Price</h3>
                <span className=''>${state.price}</span>
            </div>
            <div className='flex justify-between'>
                <h3 className='font-[700]'>Duration</h3>
                <span className=''>{state.duration}days</span>
            </div>
           </div>
            <div className='w-full'>
                <PaypalCheckoutButton payment={payment} className='w-full' />
            </div>
        </div>
    </section>
  )
}

export default Page