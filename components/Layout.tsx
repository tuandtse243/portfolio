'use client'
import React from 'react'
import { Sora } from "next/font/google";
import Nav from './Nav';
import Header from './Header';
import TopLeftImg from './TopLeftImg';
import { AnimatePresence, motion } from 'framer-motion';
import Transition from './Transition';

const sora = Sora({ 
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

type Props = {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
      <TopLeftImg />
      <Nav />
      <Header />
      <AnimatePresence mode="wait">
        <motion.div className="h-full">
          <Transition />
          { children }
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Layout