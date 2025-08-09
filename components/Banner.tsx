import Link from 'next/link'
import React from 'react'
import { BiRightArrow, BiRightArrowAlt } from 'react-icons/bi'

const Banner = () => {
  return (
    <div className='w-full  py-10 text-white '>

        <div className='px-2 sm:px-2.5 flex flex-col justify-center items-center gap-5'>
              <h1 className='text-7xl font-bold text-center '>Innovate. <br/>
Automate. Elevate.</h1>
              <p>We are a team of growth experts focused on helping brands reach their goals, increase sales, and get quality leads through tailored strategies and complete support.
</p>
              <Link className=' flex cursor-pointer justify-center items-center bg-[#642C8F] w-[180px] px-3 py-2 hover:bg-white hover:text-[#642C8F] transition  duration-500 rounded-md' href="#contact">
                
                <span>Contact Now</span> <BiRightArrowAlt/>
                
                </Link>
        </div>
    </div>
  )
}

export default Banner
