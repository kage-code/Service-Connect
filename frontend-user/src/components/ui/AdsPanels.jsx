import React from "react";

export default function AdsPanel() {
  const ads = [
    {
      title: "Complete Residential Plumbing",
      desc: "",
      img: "/blackimg.png",
    },
       {
      title: "Complete Residential Plumbing",
      desc: "",
      img: "/blackimg.png",
    },
       {
      title: "Complete Residential Plumbing",
      desc: "",
      img: "/blackimg.png",
    },
  
    {
      title: "Special Offer – 10% Off Cleaning Services",
      desc: "Limited time discount for new customers.",
      img: "/blackimg.png",
    },
  ];

  return (
    <aside
      className="hidden lg:flex flex-col bg-gray-800 rounded-xlshadow-inner w-72 border-l border-gray-200 
      fixed right-0 top-[72px] h-[calc(100vh-72px)] overflow-y-auto p-4 space-y-4"
    >
      <h2 className="text-lg font-semibold text-white mb-2 mt-30">Ads</h2>

      {ads.map((ad, index) => (
        <div
          key={index}
          className="bg-gray-50 rounded-2xl pb-1 shadow hover:shadow-md transition"
        >
          <img
            src={ad.img}
            alt={ad.title}
            className="w-full h-32 object-cover rounded-t-2xl mb-2"
          />
          <h3 className="font-semibold text-gray-800 text-sm px-1 py-4 text-center">{ad.title}</h3>
          <p className="text-xs text-gray-600 px-1">{ad.desc}</p>
        </div>
      ))}
    </aside>
  );
}
