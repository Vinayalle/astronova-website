// components/ContactForm.tsx
'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '',phone:'' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) alert('Email sent!');
    else alert('Failed to send email.');
  };

  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-4 p-10 mb-3  flex-col-reverse '  id="contact">
        <div className=' w-full md:w-1/2'>
 <Image src="https://cdn.pixabay.com/photo/2020/05/24/23/44/hands-5216585_1280.jpg" alt="about-img" width={400} height={300} layout="responsive" className='rounded-xl'/>
        </div>
        <div className='w-full md:w-1/2'>

             <form onSubmit={handleSubmit} className=" p-4 space-y-4 bg-white shadow-md rounded-xl flex flex-col items-center justify-center">
        <h2 className='text-black font-semibold text-2xl'>Let’s Work Together
</h2>
        <p className='text-slate-700 text-center'>We’d love to hear from you. Whether you have a question, feedback, or a business inquiry, fill out the form below and our team will get back to you shortly.</p>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full p-2 border rounded-md text-slate-500 outline-[#642C8F]"
      />
      <input
        type="text"
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="w-full p-2 border rounded-xl text-slate-500 outline-[#642C8F]"
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full p-2 border rounded-xl text-slate-500 outline-[#642C8F]"
      />
      <textarea
        placeholder="Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="w-full p-2 border rounded-xl text-slate-500 outline-[#642C8F]" 
      />
      <button type="submit" className="bg-[#642C8F] cursor-pointer text-white px-4 py-2 rounded hover:bg-white hover:text-[#642C8F] transition  duration-500 ">Send</button>
    </form>

        </div>

    </div>
   
  );
}
