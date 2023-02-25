import React from 'react';
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className=' relative w-full bg-primary min-h-[100px] mt-60 px-[50px] py-[20px] flex  flex-col justify-center items-center'>

                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>

                <ul className="social_icons relative flex justify-center items-center my-3">

                    <li className=' list-none'><a className='text-[32px] text-white inline-block mx-3 duration-500 hover:translate-y-[-10px]' href="/"><BsFacebook></BsFacebook></a></li>

                    <li className=' list-none'><a className='text-[32px] text-white inline-block mx-3 duration-500 hover:translate-y-[-10px]' href="/"><BsTwitter></BsTwitter></a></li>

                    <li className=' list-none'><a className='text-[32px] text-white inline-block mx-3 duration-500 hover:translate-y-[-10px]' href="/"><BsLinkedin></BsLinkedin></a></li>

                    <li className=' list-none'><a className='text-[32px] text-white inline-block mx-3 duration-500 hover:translate-y-[-10px]' href="/"><BsInstagram></BsInstagram></a></li>
                </ul>
                <ul className='relative flex justify-center items-center my-3'>
                    <li className=' list-none'><a className='text-[20px] no-underline opacity-75 hover:opacity-100 text-white inline-block mx-3 duration-500 hover:translate-y-[-10px]' href="/">Home</a></li>

                    <li className=' list-none'><a className='text-[20px] no-underline opacity-75 hover:opacity-100 text-white inline-block mx-3 duration-500 hover:translate-y-[-10px]' href="/services">Services</a></li>

                    <li className=' list-none'><a className='text-[20px] no-underline opacity-75 hover:opacity-100 text-white inline-block mx-3 duration-500 hover:translate-y-[-10px]' href="/blog">Blog</a></li>
                </ul>
                <p className='text-white text-center mb-3 text-[18px]'>Copyright © 2023 - All right reserved by Tourbox Industries Ltd</p>
            </footer>
        </div>
    );
};

export default Footer;