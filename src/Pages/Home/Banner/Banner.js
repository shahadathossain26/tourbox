import React from 'react';
import bannerImage from '../../../assets/banner_images/banner 3.jpg'
import bannerVideo from '../../../assets/video.mp4'
import Header from '../../Shared/Header/Header';
import './Banner.css'

const Banner = () => {
    return (
        <div className='w-full relative'>

            <div className='w-full h-full top-0 left-0 absolute bg-gradient-to-br from-black via-black-100 opacity-30'>

            </div>

            <div className='w-full h-full flex flex-col justify-center items-center absolute top-0 left-0'>
                <div className='w-full absolute top-0 left-0'>
                    <Header></Header>

                </div>
                <div className='text-primary text-xl md:text-3xl lg:text-4xl font-bold '><i>Let's Travel And</i></div>
                <div className='text-3xl md:text-4xl lg:text-7xl mt-1 md:mt-4 lg:mt-8 banner-text'>Find Your Next Adventure</div>
                <a className='text-white no-underline text-[24px] border-2 border-white px-16 py-3 rounded-[50px] mt-4 md:mt-10 lg:mt-20 text-center' href="/">Explore</a>

            </div>
            <video autoPlay loop muted playsInline>
                <source src={bannerVideo} />
            </video>
        </div>
    );
};

export default Banner;