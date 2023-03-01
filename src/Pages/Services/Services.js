import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';
import serviceImage from '../../assets/second_banner3.jpg'
import '../Home/Banner/Banner.css'
import Footer from '../Shared/Footer/Footer';
import useTitle from '../../Hooks/useTitle';

const Services = () => {
    const [services, setServices] = useState([]);
    useTitle("Services")

    useEffect(() => {
        fetch('https://tourbox-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='w-full relative'>

                <div className='w-full h-full top-0 left-0 absolute bg-gradient-to-br from-black via-black-100 opacity-30'>

                </div>

                <div className='w-full h-full flex flex-col justify-center items-center absolute top-0 left-0'>
                    <div className='w-full absolute top-0 left-0'>
                        <Header></Header>

                    </div>

                    <div className='text-white text-3xl md:text-4xl lg:text-8xl font-bold banner-text'>Services</div>

                </div>
                <img className='w-[100vw]' src={serviceImage} alt="" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mx-10'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;