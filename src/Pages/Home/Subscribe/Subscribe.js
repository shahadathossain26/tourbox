import React from 'react';
import subscribeImage from '../../../assets/download.jpg'

const Subscribe = () => {
    return (
        <div className='mt-20 relative'>
            <div className='w-full h-full top-0 left-0 absolute bg-gradient-to-b from-black via-black opacity-30'>

            </div>
            <img className='w-full h-[500px] ' src={subscribeImage} alt="" />
            <div className='w-full h-full flex flex-col justify-center items-center absolute top-0 left-0'>
                <h2 className=' text-white text-[20] md:text-3xl lg:text-5xl font-semibold'>Travel Far Enough, You Meet Yourself</h2>
                <p className='text-white mt-5 lg:text-xl text-center w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laudantium quae fugiat quos officia doloremque architecto! Error modi cumque sequi fuga doloremque consectetur, quia cum, officia, repellendus repellat mollitia reprehenderit?</p>
                <button className='border border-primary mt-5 bg-primary text-white px-6 py-3 rounded font-bold'>Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;