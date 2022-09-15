import React from 'react'

const Cta = () => {
  return (
    <div className="bg-lightPink/[.36] py-24 w-full h-full">
    <div className="container  m-auto px-6 md:px-12 lg:px-6">
 
                        <div className="flex justify-center ">
                          <div>
                          <h2 className=" text-2xl lg:text-3xl font-semibold py-4">
                             Enroll now and get an invite to Beta</h2>
                             <div className="flex justify-center py-8 ">
                            <button  type="button" className=" inline-block text-base md:text-2xl font-semibold text-white  p-2 md:p-4 border bg-primary rounded-2xl hover:opacity-75 hover:shadow-lg">Join today </button>
                            </div>
                          </div>
                        </div>
                   
    </div>
    </div>
  )
}

export default Cta