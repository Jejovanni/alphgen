'use client'
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    // Array containing navigation items
    const navItems = [
        { id: 1, text: 'About Us', path: './about' },
        { id: 2, text: 'FAQs', path: '/about/#faqs' },
        { id: 3, text: 'Contact', path: '/contact' },
    ];

    return (
        <header className='bg-black flex justify-between items-center h-24 text-white'>
            {/* Logo */}
            <Link href={'/#'}>
                <Image
                    src={'/logo.png'}
                    width={160}
                    height={68}
                    alt='logo'
                />
            </Link>

            {/* Desktop Navigation */}
            <nav className='hidden md:flex'>
                <ul className='flex'>
                    {navItems.map(item => (
                        <li
                            key={item.id}
                            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
                        >
                            <Link href={item.path}>{item.text}</Link> {/* Use Link for navigation */}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Navigation Icon */}
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            {/* Mobile Navigation Menu */}
            <nav className={nav ? 'z-10 fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-10'}>
                <ul>
                    {/* Mobile Logo */}
                    <Link href={'/#'}>
                        <Image
                            src={'/logo.png'}
                            width={170}
                            height={68}
                            alt='logo'
                        />
                    </Link>

                    {/* Mobile Navigation Items */}
                    {navItems.map(item => (
                        <li
                            key={item.id}
                            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
                        >
                            <Link href={item.path}>{item.text}</Link> {/* Use Link for navigation */}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;


