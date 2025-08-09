import Image from 'next/image'
import React from 'react'

const Whychoose = () => {
  return (
    <div className='w-full  rounded-2xl p-10 mb-3 text-white '>
           <div className='flex flex-col md:flex-row justify-center gap-5'>
              
               <div className='flex flex-col w-full md:w-1/2 gap-4'>
                   <h3 className=' font-semibold text-4xl'>Why Choose AstraNova?</h3>
                   <h5 className=' font-medium text-xl'>Modern, Mobile-First Websites That Perform
</h5>
              <ul className='pl-4'>
                <li>1. AI at the Core of Every Strategy</li>
                <li>2. Former Agency Leaders & Domain Experts</li>
                <li>3. Faster Execution, Smarter Optimization</li>
                <li>4. Creative Meets Data in Every Campaign
</li>
                <li>Experience Across B2B, B2C, and D2C Verticals</li>
              </ul>
                   
              
                   </div>

                    <div className='w-full md:w-1/2 flex flex-col gap-4'>
                 <Image src="https://cdn.pixabay.com/photo/2019/08/06/22/48/artificial-intelligence-4389372_1280.jpg" alt="about-img" width={400} height={300} layout="responsive" className='rounded-xl'/>
               </div>
   
   
           </div>
   
   
           </div>
  )
}

export default Whychoose
