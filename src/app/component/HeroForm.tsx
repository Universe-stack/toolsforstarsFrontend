//@ts-nocheck
"use client"
import React, {useState,useEffect} from 'react'

type Props = {}

const HeroForm = (props: Props) => {
    const [emailState, setEmailState] = useState({email:''})
    const [emailStateResponse, setEmailStateResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  

    const subscribeUser = async (e:any) => {
        e.preventDefault();
        try {
            const formData = emailState;
            console.log(formData, "form data")
    
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.message}`);
            }
    
            const content = await response.json();
            setEmailStateResponse(true)
            setEmailState({ email: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            setEmailStateResponse(false)
        } finally {
          console.log(error, "error")
      }
    };
    
        
      
      const emailHandler = (e:any) => {
        setEmailState({ ...emailState, email: e.target.value });
      };

  return (
    <div className='mt-[5rem w-[100%]'>
    <p className='font-[500] text-starsWhite 2xl:text-[1.25rem] xl:text-[1.25rem] lg:text-[0.85rem] md:text-[1.25rem] sm:text-[1rem] xsm:text-[1rem]'>Join our newsletter to get updates on FREE resources and tools weekly</p>

    <form onSubmit={subscribeUser} className='flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xsm:flex-col w-[100%] gap-3 mt-[1rem] mb-4'>
      <input type="email" name="email" aria-label='Enter email address' aria-describedby='newsletter-btn' value={emailState.email} autoCapitalize='off' autoCorrect='off' onChange={emailHandler} placeholder="Enter your email" className="rounded-md 2xl:input 2xl:bg-starsWhite xl:input xl:bg-starsWhite lg:py-2 lg:px-1 input-bordered w-[100%] 2xl:w-[70%] xl:w-[70%] bg-starsWhite text-starsBlack lg:max-w-[70%]" />
      <button type="submit" name='subscribe' value="" className='bg-starsWhite text-starsBlack font-[700]  border 2xl:w-[30%] xl:w-[30%] md:w-[30%] sm:w-[100%] xsm:w-[100%] lg:w-[40%] rounded-md hover:bg-starsBlack hover:text-starsWhite inline-flex items-center justify-center 2xl:px-[0.35rem]  xl:px-[0.35rem] xsm:py-[10px] sm:py-[10px] lg:sm:p-[2px]  '>
      {isLoading ? 'Submitting...' : 'Get updates'}
      </button>
    </form>
    {emailStateResponse === true &&
        <p className='text-left text-sm mt-3 alert alert-warning'>
          Thanks for subscribing.
        </p>
    }

    {emailStateResponse === false &&
        <p className='text-left text-sm mt-3 alert alert-error'>
          Subscription failed. Please try again.
        </p>
    }
  </div>
  )
}

export default HeroForm