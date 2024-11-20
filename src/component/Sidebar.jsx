import React from 'react'
import { FaChartBar, FaCogs, FaUserCircle ,FaHome  , FaDatabase ,FaClock , FaToolbox} from "react-icons/fa";
import logo from '../images/Group 1000004376.png'

export default function Sidebar() {
  return (
    <aside className="bg-[#293056] text-white w-16 lg:w-16 flex flex-col ">

    <div className="flex justify-center p-4 pt-[7rem]">
    <img src={logo}/>
    </div>
    <nav className="flex-1 space-y-4 text-center lg:text-left">
        <div className='pt-4 justify-center items-center'>
      <a href="#" className="p-4 flex items-center space-x-2">
        <FaHome />
      
      </a>
      <a href="#" className="p-4 flex items-center space-x-2">
        <FaCogs />
       
      </a>
      <a href="#" className="p-4 flex items-center space-x-2">
        <FaDatabase />
       
      </a>
      <a href="#" className="p-4 flex items-center space-x-2">
        <FaClock/>
       
      </a>
        </div>
    <div className="p-4 pt-[8rem] flex justify-center">
      <FaToolbox size={24} />
    </div>
    <div className="  flex justify-center">
      <FaUserCircle size={24} />
    </div>
    </nav>
  </aside>
  )
}
