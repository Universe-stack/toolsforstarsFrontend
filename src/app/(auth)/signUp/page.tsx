//@ts-nocheck
"use client"

import React, { useState,useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link'

const Page = () => {
  const { state, dispatch, handleSignup } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({
    email: '',
    password: '',
    username: '',
    name: '',
    role: '',
  });
  const [agreeChecked, setAgreeChecked] = useState(false);



  useEffect(() => {
    if (state.isLoading) {
      toast.info('Signing up...'); 
      setForm({
        email: '',
        password: '',
        username: '',
        name: '',
        role: '',
      })
    } else if (state.signUpResult) {
      if (state.signUpResult.message) {
        toast.error(state.signUpResult.message); 
      } else {
        toast.success('Signup successful!');
        router.push("/")
      }
    }
  }, [state.isLoading, state.signUpResult,router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreeChecked(e.target.checked);
  };

  const notifyFormError = () => {
    toast.error('Please agree to the Terms of Service and Privacy Policy.');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (agreeChecked) {
      try {
        await handleSignup(form);
        
      } catch (error) {
        console.error('Signup failed:', error);
      }
    } else {
      notifyFormError();
    }
  };


  return (
<section className="py-10 bg-starsBlack sm:py-16 lg:py-24 relative">
    <ToastContainer className="absolute" />
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-starsWhite sm:text-4xl lg:text-5xl">Create free account</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-starsWhite">You can create a free CreateCamp account in 60 seconds</p>
        </div>

        <div className="relative max-w-md mx-auto mt-8 md:mt-16 bg-starsWhite rounded-md">
            <div className="overflow-hidden bg-white rounded-md shadow-md">
                <div className="px-4 py-6 sm:px-8 sm:py-7">
                    <form action="#" method="POST" onSubmit={handleSubmit}>
                        <div className="space-y-5">
                            <div>
                                <label className="text-base font-medium text-gray-900"> Name </label>
                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>

                                    <input
                                        onChange={handleInputChange}
                                        type="text"
                                        name='name'
                                        value={form.name}
                                        id=""
                                        placeholder="Enter your full name"
                                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-base font-medium text-gray-900"> Username </label>
                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>

                                    <input
                                        onChange={handleInputChange}
                                        type="text"
                                        name='username'
                                        value={form.username}
                                        id=""
                                        placeholder="Enter your username"
                                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-base font-medium text-gray-900"> Email address </label>
                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
                                    </div>

                                    <input
                                        onChange={handleInputChange}
                                        type="email"
                                        name= "email"
                                        value={form.email}
                                        id=""
                                        placeholder="Enter email to get started"
                                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-base font-medium text-gray-900"> Password </label>
                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                            />
                                        </svg>
                                    </div>

                                    <input
                                        onChange={handleInputChange}
                                        type="password"
                                        name="password"
                                        value={form.password}
                                        id=""
                                        placeholder="Enter your password"
                                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                    />
                                </div>
                            </div>

                            <div>
                                        <label className="text-base font-medium text-gray-900"> Role </label>
                                        <select
                                            name="role"
                                            value={form.role}
                                            onChange={handleInputChange}
                                            className="block w-full py-4 pl-3 pr-10 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600  cursor-pointer"
                                        >
                                            <option value="visitor">Creator - You wish to use our platform</option>
                                            <option value="publisher">Publisher - You wish to publish a tool</option>
                                        </select>
                            </div>

                            <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            name="agree"
                                            id="agree"
                                            className="w-5 h-5 text-green-500 bg-white border-gray-200 rounded"
                                            checked={agreeChecked}
                                            onChange={handleCheckboxChange}
                                        />
                                        <label className="ml-3 text-sm font-medium text-gray-500">
                                            I agree to CreateCamp’s <a href="#" title="" className="text-blue-600 hover:text-blue-700 hover:underline">Terms of Service</a> and <a href="#" title="" className="text-blue-600 hover:text-blue-700 hover:underline">Privacy Policy</a>
                                        </label>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className={`inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold transition-all duration-200 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700 ${
                                                agreeChecked ? 'bg-starsBlack text-starsWhite' : 'bg-starsGrey text-starsWhite'
                                            }`}
                                            disabled={!agreeChecked} // Disable the button if terms and conditions are not agreed
                                        >
                                            Create account
                                        </button>
                                    </div>

                            <div className="text-center">
                                <p className="text-base text-gray-600">Already have an account? <Link href="/signIn" title="" className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline">Login here</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default Page