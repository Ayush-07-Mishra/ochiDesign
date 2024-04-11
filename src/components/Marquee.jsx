import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className='w-full h-[30vw] py-[7vw] bg-[#004D43] rounded-tr-3xl rounded-tl-3xl text-white'>
        <div className='text border-t-2 border-b-2 border-zinc-500 flex gap-10 overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease : "linear", repeat: Infinity,duration: 10}} className='text-[15vw] leading-none font-["Founders Grotesk condensed"] font-extrabold uppercase'>we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease : "linear", repeat: Infinity,duration: 10}} className='text-[15vw] leading-none font-["Founders Grotesk condensed"] font-extrabold uppercase'>we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease : "linear", repeat: Infinity,duration: 10}} className='text-[15vw] leading-none font-["Founders Grotesk condensed"] font-extrabold uppercase'>we are ochi</motion.h1>
            
        </div>
    </div>
  )
}

export default Marquee
