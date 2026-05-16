import React from 'react'


const Automotive = () => {
    const blogPosts = [
    {
      id: 1,
      category: "Automotive",
      date: "February 26, 2026",
      readTime: "10 min read",
      title: "Improving Sleep Hygiene for Better Rest",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d1d5dc7222d18e32ac77_Frame%201321316746-1.webp"
    },
    {
      id: 2,
      category: "Automotive",
      date: "February 27, 2026",
      readTime: "10 min read",
      title: "Why you should outsource design: overcoming limitations to maximize business success",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d1c2038fbed798adc5f4_Frame%201321316744-1-p-500.webp"
    },
    {
      id: 3,
      category: "Automotive",
      date: "February 26, 2026",
      readTime: "10 min read",
      title: "Yoga for Beginners: For Strength and Flexibility",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d1e04d4eafa84a049ece_Frame%201321316746-2.webp"
    },
    {
      id: 4,
      category: "Automotive",
      date: "February 26, 2026",
      readTime: "10 min read",
      title: "Top 10 Rendering Software for Stunning Visuals",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d23d2ba680ce42ec9dfa_Frame%201321316746-3.webp"
    },
    {
      id: 5,
      category: "Automotive",
      date: "February 26, 2026",
      readTime: "10 min read",
      title: "User testing for improving product development: why and how to conduct it",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d32709fd764793daa564_Frame%201321316744-p-500.webp"
    },
    {
      id: 6,
      category: "Automotive",
      date: "February 26, 2026",
      readTime: "10 min read",
      title: "User testing for improving product development: why and how to conduct it",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d53f91ba41089450f048_Frame%201321316746-5.webp"
    },
    {
      id: 7,
      category: "Automotive",
      date: "February 26, 2026",
      readTime: "10 min read",
      title: "User testing for improving product development: why and how to conduct it",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d57da89eda8d2dcec4a5_Frame%201321316746-7.webp"
    },
    {
      id: 8,
      category: "Automotive",
      date: "February 26, 2026",
      readTime: "10 min read",
      title: "User testing for improving product development: why and how to conduct it",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67b8d29ae2c71151cda0c43f_Frame%201321316746-9.webp"
    }
  ];
  return (
    <div  className="bg-white min-h-screen py-10 px-40 md:px-10">
        <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900">
          Automotive
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

export default Automotive
