import Image from 'next/image'
import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import AnimatedDivider from './AnimatedDivider';
import Link from 'next/link';

const Footer = () => {
  return (
     <footer className="grid lg:grid-cols-4 md:grid-cols-4  sm:grid-cols-1 gap-4 w-full pb-15 bg-white rounded-2xl p-12 text-slate-800">
        <div className="flex flex-col gap-3">
          <div className="w-[250px] md:w-[250px]  sm:w-[75px] ">
 <Image src="/images/logo.png" alt="astronoa logo" width={100} height={50} layout="responsive"/> 
          </div>
          <p>Empowering the Future with Technology
Building scalable, smart, and sustainable digital experiences.</p>
<div className='text-[#642C8F]  flex items-center gap-4'>
 <FaFacebook size={22} className='hover:text-slate-500' />
 <FaLinkedin size={22} className='hover:text-slate-500'/>
 <GrInstagram size={22} className='hover:text-slate-500' />
 
</div>
         

        </div>
        <div className="flex flex-col items-start gap-3" >
          <h3 className="text-2xl">Quick Links</h3>
          <AnimatedDivider/>
          <ul>
            <li><Link href="/">Home</Link></li>
             <li><Link href="#about">About</Link></li>
             <li><Link href="#services">Services</Link></li>
             {/* <li><Link>Blog</Link></li> */}
             <li><Link href="#contact">Contact</Link></li>
          </ul>

        </div>

        <div className="flex flex-col items-start gap-3">
          <h3 className="text-2xl">Our Services</h3>
          <AnimatedDivider/>
          <ul>
            <li>Web & App Development</li>
             <li>Data Analytics</li>
             <li>Services</li>
             <li>Digital Marketing</li>
             <li>AI-Powered Solutions</li>
          </ul>

        </div>
        <div className="flex flex-col items-start gap-3">
          <h3 className="text-2xl">Contact Us</h3>
          <AnimatedDivider/>
          <div>
            <p>Remote</p>
          </div>
           <div>
            <p>theastranova1@gmail.com</p>
          </div>

            <div>
            <p>+91 89850 12158
 </p>
          </div>

        </div>

      
      </footer>
  )
}

export default Footer