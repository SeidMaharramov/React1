import React, { useState } from 'react';
import '../App.css';
import {useAnimation, motion, easeOut, animate} from 'framer-motion';
import {gsap} from 'gsap';




export const Header = () => {

    return (
        <motion.div className='yuxari'
        initial={{ y: -100 }} 
        animate={{ y: 0 }} 
        transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}>
          
            <motion.h1

            >PraRoz</motion.h1>
            <ul>
                <li ><motion.a
                 whileHover={{scale:1.2,originX:0,
                 transition:{type:'spring',stiffness:400}}}
                 href='#' className='Home'>HOME</motion.a>
                 </li>
                <motion.li  whileHover={{scale:1.2,originX:0,
                 transition:{type:'spring',stiffness:400}}}><a href='#' className='About'>ABOUT</a></motion.li>
                <motion.li  whileHover={{scale:1.2,originX:0,color:"red",
                 transition:{type:'spring',stiffness:400}}}><a href='#' className='Service'>SERVICE</a></motion.li>
                <motion.li  whileHover={{scale:1.2,originX:0,color:"red",
                 transition:{type:'spring',stiffness:400}}}><a href='#' className='Design'>DESIGN</a></motion.li>
                <motion.li  whileHover={{scale:1.2,originX:0,color:"red",
                 transition:{type:'spring',stiffness:400}}}><a href='#' className='Contact'>CONTACT</a></motion.li>
               
              </ul>
              <div className='axtar'>
                <input type='text' placeholder='Search' />
                <motion.button 
                
                className='tikla'>tikla</motion.button>
                

              </div>
        </motion.div>
    );
};



