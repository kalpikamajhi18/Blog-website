import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { FaDribbble, FaLinkedinIn } from 'react-icons/fa'
import { LuBadgeCent } from 'react-icons/lu'
import { MdOutlineFacebook } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='bg-[#f5f5f5]   px-40 py-10'>
     <div className='flex items-start justify-between '>
      <div className=' w-[30%] space-y-6'>
        <h1 className='text-3xl font-bold'>Press.hub</h1>
        <p className='text-gray-500 text-[15px] font-medium'>Where technology meets lifestyle and business insights. Our blog is dedicated to delivering the latest trends, informative articles, and expert opinions on a diverse range of topics.</p>
        <div className='flex items-center gap-6 text-gray-600'>
          <MdOutlineFacebook size={25}/>
          <AiFillInstagram size={25}/>
          <FaLinkedinIn size={25}/>
          <FaDribbble size={25}/>
          <LuBadgeCent size={25}/>
        </div>
      </div>
      <div className='w-[70%] flex items-start justify-end gap-40 '>
            <div className='flex flex-col items-start justify-start gap-5 text-gray-800   text-[15px]'>
                 <p className='font-medium text-black'>Categories</p>
                 <p>Lifestyle</p>
            <p>Business</p>
            <p>Technology</p>
            <p>Science</p>
            <p>Gaming</p>
            <p>Others</p>
            </div>
             <div className='flex flex-col items-start justify-start gap-5 text-gray-800  text-[15px]'>
                 <p className='font-medium text-black'>Navigation</p>
                 <p className='underline'>Home</p>
            <p>About us</p>
            <p>Articles</p>
            <p>Categories</p>
            <p>Subscribe</p>
            <p>Contact</p>
            </div>
            <div className='flex flex-col items-start justify-start gap-5 text-gray-800  text-[15px]'>
                 <p className='font-medium text-black'>Utility Pages</p>
               <p>Style Guide</p>
            <p>Licenses</p>
            <p>Changelog</p>
            <p>Password Protected</p>
            <p>404 Page</p>
            </div>
      </div>
     </div>
     <div className='border-t border-gray-300 p-3 flex items-center justify-start gap-90 mt-20'>
        <p className='text-gray-500 text-[15px] mt-5 font-medium'>
          Design by <span className="underline">Quix Studio</span>
        </p>
          <p className='text-gray-500 text-[15px] mt-5 font-medium'>
          Copyright @ Press.hub. All Rights Reserved
        </p>
     </div>
     </div>
      )
}

      export default Footer