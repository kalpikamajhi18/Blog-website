import { ArrowRight, ChevronDown, ShoppingCart } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="w-full bg-gray-100 border-b ml-[-10px] border-gray-200 py-2 text-center text-sm">
    Get weekly updates with our
    <span className="underline cursor-pointer"> Newsletter</span>
  </div>

 
  <nav className="flex items-center justify-between px-40 py-2 bg-white">

   
    <div className="text-2xl font-bold">
      Press.hub
    </div>

  
    <ul className="flex items-center gap-9 text-[15px] text-neutral-700 font-medium">
      <li className="flex items-center gap-1.5 cursor-pointer">
        Home
        <ChevronDown size={18} />
      </li>
      <li className="cursor-pointer">Articles</li>
      <li className="cursor-pointer">Catagories</li>
      <li className="cursor-pointer">About</li>
      <li className="cursor-pointer">Shop</li>
    </ul>

   
    <div className="flex items-center gap-10">

   
      <div className="flex items-center gap-2 text-[15px] font-medium cursor-pointer">
          <ShoppingCart size={20} /> Cart (0)
      </div>

      
      <button className="bg-black text-white px-4 py-3 rounded-xl text-[15px] font-semibold flex items-center gap-2 hover:bg-gray-900 transition">
        Contact
       <ArrowRight />
      </button>

    </div>
  </nav>
    </div>
  )
}

export default Navbar