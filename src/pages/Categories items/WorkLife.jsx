import React from 'react'


const WorkLife = () => {
    const blogPosts = [
    {
      id: 1,
      category: "Work Life",
      date: "February 26, 2026",
      readTime: "10 min read",
      title: "Yoga for Beginners: For Strength and Flexibility",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d56837d20c3cf482d00c_Frame%201321316746-6.webp"
    },
    {
      id: 2,
      category: "Work Life",
      date: "February 25, 2026",
      readTime: "10 min read",
      title: "Why you should outsource design: overcoming limitations to maximize business success",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d2201efaeb6566ed206e_Frame%201321316744-2-p-500.webp"
    },
    {
      id: 3,
      category: "Work Life",
      date: "February 25, 2026",
      readTime: "10 min read",
      title: "Why you should outsource design: overcoming limitations to maximize business success",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d494f134467c14836888_Frame%201321316744-5-p-500.webp"
    },
    {
      id: 4,
      category: "Work Life",
      date: "February 28, 2026",
      readTime: "10 min read",
      title: "Top 10 Rendering Software for Stunning Visuals",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8c06cf5896f536c9c4446_Frame%201321316746-4.webp"
    },
    {
      id: 5,
      category: "Work Life",
      date: "February 26, 2026",
      readTime: "10 min read",
      title: "Budget Travel: Exploring the World Affordably",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d53f91ba41089450f048_Frame%201321316746-5.webp"
    },
    {
      id: 6,
      category: "Work Life",
      date: "February 26, 2026",
      readTime: "10 min read",
      title: "Improving Sleep Hygiene for Better Rest",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d2c0e04b4949973e673a_Frame%201321316746.webp"
    },
    {
      id: 7,
      category: "Work Life",
      date: "February 26, 2026",
      readTime: "10 min read",
      title: "Budget Travel: Exploring the World Affordably",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d1e04d4eafa84a049ece_Frame%201321316746-2.webp"
    },
    {
      id: 8,
      category: "Work Life",
      date: "February 26, 2026",
      readTime: "10 min read",
      title: "Budget Travel: Exploring the World Affordably",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d1e04d4eafa84a049ece_Frame%201321316746-2.webp"
    }
  ];
  return (
    <div className="bg-white min-h-screen py-10 px-40 md:px-10">
        <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900">
          Work Life
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

export default WorkLife
