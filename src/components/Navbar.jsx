import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className='w-full sm:px-10 px-5'>
        <nav className='flex justify-between w-full screen-max-width py-5 '>
             <img src={appleImg} alt="Apple" width={14} height={18} />
             <ul className='flex justify-around text-sm text-gray max-sm:hidden'>
                <li className='px-5 cursor-pointer hover:text-white'>Store</li>
                <li className='px-5 cursor-pointer hover:text-white'>Mac</li>
                <li className='px-5 cursor-pointer hover:text-white'>iPhone</li>
                <li className='px-5 cursor-pointer hover:text-white'>Support</li>
             </ul>
             <div className='flex gap-7 cursor-pointer'><img src={searchImg} alt="Apple" width={18} height={18} />
             <img src={bagImg} alt="Apple" width={18} height={18} /></div>
        </nav>
    </header>
  )
}

export default Navbar
