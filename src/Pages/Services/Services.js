import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';
import serviceImage from '../../assets/services_1.jpg'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
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
                    <div className='text-white text-xl md:text-3xl lg:text-4xl font-bold '><i>See My All</i></div>
                    <div className='text-white text-3xl md:text-4xl lg:text-6xl font-bold'>Services</div>

                </div>
                <img className='w-full' src={serviceImage} alt="" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10 mt-10'>
                {
                    services.map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;