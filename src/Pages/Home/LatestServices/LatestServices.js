import React, { useEffect, useState } from 'react';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';
import { BsBoxArrowInRight } from "react-icons/bs";
import { Link } from 'react-router-dom';


const LatestServices = () => {
    const [latestServices, setLatestServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/latestServices')
            .then(res => res.json())
            .then(data => setLatestServices(data))
    }, [])
    return (
        <div className='mt-5 md:mt-10 lg:mt-16'>
            <h2 className='text-center mb-10'><span className='text-xl md:text-2xl lg:text-3xl text-primary font-bold'><i>See My</i></span><br /><span className='text-2xl md:text-3xl lg:text-5xl font-semibold'>Latest Services</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10'>
                {
                    latestServices.slice(-3).map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='mt-5 text-center'>
                <Link to='/services'><button className='border border-primary bg-primary text-white px-6 py-3 rounded font-bold mt-5'>See All Services <BsBoxArrowInRight className=' inline-block text-2xl'></BsBoxArrowInRight></button></Link>
            </div>
        </div>
    );
};

export default LatestServices;