import React from 'react';

const ServiceCard = ({ service }) => {
    const { name, image, price } = service;
    return (
        <div className="card card-compact bg-base-100 hover:shadow-2xl cursor-pointer border border-slate-100 mx-auto relative">
            <figure><img className='' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{name}</h2>
                <p className='border border-primary text-xl font-semibold px-2 py-1 w-[80px] rounded bg-primary text-white text-center absolute top-0 left-0'>${price}</p>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary text-white">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;