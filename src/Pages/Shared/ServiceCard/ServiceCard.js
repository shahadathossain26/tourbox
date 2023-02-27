import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";
import { IoPerson, IoTimeOutline } from "react-icons/io5";
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, name, image, price, location, rating, availability, duration } = service;
    return (
        <div className="card card-compact  bg-base-100 hover:shadow-2xl cursor-pointer border border-slate-200 mx-auto relative">
            <PhotoProvider>
                <PhotoView src={image}>
                    <figure><img className=' md:h-72' src={image} alt="ServiceImage" /></figure>
                </PhotoView>
            </PhotoProvider>

            <div className="card-body">
                <h2 className="card-title text-2xl">{name}</h2>

                <p className='border border-primary text-xl font-semibold px-2 py-1 w-[80px] rounded bg-primary text-white text-center absolute top-0 left-0'>${price}</p>

                <div className='flex justify-between items-center mb-5'>
                    <p className='flex items-center'><CiLocationOn className='mr-1 text-primary'></CiLocationOn>{location}</p>

                    <p className='flex items-center'><AiFillStar className='mr-1 text-primary'></AiFillStar>{rating}</p>

                    <p className='flex items-center'><IoPerson className='mr-1 text-primary'></IoPerson>{availability}</p>

                    <p className='flex items-center'><IoTimeOutline className='mr-1 text-primary'></IoTimeOutline>{duration}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}><button className="btn btn-primary text-white">See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;