import { Facebook, Linkedin, Mail, X } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black text-gray-400 w-full'>
            <div className='p-12 w-[450px] mx-auto grid grid-cols-1 gap-5 md:grid-cols-5 md:w-[1280px]'>
                <div className=' space-y-2'>
                <h3 className='font-bold text-2xl text-white'>CS — Ticket System</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='space-y-2'>
                <h3 className='font-bold text-2xl text-white'>Company</h3>
                <p>About Us</p>
                <p>Our Mission</p>
                <p>Contact Saled</p>
            </div>
            <div className='space-y-2'>
                <h3 className='text-white font-bold text-2xl'>Services</h3>
                <p>Products & Services</p>
                <p>Customer Stories</p>
                <p>Download Apps</p>
            </div>
            <div className='space-y-2'>
                <h3 className='text-white font-bold text-2xl'>Information</h3>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Join Us</p>
            </div>
            <div className='space-y-2'>
                <h3 className='text-white font-bold text-2xl'>Social Links</h3>
                <p className='flex'><span className='h-7 w-7 rounded-full bg-white text-black text-center text-xl mr-1'>𝕏</span> @CS — Ticket System</p>
                <p className='flex'><span className='w-8 h-8 rounded-full bg-white text-black font-bold mr-1 text-2xl text-center'>in</span> @CS — Ticket System</p>
                <p className='flex'><span className='w-7 h-7 rounded-full bg-white text-black font-bold mr-1 text-3xl text-center'>f</span> @CS — Ticket System</p>
                <p className='flex'><span className='w-8 h-8 p-1 rounded-full bg-white items-center text-black font-bold mr-1'><Mail /></span>support@cst.com</p>
            </div>
            
        </div>
        <p className='text-center text-white pb-8'>© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
            
    );
};

export default Footer;