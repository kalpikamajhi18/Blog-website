import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { FaDribbble, FaLinkedinIn } from 'react-icons/fa'
import { LuBadgeCent } from 'react-icons/lu'
import { MdOutlineFacebook } from 'react-icons/md'

const Footer = () => {
  return (
    <div>
      <div className="bg-[#f5f5f5]   px-16 py-20">


        <div className="flex items-center justify-between grid grid-cols-1 md:grid-cols-4 gap-16">


          <div>
            <h1 className="text-3xl font-bold text-black mb-10">
              Press.hub
            </h1>

            <p className="text-gray-500 text-[15px] font-medium mb-12">
              Where technology meets lifestyle and business
              insights. Our blog is dedicated to delivering the
              latest trends, informative articles, and expert
              opinions on a diverse range of topics.
            </p>


            <div className="flex items-center gap-6 text-gray-500">
              <MdOutlineFacebook size={25} />
              <AiFillInstagram size={25} />
              <FaLinkedinIn size={25} />
              <FaDribbble size={25} />
              <LuBadgeCent size={25} />
            </div>
          </div>


          <div className='flex w-[70%]'>
            <div>
              <h2 className="text-[15px] font-medium mb-10">
                Categories
              </h2>

              <ul className="space-y-8 text-[15px] font-medium text-gray-700">
                <li>Lifestyle</li>
                <li>Business</li>
                <li>Technology</li>
                <li>Science</li>
                <li>Gaming</li>
                <li>Others</li>
              </ul>
            </div>


            <div>
              <h2 className="text-[15px] font-semibold mb-10">
                Navigation
              </h2>

              <ul className="space-y-8 text-[15px] font-medium text-gray-700">
                <li className="underline">Home</li>
                <li>About us</li>
                <li>Articles</li>
                <li>Categories</li>
                <li>Subscribe</li>
                <li>Contact</li>
              </ul>
            </div>


            <div>
              <h2 className="text-[15px] font-semibold mb-10">
                Utility Pages
              </h2>

              <ul className="space-y-8 text-[15px] font-medium text-gray-700">
                <li>Style Guide</li>
                <li>Licenses</li>
                <li>Changelog</li>
                <li>Password Protected</li>
                <li>404 Page</li>
              </ul>
            </div>
          </div>
        </div>


        <div className="border-t border-gray-300 mt-20 pt-10 flex flex-col md:flex-row items-center justify-between text-gray-500 text-xl">

          <p>
            Design by <span className="underline">Quix Studio</span>
          </p>

          <p className="mt-4 md:mt-0">
            Copyright @ Press.hub. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer