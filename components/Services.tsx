import Link from 'next/link'
import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'

const Services = () => {

    const services=[{
        id:"01",
        name:"Web Development",
        des:"Modern, Mobile-First Websites That Perform From landing pages to custom websites, we build fast, functional, and SEO-friendly digital experiences.",

    },
    {
        id:"02",
        name:"Performance Marketing",
        des:"Ad Campaigns That Learn and Scale. Run highly targeted, conversion-focused ads across all platforms optimized with AI-powered tools for real-time results.",
        
    },
    {
        id:"03",
        name:"AI powered SEO Solutions",
        des:"Rank Faster, Smarter. Rank higher and reach ready-to-buy customers with smart AI powered SEO ",
        
    },
    {
        id:"04",
        name:"Social Media Marketing",
        des:"Content That Connects. Insights That Drive It. We don’t just post. We build strategy-backed, AI-assisted content plans that engage and convert.",
        
    },
     {
        id:"05",
        name:"Branding & Creative",
        des:"Brand Experiences That Resonate. We pair creative direction with data-driven insights to build unforgettable brand identities and high-performing ad creatives.",
        
    },
     {
        id:"06",
        name:"Landing Pages & Funnels",
        des:"Built to Convert. Designed to Adapt. From first click to final purchase, we build fast, responsive landing pages and funnels optimized with AI tools and A/B testing.",
        
    },
    {
        id:"07",
        name:"Marketing as Support",
        des:"Plug-and-Play Marketing Team for Startups & Brands No internal team? No problem. We become your extended marketing arm—managing everything from strategy to execution.",
        
    }


]
  return (
    <div className='w-full  bg-gradient-to-r from-customViolet-800 via-customViolet-300 to-customViolet-100 rounded-2xl  p-10 mb-3 text-white  ' id="services">
<h3 className=' font-semibold text-4xl text-center pb-4'>Services</h3>

<div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 sm:grid-cols-1">


    {services.map((service, index) => (
  <div
    key={index}
    className="flex flex-col border rounded-2xl border-neutral-400 p-8 gap-2"
  >
    <p className="text-sm font-light">{service.id}.</p>
    <h4 className=" text-xl font-medium">{service.name}</h4>
    <p className='text-gray-300'>{service.des}</p>
    <Link className=' hover:text-[#642C8F] transition duration-500' href="#contact">
    
      <BiRightArrowAlt size={36} />
   
    </Link>
  </div>
))}


  {/* <div className='flex flex-col border rounded-2xl border-neutral-400 p-8 gap-2'>
    <p className='text-sm font-light'>01.</p>
    <h4 className='text-white text-xl font-medium'>Digital Marketing</h4>
    <p>Grow your brand visibility with result-oriented SEO, PPC, Social Media, and Content Marketing strategies.</p>
      <button className='  hover:text-[#642C8F] transition  duration-500 ' >
         <BiRightArrowAlt size={36}/>
      </button>
    </div> */}



  
</div>
    </div>
  )
}

export default Services