import Link from 'next/link';
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const Socials = () => {
  return (
    <footer style={{backgroundColor:"#dadada"}}>
    <div className="w-full mt-16 mr-7 ml-5">
        <div className="flex justify-center">
            <a className='p-3 bg-white m-3' style={{borderRadius:"50%"}} href="https://github.com/balwinder18" target="_blank"><i className="text-8xl text-opacity-90 text-black">
                  <FaGithub/>
                </i></a>
            <a className='p-3 bg-white m-3' style={{borderRadius:"50%"}} href="https://www.linkedin.com/in/balwinder-singh-32a884254" target="_blank"><i className="text-8xl text-opacity-90 text-black">
                 <FaLinkedin/>
                </i></a>
                <a className='p-3 bg-white m-3' style={{borderRadius:"50%"}} href="https://leetcode.com/u/Balwinder_sb/" target="_blank"><i className="text-8xl text-opacity-90 text-black">
                <SiLeetcode/>
                </i></a>
            
            <a className='p-3 bg-white m-3' style={{borderRadius:"50%"}} href="https://www.google.com" target="_blank"><i className="text-8xl text-opacity-90 text-black">
                <FaTwitter/>
                </i></a>
            
        </div>

        
       
        
    </div>
   
</footer>
  )
}

export default Socials