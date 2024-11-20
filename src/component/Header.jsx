import React from 'react'
import icon1 from '../images/search-lg.png'
import icon2 from '../images/Icon.png'
import icon3 from  '../images/download-cloud-02.png'

export default function Header() {
  return (
    <header className='bg-white shadow p-2  '> 

    <div className="flex p-4  justify-between   ">
    <h1 className="text-lg font-bold fonr-inter">Dashboard</h1>
    <div className="flex space-x-6 items-center">
        <img src={icon1} className='w-[2rem] h-6 items-center '/>
       
      <button  className="border p-2 rounded-md flex gap-3 justify-center items-center">  <img src={icon2} className='w-[1rem]' /> Customize </button>
      <button className="border p-2 rounded-md flex gap-3 justify-center items-center">  <img src={icon3} className='w-[1rem]' /> Export</button>
    </div>
  
  </div> 
  <div className='p-2  justify-between items-center'>
  <button className=" p-2 rounded-md">Market Analysis</button>
  <button className=" p-2 pt-2 rounded-md">Perfromance</button>
   
  </div>
    </header>
  )
}
