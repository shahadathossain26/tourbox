import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import { CiLocationOn } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";
import { IoPerson, IoTimeOutline } from "react-icons/io5";
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { _id, name, image, description, price, location, availability, duration, rating, departure, age, returnTime, departureTime, included, notIncluded } = useLoaderData();
    console.log(_id, name, image)
    return (
        <div>
            <div className='w-full relative'>

                <div className='w-full h-full top-0 left-0 absolute bg-gradient-to-br from-black via-black-100 opacity-30'>

                </div>

                <div className='w-full h-full flex flex-col justify-center items-center absolute top-0 left-0'>
                    <div className='w-full absolute top-0 left-0'>
                        <Header></Header>

                    </div>

                    <div className='text-white text-4xl md:text-6xl lg:text-8xl font-bold banner-text'>{name}</div>

                </div>
                <img className='w-full h-[100vh]' src={image} alt="" />
            </div>
            <div>
                <div className='mx-5 md:mx-10 lg:mx-16  mt-16'>
                    <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold mb-10'>{name} <span className='text-primary text-xl md:text-2xl lg:text-3xl ml-5'>${price}</span><span className='  md:text-xl lg:text-2xl font-semibold opacity-70'>/person</span></h2>
                    <div className="card bg-base-100 shadow-xl border border-slate-200  mb-10">
                        <div className="card-body md:flex-row justify-between">
                            <div className='flex flex-col justify-center items-center mb-10 md:mb-0'>
                                <CiLocationOn className='text-5xl text-primary'></CiLocationOn>
                                <p className='font-semibold opacity-70'>{location}</p>
                            </div>

                            <div className='flex flex-col justify-center items-center mb-10 md:mb-0'>
                                <AiFillStar className='text-5xl text-primary'></AiFillStar>
                                <p className='font-semibold opacity-70'>Rating {rating}</p>
                            </div>

                            <div className='flex flex-col justify-center items-center mb-10 md:mb-0'>
                                <IoPerson className='text-5xl text-primary'></IoPerson>
                                <p className='font-semibold opacity-70'>Availability {availability}</p>
                            </div>

                            <div className='flex flex-col justify-center items-center'>
                                <IoTimeOutline className='text-5xl text-primary'></IoTimeOutline>
                                <p className='font-semibold opacity-70'>{duration}</p>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-4xl font-bold mb-5'>Details</h3>
                    <p className='text-justify opacity-70 mb-16'>{description}</p>

                    <hr className='text-black border-[1px] border-black mb-5 opacity-20 w-full lg:w-3/5' />
                    <p><span className='font-bold md:text-[18px] lg:text-xl'>Departure:</span> <span className='ml-16 md:ml-28 lg:ml-40'>{departure}</span></p>

                    <hr className='text-black border-[1px] border-black my-5 opacity-20 w-full lg:w-3/5' />
                    <p><span className='font-bold md:text-[18px] lg:text-xl'>Age:</span> <span className='ml-28 md:ml-40 lg:ml-56'>{age}</span></p>

                    <hr className='text-black border-[1px] border-black my-5 opacity-20 w-full lg:w-3/5' />
                    <p><span className='font-bold md:text-[18px] lg:text-xl'>Departure Time:</span> <span className='ml-5 md:ml-16 lg:ml-28'>{departureTime}</span></p>

                    <hr className='text-black border-[1px] border-black my-5 opacity-20 w-full lg:w-3/5' />
                    <p><span className='font-bold md:text-[18px] lg:text-xl'>Return Time:</span> <span className='ml-12 md:ml-24 lg:ml-36'>{returnTime}</span></p>





                </div>
            </div >
        </div >
    );
};

export default ServiceDetails;