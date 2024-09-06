//@ts-nocheck
"use client";
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link'

const Page = () => {
  const { state, handleSignIn } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({
    password: '',
    username: ''
  });

  useEffect(() => {
    if (state.isLoading) {
      toast.info('Signing you in...');
    } else if (state.signInResult) {
      if (state.signInResult.message) {
        toast.error(state.signInResult.message);
      } else if (state.signInResult.user && state.signInResult.token) {
        toast.success('SignIn successful!');
        console.log("token", state.signInResult.token)
        localStorage.setItem('user', JSON.stringify(state.signInResult.user));
        localStorage.setItem('token', state.signInResult.token);
        router.push("/");
      }
      setForm({
        password: '',
        username: '',
      });
    }
  }, [state.isLoading, state.signInResult, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSignIn(form);
  };

  return (
    <section className="text-starsWhite bg-starsBlack relative xl:h-[100vh] 2xl:h-[100vh] flex items-center justify-center w-full">
      <ToastContainer className="absolute"/>
      <div className="w-[80%] grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Welcome back</h2>
            <p className="mt-2 text-base text-gray-600">Don’t have an account? <Link href="/signUp" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700">Create a free account</Link></p>

            <form action="#" method="POST" className="mt-8" onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label className="text-base  text-starspink font-[800]"> Username </label>
                  <div className="mt-2.5">
                    <input
                      onChange={handleInputChange}
                      type="text"
                      name='username'
                      value={form.username}
                      placeholder="Enter username to log in"
                      className="block w-full p-4 text-starsBlack bg-starsWhite placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base  text-starspink font-[800]"> Password </label>

                  </div>
                  <div className="mt-2.5">
                    <input
                      onChange={handleInputChange}
                      type="password"
                      name='password'
                      value={form.password}
                      placeholder="Enter your password"
                      className="block w-full p-4 bg-starsWhite text-starsBlack placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 text-starsBlack bg-starsWhite hover:bg-starspink border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">Log in</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8 h-full">
                <div className='flex flex-col'>
                    <img className="w-[75%] mx-auto self-start" src="https://res.cloudinary.com/dck5v2kub/image/upload/v1721920732/toolsForstars/Sign_up-bro_tfjyaa.png" alt="" />

                    <div className="w-full max-w-md mx-auto xl:max-w-xl">
                        <div className="flex items-center justify-center mt-10 space-x-3">
                            <div className="bg-starsWhite rounded-full w-20 h-1.5"></div>

                            <div className="bg-starsWhite rounded-full w-12 h-1.5"></div>

                            <div className="bg-starsWhite rounded-full w-12 h-1.5"></div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </section>
  );
};

export default Page;
