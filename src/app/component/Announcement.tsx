import React from 'react'
import Link from 'next/link'

type Props = {}

const Announcement = (props: Props) => {
  return (
    <div className='bg-starspurpleDark w-[100vw] flex justify-center py-2 '>
            <Link href={"/promotions"} className='w-[77%]'>
                <div className='w-full flex justify-start gap-4'>
                    <p className='text-starsWhite self-center'>Announcement: Advertise & Promote your resource</p> 
                    <div className='self-start font-[800] bg-starsWhite p-1 rounded-full cursor-pointer text-starspurpleLight'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                width="20px"
                                height="20px"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M3.75 12a.75.75 0 0 1 .75-.75h11.19l-3.22-3.22a.75.75 0 1 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H4.5a.75.75 0 0 1-.75-.75z"
                                    clipRule="evenodd"
                                />
                                </svg>
                    </div>
                </div>
            </Link>
    </div>
  )
}

export default Announcement