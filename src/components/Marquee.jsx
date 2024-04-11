import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className='w-full h-[50vh] py-28 bg-[#004D43] rounded-tr-2xl rounded-tl-2xl text-white'>
        <div className='text border-t-2 border-b-2 border-zinc-500 flex gap-10 overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease : "linear", repeat: Infinity,duration: 5}} className='text-[25vh] leading-none font-["Founders Grotesk condensed"] font-extrabold uppercase'>we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease : "linear", repeat: Infinity,duration: 5}} className='text-[25vh] leading-none font-["Founders Grotesk condensed"] font-extrabold uppercase'>we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease : "linear", repeat: Infinity,duration: 5}} className='text-[25vh] leading-none font-["Founders Grotesk condensed"] font-extrabold uppercase'>we are ochi</motion.h1>

        </div>
    </div>
  )
}

export default Marquee
