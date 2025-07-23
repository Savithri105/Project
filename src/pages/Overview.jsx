import React from 'react'
import taskbanner from '../assets/tasks-banner.png'
import {Link} from 'react-router-dom'
import { useState } from "react";
import smartPlanner from "../assets/first.avif";
import manageAnywhere from "../assets/second.avif";
import simplifiedSharing from "../assets/third.avif"; 
import taskManagement from "../assets/fourth.avif"; 
import boss from '../assets/ceo.jpeg'
const Overview = () => {
     const [activeTab, setActiveTab] = useState("default");

  const imageMap = {
    smart: smartPlanner,
    anywhere: manageAnywhere,
    sharing: simplifiedSharing,
    default: taskManagement,
  };
  return (
    <>
    <div className='flex gap-55 items-center p-20 bg-purple-100'>
     <div className='w-1/2'>
        <h1 className='text-5xl font-bold mb-7 '>Plan, track, and manage your tasks effortlessly.</h1>
        <p className='text-xl'>“Task Manager is designed to streamline your workflow and enhance productivity. With intuitive features and a clean interface, it allows individuals and teams to organize tasks efficiently, prioritize with clarity, and execute with precision all in one centralized platform.”</p>
        <Link
      to="/signup"
      className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg text-lg shadow-lg mt-10"
    >
      Start for free
    </Link>
     </div>
     <div className=' w-1/2'>
        <img src={taskbanner} className='w-100'></img>
     </div>
    </div>
    <div className="flex items-center justify-center  bg-white px-6 p-15">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center max-w-6xl w-full">
    
    {/* Column 1 */}
    <div className="flex flex-col items-center gap-4">
  
      <h3 className="text-3xl font-semibold text-teal-500">Simple</h3>
      <p className="text-gray-600 font-medium text-2xl">Easy to use, no clutter—just focus on your tasks.</p>
    </div>

    {/* Column 2 */}
    <div className="flex flex-col items-center gap-4">
     
      <h3 className="text-3xl font-semibold text-teal-500">Straightforward</h3>
      <p className="text-gray-600 text-2xl">Clear layout and intuitive controls make it seamless.</p>
    </div>

    {/* Column 3 */}
    <div className="flex flex-col items-center gap-4">
    
      <h3 className="text-3xl font-semibold text-teal-500">Super Powerful</h3>
      <p className="text-gray-600 text-2xl">Packed with features to organize, plan, and execute.</p>
    </div>

  </div>
</div>


 

  
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-10 py-20 bg-white">
      {/* Left Q&A section */}
      <div className="flex flex-col gap-6 w-full md:w-1/2">
        <h1 className="text-4xl font-bold text-gray-800">Stay on task all day long</h1>

        <div>
          <button
            onClick={() => setActiveTab("smart")}
            className="text-left w-full text-lg font-semibold border-b pb-2"
          >
            A smart daily planner
          </button>
          {activeTab === "smart" && (
            <p className="text-gray-600 mt-2">
              Set yourself up for success with My Day—intelligent and personalized suggestions to update your daily or weekly to-do list.
            </p>
          )}
        </div>

        <div>
          <button
            onClick={() => setActiveTab("anywhere")}
            className="text-left w-full text-lg font-semibold border-b pb-2"
          >
            Manage your to-do list from anywhere
          </button>
          {activeTab === "anywhere" && (
            <p className="text-gray-600 mt-2">
              Access your tasks seamlessly across all your devices—be it desktop, mobile, or web.
            </p>
          )}
        </div>

        <div>
          <button
            onClick={() => setActiveTab("sharing")}
            className="text-left w-full text-lg font-semibold border-b pb-2"
          >
            Simplified sharing
          </button>
          {activeTab === "sharing" && (
            <p className="text-gray-600 mt-2">
              Share your lists with friends, family, or teammates and collaborate in real time.
            </p>
          )}
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={imageMap[activeTab]}
          alt="Feature preview"
          className="rounded-lg shadow-lg w-[80%] max-w-md transition-all duration-300"
        />
      </div>
    </div>
    <div className='bg-teal-900 w-full h-100 p-10 '>
      <div className='rounded-2xl flex justify-center gap-5 py-10 px-60 ps-80 items-center'> 
        <img src={boss} className='h-20 w-25 rounded-full'></img>
        <p className='text-white text-3xl'>“This task manager has significantly improved my team's organization and workflow. 
        Its clean design, smart features, and user-friendly interface make it an essential tool in our daily operations.”</p>
      
     
      </div>
       <div className='flex flex-col justify-center items-center'>
         <p className='text-white '>- Charlotte Bennett </p>
         <p className='text-white '>CEO</p>
      </div>
      </div>
      
    <div className='flex flex-col justify-center items-center p-20'>
    <div>
        <h1 className='text-4xl'>Manage all your tasks with TaskManager</h1>
    </div>
      <Link
      to="/signup"
      className="inline-block bg-teal-400 hover:bg-teal-600 text-white px-4 py-3 rounded-lg text-lg shadow-lg mt-10"
    >
      Start for free
    </Link>
    </div>

    <div>

    </div>

    <footer className="bg-gray-100 text-gray-700 py-10 px-4 md:px-20 mt-10">
  <div className="grid md:grid-cols-4 gap-8">
    {/* Column 1: Logo and Description */}
    <div>
      <h2 className="text-xl font-bold text-teal-400">TaskManager</h2>
      <p className="text-sm mt-2">
        Simple, streamlined, and powerful—TaskManager helps individuals and teams stay on top of their work with clarity and confidence.
      </p>
    </div>
    {/*Column 2: Quick Links*/}
    <div>
      <h3 className="text-md font-semibold mb-2">Quick Links</h3>
      <ul className="space-y-1 text-sm">
        <li><a href="/" className="hover:text-teal-500">Home</a></li>
        <li><a href="/pricing" className="hover:text-teal-500">Pricing</a></li>
        <li><a href="/overview" className="hover:text-teal-500">Overview</a></li>
        <li><a href="/signup" className="hover:text-teal-500">Get Started</a></li>
      </ul>
    </div>
    {/*Column 3: Company*/}
    <div>
      <h3 className="text-md font-semibold mb-2">Company</h3>
      <ul className="space-y-1 text-sm">
        <li><a href="/about" className="hover:text-teal-500">About Us</a></li>
        <li><a href="/careers" className="hover:text-teal-500">Careers</a></li>
        <li><a href="/contact" className="hover:text-teal-500">Contact</a></li>
        <li><a href="/privacy" className="hover:text-teal-500">Privacy Policy</a></li>
      </ul>
    </div>
    {/*Column 4: Newsletter*/}
    <div>
      <h3 className="text-md font-semibold mb-2">Stay Updated</h3>
      <p className="text-sm mb-2">Subscribe to receive product updates, tips, and productivity hacks.</p>
      <form className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-3 py-2 border border-gray-300 rounded-md text-sm"
        />
        <button className="bg-teal-500 text-white text-sm py-2 rounded-md hover:bg-teal-700">
          Subscribe
        </button>
      </form>
    </div>
  </div>

  <div className="text-center text-xs text-gray-500 mt-10 border-t pt-4">
    &copy; {new Date().getFullYear()} TaskManager. All rights reserved.
  </div>
</footer>

    </>
  )
}

export default Overview
