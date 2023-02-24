import React, { useEffect, useState } from 'react';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';


const LatestServices = () => {
    const [latestServices, setLatestServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setLatestServices(data))
    }, [])
    return (
        <div className='mt-5 md:mt-10 lg:mt-16'>
            <h2 className='text-center mb-10'><span className='text-xl md:text-2xl lg:text-3xl text-primary font-bold'><i>See My</i></span><br /><span className='text-2xl md:text-3xl lg:text-5xl font-semibold'>Latest Services</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10'>
                {
                    latestServices.slice(-3).map(latestService => <ServiceCard
                        key={latestService.id}
                        service={latestService}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default LatestServices;