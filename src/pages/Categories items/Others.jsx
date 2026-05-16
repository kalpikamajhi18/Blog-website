import React from 'react'


const Others = () => {
    const blogPosts = [
    {
      id: 1,
      category: "Trading",
      date: "February 25, 2026",
      readTime: "10 min read",
      title: "Budget Travel: Exploring the World Affordably",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8c05e8d4120042f61fd83_Frame%201321316746-2.webp"
    },
    {
      id: 2,
      category: "Trading",
      date: "February 25, 2026",
      readTime: "10 min read",
      title: "Why you should outsource design: overcoming limitations to maximize business success",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d1c2038fbed798adc5f4_Frame%201321316744-1-p-500.webp"
    },
    {
      id: 3,
      category: "Trading",
      date: "February 25, 2026",
      readTime: "10 min read",
      title: "Budget Travel: Exploring the World Affordably",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8bf35f5896f536c9adb13_Frame%201321316746-1.webp"
    },
    {
      id: 4,
      category: "Trading",
      date: "February 25, 2026",
      readTime: "10 min read",
      title: "Budget Travel: Exploring the World Affordably",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8c0980b6110d4a9499766_Blog%20Card.webp"
    },
    {
      id: 5,
      category: "Trading",
      date: "February 26, 2026",
      readTime: "10 min read",
      title: "Top 10 Rendering Software for Stunning Visuals",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8bcfdb61db3ecb87199dd_Frame%201321316746.webp"
    },
    {
      id: 6,
      category: "Trading",
      date: "February 26, 2026",
      readTime: "10 min read",
      title: "Budget Travel: Exploring the World Affordably",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8c06cf5896f536c9c4446_Frame%201321316746-4.webp"
    }
  ];
  return (
    <div className="bg-white min-h-screen py-10 px-40 md:px-10">
  
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900">
          Others
        </h1>
      </div>

   
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        {blogPosts.map((post) => (
          <div key={post.id} className="group cursor-pointer flex flex-col h-full">
            
        
            <div className="relative overflow-hidden aspect-square rounded-3xl bg-[#F5F5F5] mb-5">
         
              <span className="absolute top-4 left-4 z-10 bg-white text-[11px] font-medium text-gray-800 px-3 py-1.5 rounded-lg shadow-sm">
                {post.category}
              </span>
              
           
              <img 
                src={post.img} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
              />
            </div>

          
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-2.5 font-medium">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

         
            <h3 className="text-lg font-bold text-gray-950 mb-4 leading-snug flex-1 line-clamp-3">
              {post.title}
            </h3>

         
            <div className="mt-auto">
              <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-sm font-semibold text-gray-900 bg-white transition-all duration-300 hover:bg-black hover:text-white hover:border-black">
                Read more 
                <span className="text-base transform transition-transform duration-300 hover:translate-x-0.5">→</span>
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default Others
