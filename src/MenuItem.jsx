/**
 * MenuItem component renders a sidebar menu item with optional icons, label, notification dot, and outline.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.icon - Icon to display when the item is active.
 * @param {React.ReactNode} props.icon2 - Icon to display when the item is inactive.
 * @param {string} props.label - The label text for the menu item.
 * @param {boolean} props.active - Whether the menu item is currently active.
 * @param {boolean} props.isOpen - Whether the sidebar is open (shows label and notification).
 * @param {function} props.onClick - Click handler for the menu item.
 * @param {boolean} [props.notify] - Whether to show a notification dot.
 * @param {boolean} [props.outline] - Whether to show a top border outline.
 * @returns {JSX.Element} The rendered MenuItem component.
 */
import React, { useState } from 'react'

const MenuItem = ({ icon, icon2, label, active, isOpen, onClick, notify, outline }) => {

  return (
    <div className={`relative group ${outline && "border-t border-gray-300 pt-2"}`}>
    <div onClick={onClick} className={`flex items-center justify-between hover:bg-indigo-100 p-2 rounded cursor-pointer my-2 ${active && "bg-indigo-100"}`}>
        <div className='flex items-center space-x-2 relative'>
            {active ? <span className='text-indigo-500'>{icon}</span> : icon2}
            {isOpen && <span className={`text-lg ${active && "font-semibold text-indigo-500"}`}>{label}</span>}
            {!isOpen && notify && <div className='absolute top-0 right-2 w-2 h-2 rounded-full bg-indigo-500'></div>}
        </div>
        {isOpen && notify && <div className='w-2 h-2 rounded-full bg-indigo-500'></div>}
      
    </div>
    {!isOpen && (
      <span className="absolute left-14 top-1/2 transform -translate-y-1/2 scale-0 group-hover:scale-100 transition bg-indigo-100 text-indigo-500 text-xs px-2 py-1 rounded">
        {label}
      </span>
    )}
  </div>
  )
}

export default MenuItem