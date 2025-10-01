import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar shadow-sm flex flex-row bg-white w-full">
               
  <div className='flex justify-between items-center w-11/12 mx-auto'>
    <div className="flex-1 ">
    <a className="btn btn-ghost text-xl">CS — Ticket System</a>
  </div>
  <div className="flex justify-center items-center gap-5">
    <ul className="hidden md:flex gap-5 font-semibold justify-center align-middle">
      <li><a>Home</a></li>
      <li>FAQ</li>
      <li>Changelog</li>
      <li>Blog</li>
      <li>Download</li>
      <li>Contact</li>
      
      
    </ul>
    <div>
       <button className="btn bg-linear-to-r from-blue-700 to-purple-500 text-white m-3 p-3 rounded-xl">+ New Ticket</button>
    </div>
    
    
  </div>
  
   
  
  </div>
</div>
    );
};

export default Navbar;