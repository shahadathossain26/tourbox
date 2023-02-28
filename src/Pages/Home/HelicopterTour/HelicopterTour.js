import React from 'react';
import './HelicopterTour.css';
import image from '../../../assets/helocopter_tour_image/helocopter_tour.jpg'

const HelicopterTour = () => {
    return (
        <div className='helicopter_tour   mt-16 relative'>
            <img src={image} alt="" />

            <div className="card w-96 lg:w-[500px] px-5 bg-base-100 shadow-xl lg:shadow-none lg:absolute lg:top-10 lg:left-40 mx-auto mt-10 lg:mt-0">
                <div className="card-body">
                    <h2 className="card-title text-xl md:text-2xl lg:text-3xl  mb-10">Bell 206 Jet Ranger B 5 Passenger Helicopter Tour</h2>
                    <p className='lg:text-xl mb-10'>The Bell 206 B III JetRanger is a 5 place helicopter with an average cruise speed of 100 mph, range of 330 miles and an endurance of 3 hours and 15 minutes.</p>
                    <button className='border border-primary mt-5 bg-primary text-white px-6 py-3 rounded font-bold'>Purchase Now</button>
                </div>
            </div>

        </div>
    );
};

export default HelicopterTour;