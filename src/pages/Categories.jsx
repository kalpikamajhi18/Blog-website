import React from "react";



const Categories = () => {
  const categoryData = [
    {
      title: "Business",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67bdf72c7e11f63eedd51c14_Frame%201321316757.webp",
    },
    {
      title: "Technology",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67bdf73b184b9d78e08fa67c_Frame%201321316763.webp",
    },
    {
      title: "Automotive",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67bdf746017ec217941ae76a_Frame%201321316764.webp",
    },
    {
      title: "Science",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67bdf758eb3c433b67b6451a_Frame%201321316765.webp",
    },
    {
      title: "Work Life",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67bdf76a22cb8522895a957e_Frame%201321316766.webp",
    },
    {
      title: "Social Issues",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67bdf78367bd187147a18261_Frame%201321316767.webp",
    },
    {
      title: "Travel & Culture",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67bdf78f3999ae9e22c1f9c9_Frame%201321316768.webp",
    },
    {
      title: "Entertainment",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67bdf79e68035fbe5a70cf79_Frame%201321316769.webp",
    },
    {
      title: "Gaming",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67bdf7aa33dfcef0775abf89_Frame%201321316770.webp",
    },
    {
      title: "Lifestyle",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67bdf7b25f6695c8ff177ee7_Frame%201321316771.webp",
    },
    {
      title: "Hobbies",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67bdf7b9dbd4d989fea512d3_Frame%201321316772.webp",
    },
    {
      title: "Others",
      img: "https://cdn.prod.website-files.com/67b8bc4997c0fc01bf688eff/67bdf7c3265b28959469ce52_Frame%201321316773.webp",
    },
  ];

  return (
    <div className="bg-white min-h-screen py-10 px-40 md:px-10">
      <div className="max-w-7xl mx-auto mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-center text-black tracking-tight">
          All categories
        </h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {categoryData.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden aspect-square rounded-3xl bg-[#F5F5F5] cursor-pointer transition-all duration-500 ease-in-out"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100"
              style={{ backgroundImage: `url(${item.img})` }}
            />

            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute inset-0 flex items-center justify-center p-4">
              <span className="text-[15px] font-semibold text-gray-800 transition-all duration-500 group-hover:text-white group-hover:scale-110">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
     
 
      
    </div>
  );
};

export default Categories;
