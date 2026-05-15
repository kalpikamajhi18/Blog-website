import { ArrowRight } from 'lucide-react'
import React from 'react'

const Subscribe = () => {
  return (
    
      
      <div className="rounded-[35px] w-[94%] mt-30 bg-[#F9F9F9]  py-20 border border-gray-300 ">
        
        {/* Heading */}
        <h1 className="text-center text-5xl font-medium font-[one] leading-[1] tracking-tight text-[#2f2f2f]">
          Subscribe our newsletter and <br />
          Stay updated each week
        </h1>

        {/* Description */}
        <p className="mt-7 text-center text-[14px] font-[one] text-gray-600">
          Regular updates ensure that readers have access to fresh
          perspectives, making Poster a must-read.
        </p>

        {/* Input Box */}
        <div className="mx-auto mt-7  flex w-[500px] h-[55px] items-center overflow-hidden rounded-xl border border-gray-300 bg-white p-1 shadow-md">
          
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-6 py-1 text-[15px] font-medium  outline-none"
          />

          <button className="flex items-center justify-center gap-1 rounded-xl w-[36%] bg-black px-[7px] py-[12px] text-[15px] font-semibold text-white">
            Submit Now
            <ArrowRight size={22} />
          </button>
        </div>

      </div>
   
  )
}

export default Subscribe