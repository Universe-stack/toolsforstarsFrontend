'use client'
import React from 'react'



const HeroVideo = () => {
  return (
    <div className='flex justify-center align-middle self-center xsm:h-[100%] xl:h-[100%] xl:w-[100%] xsm:bg-starsBlack xl:bg-none absolute top-0 left-0 right-0 bottom-0  2xl:bg-starspurpleLight'>
        <div className="absolute top-0 bottom-0 left-0 right-0 herbg opacity-85 z-10"></div>
        <div className="video-container">
            <video autoPlay preload="auto" loop muted>
                <source src="https://res.cloudinary.com/dck5v2kub/video/upload/v1724686155/toolsForstars/createcamphome_y3qnpk.mp4" type="video/mp4" />
                <track src="/path/to/captions.vtt" kind="subtitles" label="English" />
                Your browser does not support the video tag.
            </video>
            <style jsx>{`
            .video-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100%;
            overflow: hidden;
            }
            video {
            width: 100%;
            height: 90%;
            object-fit: cover;
            }
            @media (min-width: 1024px) { /* lg screens */
            .video-container {
                height: 100%;
            }
            video {
                height: 100%;
            }
            }
        `}</style>
        </div>
    </div>
  )
}

export default HeroVideo