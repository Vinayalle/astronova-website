import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'

const About = () => {
  return (
   <div className="w-full bg-white rounded-2xl p-10 mb-3" id="about">
      <div className="flex flex-col md:flex-row justify-center gap-5">
        {/* Image Column */}
        <div className="w-full md:w-1/2">
          <Image
            src="https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_1280.jpg"
            alt="about-img"
            width={400}
            height={300}
            layout="responsive"
            className="rounded-xl"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h3 className="text-black font-semibold text-4xl">Who We Are</h3>
          <p className="text-slate-700">
           At AstraNova, we combine artificial intelligence with deep analytical and marketing expertise to help brands grow smarter, faster, and more efficiently.

          </p>
 <p className="text-slate-700">
           We’re a collective of performance marketers, strategists, and ex-agency leads who believe in one simple truth - marketing should be measurable, scalable, and built for outcomes, not just outputs.


          </p>
          {/* <h3 className="text-black font-semibold text-4xl">Mission</h3>
          <p className="text-slate-700">
            We are a digital transformation agency focused on delivering measurable results. From building high-performance apps to running data-driven marketing campaigns, we partner with startups and enterprises to accelerate growth.
          </p> */}

          <Link className=' flex cursor-pointer justify-center items-center bg-[#642C8F] w-[180px] px-3 py-2 hover:bg-white hover:text-[#642C8F] transition  duration-500 rounded-md' href="#contact">
            <span>Contact Now</span>
            <BiRightArrowAlt />
         </Link>
        </div>
      </div>
    </div>
  )
}

export default About