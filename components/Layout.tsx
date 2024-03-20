'use client'
import React, { useContext, useRef } from 'react'
import { Sora } from "next/font/google";
import Nav from './Nav';
import Header from './Header';
import TopLeftImg from './TopLeftImg';
import { AnimatePresence, motion } from 'framer-motion';
import Transition from './Transition';
import { usePathname } from 'next/navigation';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const sora = Sora({ 
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

type Props = {
  children: React.ReactNode;
}

function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
        {props.children}
    </LayoutRouterContext.Provider>
  );
}

const Layout = ({ children }: Props) => {
  const path = usePathname();

  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
      <TopLeftImg />
      <Nav />
      <Header />
      <AnimatePresence mode="wait">
        <motion.div key={path} className="h-full">
          <FrozenRouter>
            <Transition />
            { children }
          </FrozenRouter>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Layout