import React from 'react';
import cardImg1 from '../assets/vector1.png'
const Banner = ({issueTotal, resolvedTotal}) => {
    return (
        <div className='w-11/12 grid-cols-1 mx-auto grid lg:grid-cols-2'>
            
            <div className=" flex flex-col justify-center items-center gap-5  mx-auto md:flex-row">
                <div className='mt-10 bg-gradient-to-r from-indigo-500 to-purple-400  text-4xl rounded-xl'>
             <div className='w-[400px] h-[180px] mx-auto lg:w-[600px] lg:h-[250px] flex flex-col justify-center items-center ' style={{backgroundImage: `url(${cardImg1} )`}}>
                <p className='text-white font-semibold text-center'>
                In-Progress
             </p>
             <span className='text-white font-bold '>
                
                {issueTotal}</span>
             </div>
            </div>

            <div className='mt-5 lg:mt-10 text-4xl  bg-gradient-to-r from-green-400 to-green-600 rounded-xl' >
                <div className='w-[400px] h-[180px] mx-auto lg:w-[600px] lg:h-[250px] flex flex-col justify-center items-center' style={{backgroundImage: `url(${cardImg1} )`}}>
                    <p className='text-white font-semibold '>
                Resolved
             </p>
             <span className='text-white font-bold'>{resolvedTotal}</span>

                </div>
            </div>
            
            </div>
        </div>
    );
};

export default Banner;