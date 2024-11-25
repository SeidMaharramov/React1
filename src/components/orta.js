import React from 'react'
import '../App.css';
import {motion} from "framer-motion"
export const Orta = () => {
  return (
    <motion.div className='orta'
    initial={{ x: -50,opacity:-10 }} 
    animate={{ x: 0 ,opacity:1}} 
    transition={{
    duration:5,
    type: "spring",
    stiffness: 100,
    damping: 15
    }}>
        <h2 className='h1'>
            Web Design &
        </h2>  
        <h1>
            Development
        </h1>
        <h2 className='h2'>Course</h2>
        <span>
            Salam Kursumuza Xos Gelmisiniz.Bu Kursda Siz Web Developer Olmaq Ucun Ilk Addimlar Atacaqsiniz.Indiden Haminiza Ugurlar.Zehmet Olmazsa Qeydiyyatdan Kecin!
        </span>
        <button className='buton2'>Join Us</button>


    </motion.div>
  )
}



