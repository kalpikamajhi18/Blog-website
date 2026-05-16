import React from "react";


const Busniss = () => {
  const blogPosts = [
    {
      id: 1,
      category: "Business",
      date: "February 26, 2026",
      readTime: "10 min read",
      title: "Improving Sleep Hygiene for Better Rest",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d2c0e04b4949973e673a_Frame%201321316746.webp",
    },
    {
      id: 2,
      category: "Business",
      date: "February 25, 2026",
      readTime: "10 min read",
      title:
        "Why you should outsource design: overcoming limitations to maximize business success",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d494f134467c14836888_Frame%201321316744-5-p-500.webp",
    },
    {
      id: 3,
      category: "Business",
      date: "February 28, 2026",
      readTime: "10 min read",
      title: "Yoga for Beginners: For Strength and Flexibility",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d29ae2c71151cda0c43f_Frame%201321316746-9.webp",
    },
    {
      id: 4,
      category: "Business",
      date: "February 26, 2026",
      readTime: "10 min read",
      title: "Improving Sleep Hygiene for Better Rest",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d1e04d4eafa84a049ece_Frame%201321316746-2.webp",
    },
    {
      id: 5,
      category: "Business",
      date: "February 26, 2026",
      readTime: "10 min read",
      title: "Improving Sleep Hygiene for Better Rest",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d1d5dc7222d18e32ac77_Frame%201321316746-1.webp",
    },
    {
      id: 6,
      category: "Business",
      date: "February 26, 2026",
      readTime: "10 min read",
      title: "Improving Sleep Hygiene for Better Rest",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d1c2038fbed798adc5f4_Frame%201321316744-1-p-500.webp",
    },
    {
      id: 7,
      category: "Business",
      date: "February 26, 2026",
      readTime: "10 min read",
      title: "Improving Sleep Hygiene for Better Rest",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8c06cf5896f536c9c4446_Frame%201321316746-4.webp",
    },
    {
      id: 8,
      category: "Business",
      date: "February 26, 2026",
      readTime: "10 min read",
      title: "Improving Sleep Hygiene for Better Rest",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67bd73553191687ccf533cdc_Frame%201321316746-11.webp",
    },
  ];
  return (
    <div className="bg-white min-h-screen py-10 px-40 md:px-10">
     
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
          Business
        </h1>
      </div>

    
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="group cursor-pointer flex flex-col h-full"
          >
          
            <div className="relative overflow-hidden aspect-square rounded-2xl bg-gray-100 mb-4">
         
              <span className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm text-[11px] font-semibold tracking-wider text-gray-800 px-3 py-1.5 rounded-md shadow-sm border border-gray-100">
                {post.category}
              </span>

             
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
              />
            </div>

         
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-2 font-medium">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

        
            <h3 className="text-lg md:text-xl font-bold text-gray-950 mb-4 leading-snug flex-1 line-clamp-3">
              {post.title}
            </h3>

            <div className="mt-auto pt-2">
              <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-sm font-semibold text-gray-900 bg-white transition-all duration-300 hover:bg-black hover:text-white group-hover:border-black">
                Read more
                <span className="text-base transform transition-transform duration-300 hover:translate-x-0.5">
                  →
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Busniss;
