import React, { useEffect, useState } from 'react';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10'>
            {
                services.map(service => <ServiceCard
                    key={service.id}
                    service={service}
                ></ServiceCard>)
            }
        </div>
    );
};

export default Services;