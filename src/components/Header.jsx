import React, { useState } from 'react'
import logo from './../assets/Images/logo.png'
import { HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv } from "react-icons/hi2";
import { HiPlus,HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';

function Header() {
    const [toggle,setToggle]=useState(false);
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const handleMouseEnter = () => {
        setDropdownVisible(true);  // Show dropdown
      };
    
      const handleMouseLeave = () => {
        setDropdownVisible(false);  // Hide dropdown
      };

    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ]

  return (
    <div className='flex items-center justify-between p-5'>
                <div className='flex gap-8 items-center'>
                        <div className="relative group">
                            <img src={logo} className='w-[80px] md:w-[115px] object-cover' />

                        </div>

                        <div className='hidden md:flex gap-8'>
                            {menu.map((item)=>(
                                <HeaderItem name={item.name} Icon={item.icon} />
                            ))}
                        </div>

                        <div className='flex md:hidden gap-5'>
                        {menu.map((item,index)=>index<3&&(
                            <HeaderItem name={''} Icon={item.icon} />
                        ))}

                        <div className='md:hidden' onClick={()=>setToggle(!toggle)}>       
                            <HeaderItem name={''} Icon={HiDotsVertical} />
                        {toggle? 
                            <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
                                {menu.map((item,index)=>index>2&&(
                                <HeaderItem name={item.name} Icon={item.icon} />
                                ))}
                            </div>:null}

                    </div> 
                </div>
            </div>

            
            <div className='relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

                <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" className='w-[40px] rounded-full'/>
                
                
                {isDropdownVisible && (
                    <div className="absolute right-0  bg-[#121212] border-[1px] w-48  border-gray-700 rounded-md shadow-lg">
                        <ul className="py-1">
                        <li className="px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-black cursor-pointer">Profile</li>
                        <li className="px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-black cursor-pointer">Settings</li>
                        <li className="px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-black cursor-pointer">Logout</li>
                        </ul>
                    </div>
                 )}
            
            </div>
    </div>
  )
}

export default Header