'use client';

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi';


const Header = () => {

  const [menuOpen,setMenuOpen]=useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
   <header className="w-full  shadow-md z-50 text-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <div className="logo w-32 md:w-66">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Astronova logo"
              width={180}
              height={90}
              layout="responsive"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className='hover:bg-[#642C8F] px-2 py-1 rounded-md'>Home</Link>
          <Link href="#about" className='hover:bg-[#642C8F] px-2 py-1 rounded-md'>About</Link>
          <Link href="#services" className='hover:bg-[#642C8F] px-2 py-1 rounded-md'>Services</Link>
          <Link href="#contact" className='hover:bg-[#642C8F] px-2 py-1 rounded-md'>Contact</Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu" className='hover:bg-[#642C8F]'>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white text-black  px-4 py-3 rounded-2xl mx-2 pb-4">
          <nav className="flex flex-col space-y-2">
            <Link href="/" onClick={toggleMenu} className='hover:bg-[#642C8F]'>Home</Link>
            <Link href="#about" onClick={toggleMenu} className='hover:bg-[#642C8F]'>About</Link>
            <Link href="#services" onClick={toggleMenu} className='hover:bg-[#642C8F]'>Services</Link>
            <Link href="#contact" onClick={toggleMenu} className='hover:bg-[#642C8F]'>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header