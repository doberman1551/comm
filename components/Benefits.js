import React from 'react'
import Image from 'next/dist/client/image'
const Benefits = () => {
  return (
    <div className="bg-bg_image  bg-no-repeat opacity-90 pt-16 pb-0 w-full h-full ">
    <div className="container  m-auto px-6 md:px-12 lg:px-6">
        <div className="flex justify-center">
        <h2 className="text-2xl font-bold lg:text-3xl"> Benefits</h2>
        </div> 

        <div className=" pt-16 pb-0 grid grid-cols-1 gap-1 lg:grid-cols-3 justify-items-center">
            <div className="grid grid-cols-1 justify-items-center">
            <Image src='/img/brandstar.png' height={94} width={94}/>
                <h3  className=" py-4 text-xl font-bold lg:text-2xl">For Brands</h3>
                <p className="w-64">
                Enter the world of Web3  easily and earn  the attention of some of the most engaged communities in the world .
                </p>
            </div>

            <div className="grid grid-cols-1 justify-items-center pt-8">
            <Image src='/img/network.png' height={92} width={92}/>
            <h3  className= "py-4 text-xl font-bold lg:text-2xl">For NFT Projects</h3>
            <p className="w-64"> Provide extra utility for your community and reward your fans for sticking in.</p>
            </div>

            <div className="grid grid-cols-1 justify-items-center pt-8">
                
            <Image src='/img/holders.png' height={92} width={92}/>
            <h3  className="py-4 text-xl font-bold lg:text-2xl">For NFT Holders</h3>
            <p className="w-64 pb-0"> Make use of your NFTs and save cash on tools and products you use..</p>
            </div>
        </div>
            
            </div> 

            </div>


  )
}

export default Benefits