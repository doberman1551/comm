import React from 'react'
import Image from 'next/image'

const ProductInfo = () => {
  return (
    <section>
    <div className="container m-auto px-6 md:px-12 lg:px-6 dark:bg-white">
      <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
      
    
        <div className=" pt-24 pb-4 sm:py-24">
          <h2 className="text-2xl font-bold sm:text-3xl dark:text-slate-900">Connecting NFT communities with <br/>Web3 friendly brands </h2>
  
        </div>
        <div className="py-4 sm:py-24 dark:text-slate-900">
            <p className="text-lg">RewardYourCommunity offers holdrs of ceratin  NFT projects or Discord members to redeem deals to selected  Web2 products and tools. </p>
        </div>
      </div>
        <div className='flex justify-center py-8 '>
         <Image src="/img/product.png" width={976} height={390}></Image>
      </div>
      <p>* Brands are indicative</p>
    </div>
  </section>
  )
}

export default ProductInfo