import { ArrowRight, ChevronDown, ShoppingCart } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div class="w-full bg-gray-100 border-b ml-[-10px] border-gray-200 py-2 text-center text-sm">
    Get weekly updates with our
    <span class="underline cursor-pointer"> Newsletter</span>
  </div>

 
  <nav class="flex items-center justify-between px-40 py-2 bg-white">

   
    <div class="text-2xl font-bold">
      Press.hub
    </div>

  
    <ul class="flex items-center gap-9 text-[15px] text-neutral-700 font-medium">
      <li class="flex items-center gap-1.5 cursor-pointer">
        Home
        <ChevronDown size={18} />
      </li>
      <li class="cursor-pointer">Articles</li>
      <li class="cursor-pointer">Catagories</li>
      <li class="cursor-pointer">About</li>
      <li class="cursor-pointer">Shop</li>
    </ul>

   
    <div class="flex items-center gap-10">

   
      <div class="flex items-center gap-2 text-[15px] font-medium cursor-pointer">
          <ShoppingCart size={20} /> Cart (0)
      </div>

      
      <button class="bg-black text-white px-4 py-3 rounded-xl text-[15px] font-semibold flex items-center gap-2 hover:bg-gray-900 transition">
        Contact
       <ArrowRight />
      </button>

    </div>
  </nav>
    </div>
  )
}

export default Navbar