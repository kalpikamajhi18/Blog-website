import React from 'react'


const LifeStyle = () => {
    const blogPosts = [
    {
      id: 1,
      category: "Lifestyle",
      date: "February 26, 2026",
      readTime: "10 min read",
      title: "User testing for improving product development: why and how to conduct it",
      img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=600"
    },
    {
      id: 2,
      category: "Lifestyle",
      date: "February 26, 2026",
      readTime: "10 min read",
      title: "User testing for improving product development: why and how to conduct it",
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600"
    },
    {
      id: 3,
      category: "Lifestyle",
      date: "February 26, 2026",
      readTime: "10 min read",
      title: "User testing for improving product development: why and how to conduct it",
      img: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=600"
    },
    {
      id: 4,
      category: "Lifestyle",
      date: "February 26, 2026",
      readTime: "10 min read",
      title: "User testing for improving product development: why and how to conduct it",
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600"
    }
  ];
  return (
    <div className="bg-white min-h-screen py-10 px-40 md:px-10">
        <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900">
          Lifestyle
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
                className="w-full h-full object-cover transition-transform duration-500 ease-outhover:scale-105"
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
              <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-sm font-semibold text-gray-900 bg-white transition-all duration-300hover:bg-blackhover:text-whitehover:border-black">
                Read more 
                <span className="text-base transform transition-transform duration-300hover:translate-x-0.5">→</span>
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default LifeStyle
