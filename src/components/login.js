import React from 'react'
import {FaInstagram,FaFacebook,FaTwitter,FaGoogle,FaSkype} from 'react-icons/fa';
import { delay, motion } from "framer-motion";
export const Login = () => {
  return (
    <motion.div className='login'
    initial={{ x: 20,opacity:-10 }} 
    animate={{ x: 0 ,opacity:1}} 
    transition={{
      duration:5,
    type: "spring",
    stiffness: 100,
    damping: 15
    }}>
            <div className='Loginhere'>
            <h1>Login Here</h1>
        </div>
        <div className='login-form'>
            <input type='text' placeholder='Emaili Daxil Edin'></input>
            <input type='password' placeholder='Sifrenizi Daxil Edin'></input>
            <button>Login</button>
        </div>
        <div className='yazilar'>
            <span>Don't have an account?</span>
            <a href='#'>Click Here</a>
        </div>
        <div className='iler'>
            <span>Login With</span>
            <div className='salam'>
            <a href='#'><FaInstagram/></a>
            <a href='#'><FaFacebook/></a>
            <a href='#'><FaTwitter/></a>
            <a href='#'><FaGoogle/></a>
            <a href='#'><FaSkype/></a></div>
        </div>
    </motion.div>
  )
}                                                                                               


