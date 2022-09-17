import React from 'react'
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <div className="pt-24 pb-20 md:pt-0 dark:bg-white">
    <div className="container m-auto px-6 md:px-12 lg:px-6">
        <div className="lg:flex lg:items-center lg:gap-x-16">
            <div className="space-y-8 lg:w-7/12 ">
                <h1 className=" font-bold  text-gray-900 text-4xl md:text-5xl">Reward your NFT communites</h1>
                <h2 className=" text-2xl lg:text-3xl lg:w-11/12 text-slate-900 dark:text-slate-800">
                Engage your holders by offering them deals from their favourite digital tools and products
                </h2>
                <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex">
                    <a aria-label="Join Today" href="#" className=" p-2 md:p-4 border bg-primary rounded-2xl hover:opacity-75 hover:shadow-lg">
                        <div className="flex justify-center space-x-4 ">
                  
                            <button  type="button" className=" inline-block text-base md:text-2xl font-semibold text-white">Join Today</button>
                        </div>
                    </a>    
                    
                        <div className="flex justify-center space-x-4 items-center	">
                            <div className="">
                             <span className=" pr-2 text-black md:text-xl font-bold ">or</span>
                            <span className="font-bold md:text-xl text-primary  underline ">Discover More <br></br>
                            </span>
                            
                            </div>
                            
                        </div>
                        
                 

                            
                   
                </div>
          
            
            </div>
            <div className="hidden md:block">
            <Spline scene="https://prod.spline.design/YOFhbpIWYiZWpNMo/scene.splinecode" />


            </div>
            
        </div>
        <div className=" absolute">
                <svg xmlns="http://www.w3.org/2000/svg" width="95" height="153" viewBox="0 0 95 153" fill="none" className="lg:h-128 lg:block  lg:relative md:-top-16 lg:-top-12 xl:-top-32 2xl:-top-48  lg:left-64 hidden">
                                <g clipPath="url(#clip0_14_4)">
                    <rect width="142.075" height="71" transform="translate(94.5924 12.329) rotate(100)" fill="white"/>
                    <path d="M24.6711 -1.57487e-05C49.812 10.8188 78.8904 50.0377 80.9304 74.7044C83.2555 101.378 74.8827 115.042 40.4739 139.874C44.6755 140.203 48.0685 140.286 51.2021 140.633C54.7665 140.952 58.5374 141.308 62.0313 142.027C63.0641 142.209 64.7646 143.436 64.8654 144.072C64.9663 144.707 63.3443 145.451 62.2763 145.469C52.0444 145.519 41.8478 145.369 31.427 145.282C28.0339 145.199 25.6609 144.163 24.9276 142.282C22.7675 135.207 20.4008 128.095 18.4649 120.956C18.1095 119.348 19.2527 117.696 19.605 115.698C28.2052 118.862 26.5383 122.276 28.3525 125.274C30.3557 128.408 31.2908 131.56 33.1531 135.493C46.1823 129.242 54.8913 122.126 61.0032 114.037C83.683 84.4594 74.921 52.0156 42.2062 17.7173C37.8828 13.2471 32.6804 8.93096 28.1329 4.52427C27.2939 3.24335 26.4372 2.06233 24.6711 -1.57487e-05Z" fill="#D1BCE3"/>
                                </g>
                                <defs>
                                 <clipPath id="clip0_14_4">
                                  <rect width="142.075" height="71" fill="white" transform="translate(94.5924 12.329) rotate(100)"/>
                                 </clipPath>
                                </defs>
                            </svg>
                            </div>

    </div>
    </div>
  )
}

export default Hero