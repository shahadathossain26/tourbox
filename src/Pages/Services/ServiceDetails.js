import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import serviceImage from '../../assets/second_banner3.jpg'
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { id, name, image } = useLoaderData();
    console.log(id, name, image)
    return (
        <div>
            <div className='w-full relative'>

                <div className='w-full h-full top-0 left-0 absolute bg-gradient-to-br from-black via-black-100 opacity-30'>

                </div>

                <div className='w-full h-full flex flex-col justify-center items-center absolute top-0 left-0'>
                    <div className='w-full absolute top-0 left-0'>
                        <Header></Header>

                    </div>

                    <div className='text-white text-3xl md:text-4xl lg:text-8xl font-bold banner-text'>Service</div>

                </div>
                <img className='w-[100vw]' src={serviceImage} alt="" />
            </div>
        </div>
    );
};

export default ServiceDetails;