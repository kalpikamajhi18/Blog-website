import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen py-20 md:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-40 items-start mb-24">
        
     
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-950">
            Send a line about your project
          </h2>
          
          <form className="space-y-6">
      
            <div className="flex flex-col border-b border-gray-200 pb-3 group focus-within:border-black transition-colors duration-300">
              <label className="text-sm font-semibold text-gray-900 mb-1">Name</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 text-base py-1"
              />
            </div>

            <div className="flex flex-col border-b border-gray-200 pb-3 group focus-within:border-black transition-colors duration-300">
              <label className="text-sm font-semibold text-gray-900 mb-1">Email</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 text-base py-1"
              />
            </div>


            <div className="flex flex-col border-b border-gray-200 pb-3 group focus-within:border-black transition-colors duration-300">
              <label className="text-sm font-semibold text-gray-900 mb-1">Your Message</label>
              <textarea 
                rows="2"
                placeholder="Enter your message" 
                className="bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 text-base py-1 resize-none"
              />
            </div>

     
            <div className="pt-4">
              <button type="submit" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-black text-white text-sm font-semibold transition-all duration-300 hover:bg-gray-800">
                Send Message 
                <span className="text-base">→</span>
              </button>
            </div>
          </form>
        </div>


        <div className="h-full overflow-hidden rounded-3xl bg-gray-100 aspect-[4/3] lg:aspect-auto lg:h-[450px]">
          <img 
            src="https://cdn.prod.website-files.com/67b77fdb1c82093b528cb1ac/67be09c2fff1f4cfdf473828_Rectangle%2053.webp" 
            alt="Our Team Workspace" 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start border-t border-gray-100 px-40 pt-16">
        
 
        <div className="relative overflow-hidden rounded-3xl bg-gray-100 aspect-[16/9] lg:aspect-[2/1] w-full group cursor-pointer shadow-sm">
          <img 
            src="https://cdn.prod.website-files.com/67b77fdb1c82093b528cb1ac/67be0a9efd2a5c84e4de2cb9_map-image.webp" 
            alt="Location Map Placeholder" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
          />
    
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black text-white p-3.5 rounded-full shadow-xl transform transition-transform duration-300 group-hover:scale-110">
              <FaLocationDot  />
            </div>
          </div>
        </div>

   
        <div className="space-y-8 lg:pl-4">
          <h3 className="text-3xl font-bold tracking-tight text-gray-950">
            Our location
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
         
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-400 uppercase tracking-wider text-xs">Support</h4>
              <p className="text-gray-900 font-medium transition-colors hover:text-gray-600 cursor-pointer">hello@studio.com</p>
              <p className="text-gray-600 font-medium">123 456 8888</p>
            </div>

  
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-400 uppercase tracking-wider text-xs">Office Time</h4>
              <p className="text-gray-900 font-medium">Monday - Sunday</p>
              <p className="text-gray-600">11am - 7pm</p>
            </div>

       
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-400 uppercase tracking-wider text-xs">Office Location</h4>
              <p className="text-gray-900 font-medium leading-relaxed">
                12273 Dream Avenue,<br />
                London, 123456<br />
                United Kingdom
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact