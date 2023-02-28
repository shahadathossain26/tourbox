import React from 'react';
import subscribeImage from '../../../assets/subscribe.jpg'

const Subscribe = () => {
    return (
        <div className='mt-20 relative'>
            <div className='w-full h-full top-0 left-0 absolute bg-gradient-to-b from-black via-black opacity-30'>

            </div>
            <img className='w-full h-[500px] ' src={subscribeImage} alt="" />
            <div className='w-full h-full flex flex-col justify-center items-center absolute top-0 left-0'>
                <h2 className=' text-white text-2xl md:text-3xl lg:text-5xl font-semibold'>Register to get alerts for best deals!</h2>
                {/* <p className='text-white mt-5 lg:text-xl text-center w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laudantium quae fugiat quos officia doloremque architecto! Error modi cumque sequi fuga doloremque consectetur, quia cum, officia, repellendus repellat mollitia reprehenderit?</p> */}
                <input className='mt-10 text-center px-5 py-3 md:1/4 lg:w-1/2 bg-transparent border border-none text-white' type="email" placeholder='Enter Your Email' />
                <hr className='border border-white w-1/2' />
                <button className='border border-primary mt-5 bg-primary text-white px-10 py-2 rounded-full font-bold'>I'm In</button>
            </div>
        </div>
    );
};

export default Subscribe;