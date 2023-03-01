import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, image, comment, email } = review;
    return (
        <div className="card bg-base-100">
            <div className="card-body">
                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-24 rounded-full  ring-offset-base-100 ring-offset-2">
                            <img src={image} alt='ReviewerPhoto' />
                        </div>
                    </div>
                    <div className='ml-5'>
                        <h2 className="card-title font-bold text-2xl">{name}</h2>
                        <p className='text-[14px]'>{email}</p>
                    </div>
                </div>
                <p className='ml-28'>{comment}</p>

            </div>
        </div>
    );
};

export default ReviewCard;