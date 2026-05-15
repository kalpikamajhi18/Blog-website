import { ArrowRight, Globe } from "lucide-react";
import React from "react";
import Subscribe from "../Components/Subscribe";
import { FaInstagram } from "react-icons/fa6";



const Homepage = () => {
  const categories = [
    {
      title: "Business",
      image:
        "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67bdf72c7e11f63eedd51c14_Frame%201321316757.webp",
    },
    {
      title: "Technology",
      image:
        "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67bdf73b184b9d78e08fa67c_Frame%201321316763.webp",
    },
    {
      title: "Automotive",
      image:
        "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67bdf746017ec217941ae76a_Frame%201321316764.webp",
    },
    {
      title: "Science",
      image:
        "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67bdf758eb3c433b67b6451a_Frame%201321316765.webp",
    },
    {
      title: "Work Life",
      image:
        "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67bdf76a22cb8522895a957e_Frame%201321316766.webp",
    },
    {
      title: "Social Issues",
      image:
        "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67bdf78367bd187147a18261_Frame%201321316767.webp",
    },
    {
      title: "Travel & Culture",
      image:
        "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67bdf78f3999ae9e22c1f9c9_Frame%201321316768.webp",
    },
    {
      title: "Entertainment",
      image:
        "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67bdf79e68035fbe5a70cf79_Frame%201321316769.webp",
    },
    {
      title: "Gaming",
      image:
        "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67bdf7aa33dfcef0775abf89_Frame%201321316770.webp",
    },
    {
      title: "Lifestyle",
      image:
        "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67bdf7b25f6695c8ff177ee7_Frame%201321316771.webp",
    },
    {
      title: "Hobbies",
      image:
        "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67bdf7b9dbd4d989fea512d3_Frame%201321316772.webp",
    },
    {
      title: "Others",
      image:
        "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67bdf7c3265b28959469ce52_Frame%201321316773.webp",
    },
  ];
  return (

    <section className="flex flex-col items-center justify-center gap-1  min-h-screen w-full bg-white px-40 py-16 lg:px-28">
      
      <div className="flex justify-center">
        <h1 className="max-w-[500px] text-[6em] text-center font-[one] font-bold leading-[1] tracking-tight text-black md:text-7xl">
          Explore world <br /> latest news
        </h1>
      </div>
      <div className="mt-20 px-10 flex gap-8">

      
        <div className="w-[32%]">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8bcfdb61db3ecb87199dd_Frame%201321316746.webp"
              alt="news"
              className="h-[320px] w-full object-cover hover:scale-105 duration-500"
            />

            <span className="absolute left-5 top-5 rounded-lg bg-white px-4 py-2 text-[12px] font-medium">
              Trading
            </span>

            <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-lg bg-black/40 px-3 py-2 text-white backdrop-blur-sm">
              <Globe size={16} />
              Sponsored
            </div>
          </div>

          <div className="mt-5">
            <p className="text-sm text-gray-500 font-medium">
              February 25, 2025 • 10 min read
            </p>

            <h2 className="mt-3 text-xl font-semibold leading-snug">
              Top 10 Rendering Software for Stunning Visuals
            </h2>

            <button className="mt-6 flex items-center gap-2 rounded-[9px] border border-gray-300 bg-white px-3 py-2 text-md font-medium hover:bg-black hover:text-white duration-300">
              Read more
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        
        <div className="w-[50%]">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d1c2038fbed798adc5f4_Frame%201321316744-1-p-800.webp"
              alt="news"
              className="h-[320px] w-full object-cover hover:scale-105 duration-500"
            />

            <span className="absolute left-5 top-5 rounded-lg bg-white px-4 py-2 text-[12px] font-medium">
              Trading
            </span>

            <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-lg bg-black/40 px-3 py-2 text-white backdrop-blur-sm">
              <Globe size={16} />
              Sponsored
            </div>
          </div>

          <div className="mt-5">
            <p className="text-sm text-gray-500 font-medium">
              February 25, 2025 • 10 min read
            </p>

            <h2 className="mt-3 text-xl font-semibold leading-snug">
              Why you should outsource design: overcoming limitations to
              maximize business success
            </h2>

            <button className="mt-6 flex items-center gap-2 rounded-[9px] border border-gray-300 bg-white px-3 py-2 text-md font-medium hover:bg-black hover:text-white duration-300">
              Read more
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

     
        <div className="w-[28%]">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8bf35f5896f536c9adb13_Frame%201321316746-1.webp"
              alt="news"
              className="h-[320px] w-full object-cover hover:scale-105 duration-500"
            />

            <span className="absolute left-5 top-5 rounded-lg bg-white px-4 py-2 text-[12px] font-medium">
              Trading
            </span>

            <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-lg bg-black/40 px-3 py-2 text-white backdrop-blur-sm">
              <Globe size={16} />
              Sponsored
            </div>
          </div>

          <div className="mt-5">
            <p className="text-sm text-gray-500 font-medium">
              February 25, 2025 • 10 min read
            </p>

            <h2 className="mt-3 text-xl font-semibold leading-snug">
              Budget Travel: Exploring the World Affordably
            </h2>

            <button className="mt-6 flex items-center gap-2 rounded-[9px] border border-gray-300 bg-white px-3 py-2 text-md font-medium hover:bg-black hover:text-white duration-300">
              Read more
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

      </div>


      <h1 className="text-center mt-30 text-6xl text-black font-medium font-[one] tracking-tight">
        Blog categories
      </h1>

    
      <div className="mt-12 grid grid-cols-6 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="group relative  flex h-[190px] w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-[#f3f0f0c3]"
          >

          
            <img
              src={item.image}
              alt={item.title}
              className="absolute  h-full w-full object-cover scale-120 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
            />

          
            <div className="absolute inset-0 bg-black/30 opacity-0 transition duration-500 group-hover:opacity-100"></div>

           
            <h2 className="relative z-10 text-[15px] font-medium text-black transition duration-500 group-hover:text-white">
              {item.title}
            </h2>
          </div>
        ))}
      </div>



      <div className="mt-30 flex items-center justify-between w-full px-10">
        <h1 className="text-[5em]  text-center font-[one] font-bold leading-[1] tracking-tight text-black md:text-6xl">Fresh off the press</h1>
        <button className="flex items-center gap-2 rounded-[9px] border border-gray-300 bg-white px-3 py-2 text-md font-medium hover:bg-black hover:text-white duration-300" >View All <ArrowRight size={15} /></button>
      </div>
      <div className="mt-10 px-10 flex gap-8">


     
        <div className="w-[50%]">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67bd733182cb179aa260c21a_Frame%201321316744-4-p-800.webp"
              alt="news"
              className="h-[320px] w-full object-cover hover:scale-105 duration-500"
            />

            <span className="absolute left-5 top-5 rounded-lg bg-white px-4 py-2 text-[12px] font-medium">
              Science
            </span>


          </div>

          <div className="mt-5">
            <p className="text-sm text-gray-500 font-medium">
              February 25, 2025 • 10 min read
            </p>

            <h2 className="mt-3 text-xl font-semibold leading-snug">
              Why you should outsource design: overcoming limitations to
              maximize business success
            </h2>

            <button className="mt-6 flex items-center gap-2 rounded-[9px] border border-gray-300 bg-white px-3 py-2 text-md font-medium hover:bg-black hover:text-white duration-300">
              Read more
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="w-[32%]">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67bd7348e845026c36b279ee_Frame%201321316746-10.webp"
              alt="news"
              className="h-[320px] w-full object-cover hover:scale-105 duration-500"
            />

            <span className="absolute left-5 top-5 rounded-lg bg-white px-4 py-2 text-[12px] font-medium">
              Socila Issues
            </span>


          </div>

          <div className="mt-5">
            <p className="text-sm text-gray-500 font-medium">
              February 26, 2025 • 10 min read
            </p>

            <h2 className="mt-3 text-xl font-semibold leading-snug">
              Top 10 Rendering Software for Stunning Visuals
            </h2>

            <button className="mt-6 flex items-center gap-2 rounded-[9px] border border-gray-300 bg-white px-3 py-2 text-md font-medium hover:bg-black hover:text-white duration-300">
              Read more
              <ArrowRight size={20} />
            </button>
          </div>
        </div>


      
        <div className="w-[28%]">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67bd73553191687ccf533cdc_Frame%201321316746-11.webp"
              alt="news"
              className="h-[320px] w-full object-cover hover:scale-105 duration-500"
            />

            <span className="absolute left-5 top-5 rounded-lg bg-white px-4 py-2 text-[12px] font-medium">
              Science
            </span>


          </div>

          <div className="mt-5">
            <p className="text-sm text-gray-500 font-medium">
              February 26, 2025 • 10 min read
            </p>

            <h2 className="mt-3 text-xl font-semibold leading-snug">
              Budget Travel: Exploring the World Affordably
            </h2>

            <button className="mt-6 flex items-center gap-2 rounded-[9px] border border-gray-300 bg-white px-3 py-2 text-md font-medium hover:bg-black hover:text-white duration-300">
              Read more
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

      </div>

      <div className="mt-10 px-10 flex gap-8">

       
        <div className="w-[32%]">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d1e04d4eafa84a049ece_Frame%201321316746-2.webp"
              alt="news"
              className="h-[320px] w-full object-cover hover:scale-105 duration-500"
            />

            <span className="absolute left-5 top-5 rounded-lg bg-white px-4 py-2 text-[12px] font-medium">
              Automotive
            </span>


          </div>

          <div className="mt-5">
            <p className="text-sm text-gray-500 font-medium">
              February 26, 2025 • 10 min read
            </p>

            <h2 className="mt-3 text-xl font-semibold leading-snug">
              Yoga for Beginners: For Strength and Flexibility
            </h2>

            <button className="mt-6 flex items-center gap-2 rounded-[9px] border border-gray-300 bg-white px-3 py-2 text-md font-medium hover:bg-black hover:text-white duration-300">
              Read more
              <ArrowRight size={20} />
            </button>
          </div>
        </div>



        
        <div className="w-[28%]">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d1d5dc7222d18e32ac77_Frame%201321316746-1.webp"
              alt="news"
              className="h-[320px] w-full object-cover hover:scale-105 duration-500"
            />

            <span className="absolute left-5 top-5 rounded-lg bg-white px-4 py-2 text-[12px] font-medium">
              Automotive
            </span>


          </div>

          <div className="mt-5">
            <p className="text-sm text-gray-500 font-medium">
              February 26, 2025 • 10 min read
            </p>

            <h2 className="mt-3 text-xl font-semibold leading-snug">
              Improving Sleep Hygiene for Better Rest
            </h2>

            <button className="mt-6 flex items-center gap-2 rounded-[9px] border border-gray-300 bg-white px-3 py-2 text-md font-medium hover:bg-black hover:text-white duration-300">
              Read more
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
       
        <div className="w-[50%]">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d1c2038fbed798adc5f4_Frame%201321316744-1-p-800.webp"
              alt="news"
              className="h-[320px] w-full object-cover hover:scale-105 duration-500"
            />

            <span className="absolute left-5 top-5 rounded-lg bg-white px-4 py-2 text-[12px] font-medium">
              Technology
            </span>


          </div>

          <div className="mt-5">
            <p className="text-sm text-gray-500 font-medium">
              February 25, 2025 • 10 min read
            </p>

            <h2 className="mt-3 text-xl font-semibold leading-snug">
              User testing for improving product development: why and how to conduct it
            </h2>

            <button className="mt-6 flex items-center gap-2 rounded-[9px] border border-gray-300 bg-white px-3 py-2 text-md font-medium hover:bg-black hover:text-white duration-300">
              Read more
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

      </div>

      <Subscribe />



      <div className="mt-30 flex items-center justify-between w-full px-10">
        <h1 className="text-[5em]  text-center font-[one] font-bold leading-[1] tracking-tight text-black md:text-6xl">Featured Articles</h1>
        <button className="flex items-center gap-2 rounded-[9px] border border-gray-300 bg-white px-3 py-2 text-md font-medium hover:bg-black hover:text-white duration-300" >View All <ArrowRight size={15} /></button>
      </div>
      <div className="mt-10 px-10 flex gap-8">


        
        <div className="w-[50%]">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67bdf746017ec217941ae76a_Frame%201321316764.webp"
              alt="news"
              className="h-[320px] w-full object-cover hover:scale-105 duration-500"
            />

            <span className="absolute left-5 top-5 rounded-lg bg-white px-4 py-2 text-[12px] font-medium">
              Work Life
            </span>


          </div>

          <div className="mt-5">
            <p className="text-sm text-gray-500 font-medium">
              February 25, 2025 • 10 min read
            </p>

            <h2 className="mt-3 text-xl font-semibold leading-snug">
              Why you should outsource design: overcoming limitations to maximize business success
            </h2>

            <button className="mt-6 flex items-center gap-2 rounded-[9px] border border-gray-300 bg-white px-3 py-2 text-md font-medium hover:bg-black hover:text-white duration-300">
              Read more
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
       
        <div className="w-[32%]">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d23d2ba680ce42ec9dfa_Frame%201321316746-3.webp"
              alt="news"
              className="h-[320px] w-full object-cover hover:scale-105 duration-500"
            />

            <span className="absolute left-5 top-5 rounded-lg bg-white px-4 py-2 text-[12px] font-medium">
              Automotive
            </span>


          </div>

          <div className="mt-5">
            <p className="text-sm text-gray-500 font-medium">
              February 26, 2025 • 10 min read
            </p>

            <h2 className="mt-3 text-xl font-semibold leading-snug">
              Top 10 Rendering Software for Stunning Visuals
            </h2>

            <button className="mt-6 flex items-center gap-2 rounded-[9px] border border-gray-300 bg-white px-3 py-2 text-md font-medium hover:bg-black hover:text-white duration-300">
              Read more
              <ArrowRight size={20} />
            </button>
          </div>
        </div>


        
        <div className="w-[28%]">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d25b6f1f6a376cf94e1d_Frame%201321316746-8.webp"
              alt="news"
              className="h-[320px] w-full object-cover hover:scale-105 duration-500"
            />

            <span className="absolute left-5 top-5 rounded-lg bg-white px-4 py-2 text-[12px] font-medium">
              Science
            </span>


          </div>

          <div className="mt-5">
            <p className="text-sm text-gray-500 font-medium">
              February 26, 2025 • 10 min read
            </p>

            <h2 className="mt-3 text-xl font-semibold leading-snug">
              Budget Travel: Exploring the World Affordably
            </h2>

            <button className="mt-6 flex items-center gap-2 rounded-[9px] border border-gray-300 bg-white px-3 py-2 text-md font-medium hover:bg-black hover:text-white duration-300">
              Read more
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

      </div>

      <div className="mt-10 px-10 flex gap-8">

        
        <div className="w-[32%]">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d29ae2c71151cda0c43f_Frame%201321316746-9.webp"
              alt="news"
              className="h-[320px] w-full object-cover hover:scale-105 duration-500"
            />

            <span className="absolute left-5 top-5 rounded-lg bg-white px-4 py-2 text-[12px] font-medium">
              Business
            </span>


          </div>

          <div className="mt-5">
            <p className="text-sm text-gray-500 font-medium">
              February 26, 2025 • 10 min read
            </p>

            <h2 className="mt-3 text-xl font-semibold leading-snug">
              Yoga for Beginners: For Strength and Flexibility
            </h2>

            <button className="mt-6 flex items-center gap-2 rounded-[9px] border border-gray-300 bg-white px-3 py-2 text-md font-medium hover:bg-black hover:text-white duration-300">
              Read more
              <ArrowRight size={20} />
            </button>
          </div>
        </div>



       
        <div className="w-[28%]">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d2c0e04b4949973e673a_Frame%201321316746.webp"
              alt="news"
              className="h-[320px] w-full object-cover hover:scale-105 duration-500"
            />

            <span className="absolute left-5 top-5 rounded-lg bg-white px-4 py-2 text-[12px] font-medium">
              Work Life
            </span>


          </div>

          <div className="mt-5">
            <p className="text-sm text-gray-500 font-medium">
              February 26, 2025 • 10 min read
            </p>

            <h2 className="mt-3 text-xl font-semibold leading-snug">
              Improving Sleep Hygiene for Better Rest
            </h2>

            <button className="mt-6 flex items-center gap-2 rounded-[9px] border border-gray-300 bg-white px-3 py-2 text-md font-medium hover:bg-black hover:text-white duration-300">
              Read more
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
       
        <div className="w-[50%]">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d32709fd764793daa564_Frame%201321316744-p-800.webp"
              alt="news"
              className="h-[320px] w-full object-cover hover:scale-105 duration-500"
            />

            <span className="absolute left-5 top-5 rounded-lg bg-white px-4 py-2 text-[12px] font-medium">
              Automotive
            </span>


          </div>

          <div className="mt-5">
            <p className="text-sm text-gray-500 font-medium">
              February 25, 2025 • 10 min read
            </p>

            <h2 className="mt-3 text-xl font-semibold leading-snug">
              User testing for improving product development: why and how to conduct it
            </h2>

            <button className="mt-6 flex items-center gap-2 rounded-[9px] border border-gray-300 bg-white px-3 py-2 text-md font-medium hover:bg-black hover:text-white duration-300">
              Read more
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

      </div>




      <div className="mt-30 flex items-center justify-between w-full px-10">
        <h1 className="text-[5em]  text-center font-[one] font-bold leading-[1] tracking-tight text-black md:text-6xl">Popular Articles</h1>
        <button className="flex items-center gap-2 rounded-[9px] border border-gray-300 bg-white px-3 py-2 text-md font-medium hover:bg-black hover:text-white duration-300" >View All <ArrowRight size={15} /></button>
      </div>
      <div className="mt-10 px-10 flex gap-8">


       
        <div className="w-[50%]">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d494f134467c14836888_Frame%201321316744-5-p-800.webp"
              alt="news"
              className="h-[320px] w-full object-cover hover:scale-105 duration-500"
            />

            <span className="absolute left-5 top-5 rounded-lg bg-white px-4 py-2 text-[12px] font-medium">
              Business
            </span>


          </div>

          <div className="mt-5">
            <p className="text-sm text-gray-500 font-medium">
              February 25, 2025 • 10 min read
            </p>

            <h2 className="mt-3 text-xl font-semibold leading-snug">
              Why you should outsource design: overcoming limitations to maximize business success
            </h2>

            <button className="mt-6 flex items-center gap-2 rounded-[9px] border border-gray-300 bg-white px-3 py-2 text-md font-medium hover:bg-black hover:text-white duration-300">
              Read more
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="w-[32%]">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8c06cf5896f536c9c4446_Frame%201321316746-4.webp"
              alt="news"
              className="h-[320px] w-full object-cover hover:scale-105 duration-500"
            />

            <span className="absolute left-5 top-5 rounded-lg bg-white px-4 py-2 text-[12px] font-medium">
              Social Issues
            </span>


          </div>

          <div className="mt-5">
            <p className="text-sm text-gray-500 font-medium">
              February 26, 2025 • 10 min read
            </p>

            <h2 className="mt-3 text-xl font-semibold leading-snug">
              Top 10 Rendering Software for Stunning Visuals
            </h2>

            <button className="mt-6 flex items-center gap-2 rounded-[9px] border border-gray-300 bg-white px-3 py-2 text-md font-medium hover:bg-black hover:text-white duration-300">
              Read more
              <ArrowRight size={20} />
            </button>
          </div>
        </div>


       
        <div className="w-[28%]">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d53f91ba41089450f048_Frame%201321316746-5.webp"
              alt="news"
              className="h-[320px] w-full object-cover hover:scale-105 duration-500"
            />

            <span className="absolute left-5 top-5 rounded-lg bg-white px-4 py-2 text-[12px] font-medium">
              Science
            </span>


          </div>

          <div className="mt-5">
            <p className="text-sm text-gray-500 font-medium">
              February 26, 2025 • 10 min read
            </p>

            <h2 className="mt-3 text-xl font-semibold leading-snug">
              Budget Travel: Exploring the World Affordably
            </h2>

            <button className="mt-6 flex items-center gap-2 rounded-[9px] border border-gray-300 bg-white px-3 py-2 text-md font-medium hover:bg-black hover:text-white duration-300">
              Read more
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

      </div>

      <div className="mt-10 px-10 flex gap-8">

       
        <div className="w-[32%]">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d56837d20c3cf482d00c_Frame%201321316746-6.webp"
              alt="news"
              className="h-[320px] w-full object-cover hover:scale-105 duration-500"
            />

            <span className="absolute left-5 top-5 rounded-lg bg-white px-4 py-2 text-[12px] font-medium">
              Work Life
            </span>


          </div>

          <div className="mt-5">
            <p className="text-sm text-gray-500 font-medium">
              February 26, 2025 • 10 min read
            </p>

            <h2 className="mt-3 text-xl font-semibold leading-snug">
              Yoga for Beginners: For Strength and Flexibility
            </h2>

            <button className="mt-6 flex items-center gap-2 rounded-[9px] border border-gray-300 bg-white px-3 py-2 text-md font-medium hover:bg-black hover:text-white duration-300">
              Read more
              <ArrowRight size={20} />
            </button>
          </div>
        </div>



       
        <div className="w-[28%]">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d57da89eda8d2dcec4a5_Frame%201321316746-7.webp"
              alt="news"
              className="h-[320px] w-full object-cover hover:scale-105 duration-500"
            />

            <span className="absolute left-5 top-5 rounded-lg bg-white px-4 py-2 text-[12px] font-medium">
              Technology
            </span>


          </div>

          <div className="mt-5">
            <p className="text-sm text-gray-500 font-medium">
              February 26, 2025 • 10 min read
            </p>

            <h2 className="mt-3 text-xl font-semibold leading-snug">
              Improving Sleep Hygiene for Better Rest
            </h2>

            <button className="mt-6 flex items-center gap-2 rounded-[9px] border border-gray-300 bg-white px-3 py-2 text-md font-medium hover:bg-black hover:text-white duration-300">
              Read more
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
       
        <div className="w-[50%]">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d596ebcbf06cea204a5f_Frame%201321316744-3-p-800.webp"
              alt="news"
              className="h-[320px] w-full object-cover hover:scale-105 duration-500"
            />

            <span className="absolute left-5 top-5 rounded-lg bg-white px-4 py-2 text-[12px] font-medium">
              Social Issues
            </span>


          </div>

          <div className="mt-5">
            <p className="text-sm text-gray-500 font-medium">
              February 25, 2025 • 10 min read
            </p>

            <h2 className="mt-3 text-xl font-semibold leading-snug">
              User testing for improving product development: why and how to conduct it
            </h2>

            <button className="mt-6 flex items-center gap-2 rounded-[9px] border border-gray-300 bg-white px-3 py-2 text-md font-medium hover:bg-black hover:text-white duration-300">
              Read more
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

      </div>




      <div className="flex px-10 mt-35 w-full items-center justify-start gap-26">
        <img className="h-[45%] w-[45%] object-cover rounded-2xl" src="https://cdn.prod.website-files.com/67b77fdb1c82093b528cb1ac/67bd7e80afd0640ee566f415_0061ae9ba2e3a0093af155f7a643fb63_image%2056-p-800.webp" alt="" />
        <div className="flex flex-col items-start justify-center gap-5 w-[37%] ">
          <h1 className="text-5xl font-medium font-[one] leading-[1] tracking-tight text-[#2f2f2f]">Get to know about us and why we write for you?</h1>
          <p className="text-[17px] font-medium text-neutral-600">In today's fast-paced world, it can be easy to get caught up in the hustle and bustle of daily life. Our lifestyle section is dedicated to helping you slow down and find balance amidst the chaos.
          </p>
          <button className="bg-black text-white hover:bg-neutral-700 px-4 py-3 rounded-xl flex gap-2 font-medium transition duration-400">Read More <ArrowRight size={22} /></button>
        </div>
      </div>


      <Subscribe />

      <div className="mt-4 grid grid-cols-7 gap-6">
        {[
          "https://cdn.prod.website-files.com/67b77fdb1c82093b528cb1ac/67bd85097cacd32a8ea14bbb_Frame%201321316746.webp",
          "https://cdn.prod.website-files.com/67b77fdb1c82093b528cb1ac/67bd8910453581c8c8feda84_Frame%201321316780.webp",
          "https://cdn.prod.website-files.com/67b77fdb1c82093b528cb1ac/67bd89101aab8d2f4411e094_Frame%201321316781.webp",
          "https://cdn.prod.website-files.com/67b77fdb1c82093b528cb1ac/67bd89114867c89c4ba5c927_Frame%201321316782.webp",
          "https://cdn.prod.website-files.com/67b77fdb1c82093b528cb1ac/67bd891059856c6d34ce1075_Frame%201321316783.webp",
          "https://cdn.prod.website-files.com/67b77fdb1c82093b528cb1ac/67bd891020224e4439ed7b00_Frame%201321316784.webp",
          "https://cdn.prod.website-files.com/67b77fdb1c82093b528cb1ac/67bd891075c47ce03cc3d764_Frame%201321316785.webp"

        ].map((item, index) => (
          <div
            key={index}
            className="group relative  flex h-[160px] w-[153px] cursor-pointer items-center justify-center overflow-hidden rounded-xl  "
          >

            
            <img
              src={item}
              alt=""
              className="absolute  h-full w-full object-cover "
            />

          
            <div className="absolute inset-0 bg-black/30 opacity-0 transition duration-500 group-hover:opacity-100"></div>

          
            <h2 className="relative z-10 opacity-0  text-white transition duration-500 group-hover:opacity-100">
              <FaInstagram size={37} />
            </h2>
          </div>
        ))}
      </div>


    </section>



  )
}

export default Homepage