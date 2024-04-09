import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


function LandingPage() {
  return (
    <div className='w-full w h-screen bg-#F1F1F1 pt-1'>
    <div className='textstructure mt-60 px-20'>
    {["We Create","Eye Opeaning","presentations"].map((item,index)=>{
        return  <div className='masker'>
        <div className='w-fit flex items-center'>
            {index === 1 && (<div className='w-[10vw] h-[5vw] bg-red-600 rounded-2xl'></div>)}
            <div className='text-[7vw] uppercase leading-[6.5vw] tracking-tighter font-["Founders Grotesk condensed"] font-semibold'>
            <h1>{item}</h1>
        </div>
        </div>

        </div>
        
    })}
    </div>
        
    <div className='border-t-[2px] mt-40 border-zinc-300 flex justify-between items-center px-20 py-5'>
    {["For public and private companies","From the first pitch to IPO"].map((item,index)=>{
        return <div className='text-md font-midium text-[1.2vw] tracking-tight leading-none '>{item}
        </div>
    })}
    <div className='start flex justify-between items-center gap-2'>
        <div className='px-4 py-2 border-2 border-zinc-500 rounded-full uppercase'>star the project</div>
        <div className='w-10 h-10 border-2 border-zinc-500 rounded-full flex items-center justify-center'>
        <span className='rotate-[45deg]'>
        <FaArrowUpLong />
        </span></div>
    </div>
    </div>
    
    </div>
  );
}

export default LandingPage
