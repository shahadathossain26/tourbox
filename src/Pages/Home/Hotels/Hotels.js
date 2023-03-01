import React from 'react';
import hotel1 from '../../../assets/hotel_images/hotel1.jpg'
import hotel2 from '../../../assets/hotel_images/hotel2.jpg'
import hotel3 from '../../../assets/hotel_images/hotel3.jpg'
import hotel4 from '../../../assets/hotel_images/hotel4.jpg'
import { AiFillStar } from "react-icons/ai";

const Hotels = () => {
    return (
        <div className='mt-16'>
            <div className='text-center mb-10'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Popular Hotels and Accommodations</h1>
                <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-10'>
                <div className='relative' data-aos="fade-up"
                    data-aos-duration="2000">
                    <div className='w-full h-full top-0 left-0 absolute bg-gradient-to-t from-black via-black-100 opacity-30'>

                    </div>
                    <img className='w-full' src={hotel1} alt="" />
                    <div className=' bg-primary font-white absolute top-5 right-5 px-3 py-2 text-white rounded'>8.9</div>
                    <div className='absolute bottom-5 left-5'>
                        <div className='flex text-white'>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                        </div>
                        <h3 className='text-xl font-bold text-white'>Mariott Hotel</h3>
                    </div>
                </div>

                <div className='relative' data-aos="fade-down"
                    data-aos-duration="2000">
                    <div className='w-full h-full top-0 left-0 absolute bg-gradient-to-t from-black via-black-100 opacity-30'>
                    </div>

                    <img className='w-full' src={hotel2} alt="" />
                    <div className=' bg-primary font-white absolute top-5 right-5 px-3 py-2 text-white rounded'>8.4</div>
                    <div className='absolute bottom-5 left-5'>
                        <div className='flex text-white'>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                        </div>
                        <h3 className='text-xl font-bold text-white'>Mariott Hotel</h3>
                    </div>
                </div>

                <div>
                    <div className='relative' data-aos="fade-up"
                        data-aos-duration="2000">
                        <div className='w-full h-full top-0 left-0 absolute bg-gradient-to-t from-black via-black-100 opacity-30'>
                        </div>
                        <img className='w-full' src={hotel3} alt="" />
                        <div className=' bg-primary font-white absolute top-5 right-5 px-3 py-2 text-white rounded'>7.9</div>
                        <div className='absolute bottom-5 left-5'>
                            <div className='flex text-white'>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                            </div>
                            <h3 className='text-xl font-bold text-white'>Mariott Hotel</h3>
                        </div>

                    </div>

                </div>

                <div className='relative' data-aos="fade-down"
                    data-aos-duration="2000">
                    <div className='w-full h-full top-0 left-0 absolute bg-gradient-to-t from-black via-black-100 opacity-30'>
                    </div>
                    <img className='w-full' src={hotel4} alt="" />
                    <div className=' bg-primary font-white absolute top-5 right-5 px-3 py-2 text-white rounded'>9.0</div>
                    <div className='absolute bottom-5 left-5'>
                        <div className='flex text-white'>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                        </div>
                        <h3 className='text-xl font-bold text-white'>Mariott Hotel</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotels;