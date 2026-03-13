// import React from 'react'
import logo from '../assets/images/logo.png'
import pfp from '../assets/images/pfp.jpg'
import { HiHome, HiMiniMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiDotsVertical, HiPlus } from "react-icons/hi";
import HeaderItem from './HeaderItem';
import { useState } from 'react';

function Header() {
  const [toggle, setToggle] = useState(false)
  const menu = [
    { name: 'HOME', icon: HiHome },
    { name: 'SEARCH', icon: HiMiniMagnifyingGlass },
    { name: 'WATCHLIST', icon: HiPlus },
    { name: 'ORIGINALS', icon: HiStar },
    { name: 'MOVIES', icon: HiPlayCircle },
    { name: 'SERIES', icon: HiTv }
  ];

  return (
    <div className="flex items-center justify-between p-3 space-x-6">
      <div className='flex items-center space-x-6 p-2'>
        <img src={logo} className='w-[70px] md:m-[5px] px-2  md:pr-10 object-cover md:w-[115px]' alt="logo" />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden md:space-x-4 md:gap-4 space-x-1 gap-1">
          {menu.map((item, index) => index < 3 && (
            <HeaderItem key={item.name} name={''} Icon={item.icon} />
          ))}
        </div>
        <div className="md:hidden md:space-x-4" onClick={()=>setToggle(!toggle)}>
          <HeaderItem name={''} Icon={HiDotsVertical} />
          {toggle?<div className='absolute mt-3 bg-gray-950 rounded-[4px] px-5 py-3 border-[1px] border-gray-700 flex flex-col gap-2'>
            {menu.map((item, index) => index > 2 && (
              <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
            ))}
          </div>
          :null}
        </div>
      </div>
      <img src={pfp} alt="pfp" className='w-[45px] md:mr-5 rounded-full' />
    </div>
  );
}

export default Header;
