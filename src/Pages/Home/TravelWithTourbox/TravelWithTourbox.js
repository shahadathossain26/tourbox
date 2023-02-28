import React from 'react';
import image1 from '../../../assets/travel_with_tourbox_images/image1.png'
import image2 from '../../../assets/travel_with_tourbox_images/image2.png'
import image3 from '../../../assets/travel_with_tourbox_images/image3.png'

const TravelWithTourbox = () => {
    return (
        <div className='mt-24'>
            <div className='text-center'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Why Travel with Tourbox?</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10 mt-10'>
                <div className="card bg-base-100 ">
                    <div className="card-body text-center">
                        <img className='w-[110px] mx-auto' src={image1} alt="" />
                        <h2 className="card-title mx-auto">Save Money</h2>
                        <p>Get special rates found nowhere else ipsum pellentesque habitant</p>
                    </div>
                </div>

                <div className="card bg-base-100 ">
                    <div className="card-body text-center">
                        <img className='w-[110px] mx-auto' src={image2} alt="" />
                        <h2 className="card-title mx-auto">Get Help</h2>
                        <p>You drive to adventures, we get it. We and our roadside assistance partners</p>
                    </div>
                </div>

                <div className="card bg-base-100 ">
                    <div className="card-body text-center">
                        <img className='w-[110px] mx-auto' src={image3} alt="" />
                        <h2 className="card-title mx-auto">Stay Safe</h2>
                        <p>We ensure the safety and security of all our customers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelWithTourbox;