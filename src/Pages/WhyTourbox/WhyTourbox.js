import React from 'react';
import ballonImage from '../../assets/hot_air_ballon.png';
import image1 from '../../assets/why_tourbox_images/image1.jpg'
import image2 from '../../assets/why_tourbox_images/image2.jpg'
import image3 from '../../assets/why_tourbox_images/image3.jpg'

const WhyTourbox = () => {
    return (
        <div>
            <div className='text-center mt-10 lg:mt-16'>
                <img className='w-[70px] md:w-[80px] lg:w-[90px] mx-auto mb-5' src={ballonImage} alt="" />
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Why Tourbox?</h2>
                <p className='text-center mt-5 px-16 md:px-40 lg:px-96 text-xl'>For the best 10 years, we've continually ranked #1 for service, excellence and outstanding value. This year is no different – and we’d like to take an opportunity to thank you for making our last 10 years so amazing.</p>
            </div>

            <div className='md:flex justify-between items-center mt-10  bg-slate-100'>
                <div className='px-[80px] py-16'>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-3'>Experience Tourbox like never before</h2>
                    <p>From Central Park on down to Lady Liberty - and everything around and in between - here are the key things to see on a visit to Tourbox.</p>
                    <button className='border border-primary mt-5 bg-primary text-white px-6 py-3 rounded font-bold'>See All Tours</button>
                </div>
                <div>
                    <img src={image1} alt="" />
                </div>
            </div>

            <div className='mt-10 md:flex justify-between items-center bg-slate-100'>
                <div>
                    <img className='w-[1200px]' src={image2} alt="" />
                </div>
                <div className='mx-[80px] py-16'>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-3'>Start your adventure today</h2>
                    <p>Positive Vibes, People, Places, Food, Transit etc. There are more than few reasons why people love Tourbox. Tour with us and make your own Adventure.</p>
                    <button className='border border-primary mt-5 bg-primary text-white px-6 py-3 rounded font-bold'>See All Tours</button>
                </div>
            </div>

            <div className='md:flex justify-between items-center mt-10  bg-slate-100'>
                <div className='px-[80px] py-16'>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-3'>See it all</h2>
                    <p>This is the best way to experience New York City. You can sit back and relax as your tour guide shows you New York City in the most efficient way possible.</p>
                    <button className='border border-primary mt-5 bg-primary text-white px-6 py-3 rounded font-bold'>See All Tours</button>
                </div>
                <div>
                    <img className='w-[1200px]' src={image3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default WhyTourbox;