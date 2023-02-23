import React from 'react';
import bannerImage from '../../../assets/banner_images/banner 3.jpg'
import Header from '../../Shared/Header/Header';

const Banner = () => {
    return (
        <div className='w-full relative mx-0'>

            <div className='w-full h-full top-0 left-0 absolute bg-gradient-to-br from-black via-black-100 opacity-30'>

            </div>

            <div className='w-full h-full flex flex-col justify-center items-center absolute top-0 left-0'>
                <div className='w-full absolute top-0 left-0'>
                    <Header></Header>

                </div>
                <div className='text-white text-xl md:text-3xl lg:text-4xl font-bold '><i>Let's Travel And</i></div>
                <div className='text-white text-3xl md:text-4xl lg:text-6xl font-bold'>Find Your Next Adventure</div>

            </div>
            <img className='w-full' src={bannerImage} alt="" />
        </div>
    );
};

export default Banner;