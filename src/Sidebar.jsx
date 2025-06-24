/**
 * @file Sidebar.jsx
 * @description
 * This file defines the Sidebar component, a collapsible navigation sidebar for a React application.
 * The sidebar displays a list of navigation items, each with an icon, label, and optional notification badge.
 * It supports expanding/collapsing, highlights the active menu item, and includes a user profile section at the bottom.
 *
 * @component
 * @example
 * return (
 *   <Sidebar />
 * )
 *
 * @dependencies
 * - React (useState)
 * - react-icons (various icons)
 * - MenuItem component
 *
 * 
 *  *
 * @props
 * This component does not accept any props.
 * 
 * 
 * @returns {JSX.Element} The rendered Sidebar component.
 */

import React, { useState } from 'react'
import { LuChevronFirst, LuChevronLast } from "react-icons/lu";
import { FaYoutube } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsPieChart } from "react-icons/bs";
import { BsPieChartFill } from "react-icons/bs";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoStatsChartOutline } from "react-icons/io5";
import { IoStatsChartSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoMdHelpCircle } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { MdDashboard } from "react-icons/md";

import MenuItem from './MenuItem';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggleSideBar = () => setIsOpen(!isOpen);
    const [activeItem, setActiveItem] = useState(false)

    const items = [
        { label: 'Dashboard', icon1: <RxDashboard className='w-5 h-5' />, icon2: <MdDashboard className='w-5 h-5' />, notify: false },
        {label: 'Statistics', icon1: <IoStatsChartOutline className='w-5 h-5' />, icon2: <IoStatsChartSharp className='w-5 h-5' />, notify: true},
        { label: 'Orders', icon1: <BsPieChart className='w-5 h-5' />, icon2: <BsPieChartFill className='w-5 h-5' />, notify: false },
        { label: 'Billings', icon1: <LiaMoneyBillWaveAltSolid className='w-5 h-5' />, icon2: <FaMoneyBill1Wave className='w-5 h-5' />, notify: true },
        { label: 'Users', icon1: <FaRegUserCircle className='w-5 h-5' />, icon2: <FaUserCircle className='w-5 h-5' />, notify: false },
        { label: 'Settings', icon1: <IoSettingsOutline className='w-5 h-5' />, icon2: <IoSettings className='w-5 h-5' />, notify: false, outline: true },
        { label: 'Help', icon1: <IoMdHelpCircleOutline className='w-5 h-5' />, icon2: <IoMdHelpCircle className='w-5 h-5' />, notify: false }
    ]


  return (
    <section className='flex h-screen'>

        {/* SideBar */}
        <nav className={`${isOpen ? "w-72": "w-16"}    transition-all duration-300 p-3 bg-slate-50 border-r border-slate-200 shadow-sm relative`}>

            {/* SideBar Header */}
            <div className={`p-2 flex items-center ${isOpen ? "justify-between" : "justify-center"}`}>
                {isOpen && <a href="" className='flex items-center space-x-1'>
                    <FaYoutube className='w-6 h-6 text-red-500' /> <span className='text-2xl font-bold flex items-center gap-1 text-gray-900'>YouTube <sup className='font-normal text-xs'>UK</sup></span>    
                </a>}
                <button onClick={toggleSideBar}>{isOpen ? <LuChevronFirst className='w-6 h-6 cursor-pointer' /> : <LuChevronLast className='w-6 h-6 cursor-pointer' /> }</button>
            </div>

            {/* SideBar Menu Items */}
            <div className='mt-4'>
                {items.map(({label, icon1, icon2, notify, outline}) => (
                    <MenuItem key={label} icon={icon2} icon2={icon1} label={label} isOpen={isOpen} active={activeItem === label} onClick={() => setActiveItem(label)} notify={notify} outline={outline}/>
                ))}
            </div>


            <div className="absolute left-0 bottom-10 w-full border-t border-gray-300 pt-5 group hover:text-indigo-500">
                <div className="flex items-center justify-between p-2 rounded cursor-pointer">
                    <div className='flex items-center space-x-3 relative'>
                        <div className='bg-indigo-100 h-full w-full p-2 rounded-lg text-xl font-bold text-indigo-500'>AD</div>
                        {isOpen && <div>
                            <span className='block font-semibold'>Alan Doe</span>
                            <span className='text-sm text-gray-600 group-hover:text-indigo-500'>alandoe@gmail.com</span>
                        </div>}
                    </div>
                    {isOpen && <BsThreeDotsVertical className='h-5 w-5 transition duration-300 hover:text-indigo-500' />}
                </div>
                {!isOpen && (
                <span className="absolute left-14 top-1/2 transform -translate-y-1/6 scale-0 group-hover:scale-100 transition bg-indigo-100 text-indigo-500 text-xs px-2 py-1 rounded">
                {"AlanDoe"}
                </span>
                )}
            </div>
        </nav>

        {/* Main Content */}
        <div className='flex-1 p-6'></div>
    </section>
  )
}

export default Sidebar