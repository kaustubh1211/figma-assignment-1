import React from "react";
import image1 from "../images/Group 1000004391.jpg";
import ChartData from "../images/_Chart data.png";
import Xasis from "../images/_X-axis.png";
import piChart from "../images/_Pie chart (1).jpg";
import linebar from "../images/Line and bar chart.png";
import trendingUp from '../images/trending_up.png'

export default function Dashboard() {
  return (
    <div>
      <div className="p-4 grid gap-4 grid-cols-1 lg:grid-cols-2">
        {/* Current Market Trend */}
        <div className="bg-white p-4 shadow rounded-md">
          <h2 className="text-lg font-semibold mb-4"></h2>
          <div className="h-48 ">
            <img src={image1} />
          </div>
        </div>

        {/* Industry Opportunities */}
        <div className="bg-white p-4 shadow rounded-md">
          <h2 className="text-lg font-semibold mb-4">Current Market Trend </h2>
          <div className="flex gap-3 p-2 text-sm border 1px rounded-sm items-center justify-center">
            <a href="#">Catagory</a>
            <a href="#">Product</a>
            <a href="#">Cross Selling</a>
            <a href="#">Geography</a>
          </div>
          <div className="h-48 ">
            <p className="  text-sm  text-red-900 pl-[27rem]">
              Your position in market
            </p>
            <div>
              <img src={ChartData} className="w-[15rem]" alt="" />
            </div>
          </div>
          <img src={Xasis} />
        </div>

        {/* Trending in Industry */}
        <div className="bg-white p-4 shadow rounded-md">
          <h2 className="text-lg font-semibold mb-4">Trending in Industry</h2>

          <div className="h-60 flex items-center ">
            <div>
              <img src={piChart} className="w-[15rem] pt-10" />
            </div>
            <div className="flex-col pl-[10rem] justify-center gap-5 ">
              <div className="p-4">
                <h1 className="   text-2xl">32%</h1>
                <ul> patten tiels</ul>
              </div>
              <div className=" p-4">
                <h1 className="  text-2xl">49%</h1>
                <ul>Wooden floor </ul>
              </div>
              <div className=" p-4">
                <h1 className="  text-2xl">27%</h1>
                <ul>Stone Textured tiles</ul>
              </div>
            </div>
          </div>
          <div className="pt-8">
            
          <div
            role="alert"
            class="mt-3  relative  w-full p-3  text-sm font-semibold text-[#1B5A84] bg-[#EFF6FA] rounded-md"
          >
         <img src={trendingUp} alt=""  className="w-[2rem]"/>
            <p class="ml-4 p-3">
            Wooden floor is in trending , set up campaign for wooden tiles to reach these users
            </p>

          
                </div>
          </div>
        </div>

        {/* Visibility */}
        <div className="bg-white p-4 shadow rounded-md">
          <h2 className="text-lg font-semibold mb-4">Visibility</h2>

          <div className="h-48 ">
            <div className="flex  pl-12 items-center gap-10 p-4">
              <div className="">
                <p className="text-sm font-semibold text-gray-600">impresion</p>
                <p className="text-2xl font-bold">4,221</p>
              </div>
              <div className="">
                <p className="text-sm font-semibold text-gray-600">Views</p>
                <p className="text-2xl font-bold">3,222</p>
              </div>
              <div className="">
                <p className="text-sm font-semibold text-gray-600">Clicks</p>
                <p className="text-2xl font-bold">822</p>
              </div>
            </div>
            <div>
              <img src={linebar} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
