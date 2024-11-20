import React from 'react'

import miniImage2 from '../images/_Chart mini (1).png'
import miniImage3 from '../images/_Chart mini.png'

export default function Card() {
    const stats = [
        { title: "Today's Revenue", value: "$1,280", trend: "+15% last month" ,image:miniImage2 },
        { title: "Today's Orders", value: "14", trend: "+10% last month" ,image:miniImage3 },
        { title: "Avg. Order Value", value: "$91.42", trend: "+20% last month",image:miniImage2},
      ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    {stats.map((stat, index) => (
      <div
        key={index}
        className="bg-white p-4 shadow rounded-md flex flex-col justify-between"
      >
        <h2 className="text-sm font-semibold text-gray-600">{stat.title}</h2>
       <div className='flex gap-16'>

        <div className="mt-4">
          <p className="text-2xl font-bold">{stat.value}</p>
          <p className="text-sm text-green-500">{stat.trend}</p>
       </div>
       <div className='w-[12rem]'>
        <img src={stat.image} className='  '/>
       </div>
        </div>
      </div>
    ))}
  </div>
  )
}
