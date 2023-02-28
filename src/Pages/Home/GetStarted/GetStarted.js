import React from 'react';
import getStartedImage from '../../../assets/city_tour.png'

const GetStarted = () => {
    return (
        <div className='mt-16 md:flex'>
            <div>
                <img className='mx-auto md:ml-28' src={getStartedImage} alt="" />
            </div>

            <div className='ml-40'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-3'><span className='text-primary'>Get started</span> with Tourbox</h2>
                <p className='mb-5'>Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset.</p>
                <p className='mb-5'><span className='border border-primary w-[50px] px-4 py-2 bg-primary text-white rounded-[100%] text-xl'>1</span> Select your preferred tours</p>
                <p className='mb-5'><span className='border border-primary w-[50px] px-4 py-2 bg-primary text-white rounded-[100%] text-xl'>2</span> Purchase tickets and options</p>
                <p className='mb-5'><span className='border border-primary w-[50px] px-4 py-2 bg-primary text-white rounded-[100%] text-xl'>3</span> Pick them directly from your office</p>
            </div>
        </div>
    );
};

export default GetStarted;