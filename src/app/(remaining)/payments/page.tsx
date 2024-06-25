//@ts-nocheck
'use client'
import React,{useState} from 'react'
import PaypalCheckoutButton from '@/app/utils/PaypalCheckoutButton'
import { usePayments } from '@/context/PaymentsContext'
import { FcApproval, FcCancel } from 'react-icons/fc';


const Page = () => {
    const { state, setLoading, dispatch} = usePayments();
    console.log(state, "state ii")

    const client = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
    console.log(client,"client id")

    const payment = {
        clientId:client,
        intent:"capture",
    }

    const showIcon = () => {
        if (state.loading && !state.error.length && !state.success) {
            return <span className="loading loading-spinner loading-lg"></span>;
        } else if (state.success && state.loading) {
            return (<div className='flex flex-col gap-4 self-center'>
                <FcApproval className='w-[50%] h-[50%] self-center'/>
                <div className='font-[700] text-[1.5rem]'>Upload Successful</div>
            </div>)
        } else if (state.error.length > 0 && state.loading) {
            return (<div className='flex flex-col gap-4'>
            <FcCancel className='w-[50%] h-[50%] self-center'/>
            <div className=' flex flex-col gap-2'>
                <div className='font-[700] text-[1.2rem] text-center'>Upload Unsuccessful, Please try again</div>
                <p className='text-center text-[1.2rem] font-[700] m-0 p-0'>Or contact <a href='' className='underline underline-offset-2 text-starspurpleDark'>support</a></p>
                <p className='text-center text-[0.95rem] m-0 p-0'>Error Msg: {state.error}</p>
            </div>
        </div>)
        }
    };
  return (
    <section className='flex justify-center items-center align-middle w-full h-[80vh]  bg-[#e9e6e6]'>
        {state.loading && (
                <>
                    <div className="absolute bg-starsBlack z-[1000] top-0 right-0 left-0 bottom-0 opacity-65" onClick={() => dispatch(setLoading(false))}></div>
                    <div className='w-[20rem] bg-starsWhite rounded-md absolute self-center mt-[35vh] z-[1000] top-4'>
                        <div className='w-[100%] border-starsGrey border-b flex justify-between py-1'>
                            <div className=" flex justify-center items-center w-[100%] self-center font-[600] text-[20px] gap-2 h-[40vh] z-50 py-2">
                                {showIcon()}
                            </div>
                        </div>
                    </div>
                </> 
            )}
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
            <div className='w-full -z-10'>
                <PaypalCheckoutButton payment={payment} className='w-full' />
            </div>
        </div>
    </section>
  )
}

export default Page