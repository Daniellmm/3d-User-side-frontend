import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false); 

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='bg-transparent w-full overflow-hidden text-black py-5 px-8 md:px-20 lg:px-44'>
            <div className='flex justify-between items-center'>
                {/* Logo */}
                <div className='flex items-baseline font-bold'>
                     <h1 className='text-4xl md:text-6xl'>S</h1>
                    {/*<h1 className='text-xl md:text-2xl'>A</h1> */}
                    <h1 className='text-xl md:text-2xl'>patiaScape</h1>
                </div>

                {/* Menu Icon for Mobile */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu}>
                        {isOpen ? (
                            <HiX className='text-3xl' /> 
                        ) : (
                            <HiMenu className='text-3xl' /> 
                        )}
                    </button>
                </div>

                {/* Nav Links (hidden on mobile, shown on medium screens and up) */}
                <div className='hidden md:flex'>
                    <ul className='flex space-x-5 md:space-x-10 lg:space-x-20'>
                        <li className='font-semibold text-lg md:text-2xl'>Home</li>
                        <li className='font-semibold text-lg md:text-2xl'>About Us</li>
                        <li className='font-semibold text-lg md:text-2xl'>Properties</li>
                        <li className='font-semibold text-lg md:text-2xl'>Agents</li>
                    </ul>
                </div>

                
                <div className='hidden md:block'>
                    <button className='bg-transparent border-[3px] rounded-lg font-bold text-lg md:text-2xl py-3 md:py-5 px-4 md:px-8 border-black hover:bg-black hover:text-white transition duration-500'>
                        Find A House
                    </button>
                </div>
            </div>

            

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className='md:hidden mt-4'>
                    <ul className='flex flex-col space-y-4'>
                        <li className='font-semibold text-xl'>Home</li>
                        <li className='font-semibold text-xl'>About Us</li>
                        <li className='font-semibold text-xl'>Properties</li>
                        <li className='font-semibold text-xl'>Agents</li>
                        <li>
                            <button className='bg-transparent border-[3px] rounded-lg font-bold text-xl py-3 px-6 border-black w-full'>
                                Find A House
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NavBar;
