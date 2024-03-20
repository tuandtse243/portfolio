'use client'
import React from 'react'
import Circles from '@/components/Circles';
import Bulb from '@/components/Bulb';
import WorkSlider from '@/components/WorkSlider';
import {motion} from 'framer-motion'
import { fadeIn } from '@/variants';

const WorkPage = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* Text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2 
              className='h2 xl:mt-12'
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate='show'
              exit='hidden'
            >
              My work <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate='show'
              exit='hidden'
              className='mb-4 max-w-[400px] mx-auto lg:mx-0'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, repellat eligendi minus totam in quod sunt ipsam harum quam? Animi expedita earum id, deleniti repellat velit officiis consectetur! Non, vel.
            </motion.p>
          </div>
          <motion.div 
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[65%]'
          >
            {/* slider */}
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  )
}

export default WorkPage