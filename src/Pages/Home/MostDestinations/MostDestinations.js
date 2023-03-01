import React from 'react';
import image1 from '../../../assets/most_destination_images/most_destination11.jpg'
import image2 from '../../../assets/most_destination_images/most_destination22.jpg'
import image3 from '../../../assets/most_destination_images/most_destination44.jpg'
import background from '../../../assets/most_destination_images/background.jpg';
import "./MostDestinations.css"

const MostDestinations = () => {
    return (
        <div className='lg:flex justify-between items-center mt-10 mx-10'>
            <div className='lg:w-1/2 lg:px-16 md_background' data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-5'>Most Destinations</h2>
                <p>“The world is a book and those who do not
                    travel read only one page.”</p>
                <p className='font-bold mb-3'>― Augustine of Hippo</p>
                <div className='grid grid-cols-2 gap-4'>
                    <span>America - 3</span>
                    <span>Indonesia - 3</span>
                    <span>Norway - 3</span>
                    <span>Turkey - 3</span>
                    <span>France - 3</span>
                    <span>Dubai - 3</span>
                    <span>Australia - 3</span>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-2 lg:gap-4 lg:w-3/4 mt-5' data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <div className='relative'>
                    <img className='h-[330px]' src={image1} alt="" />
                    <p className='absolute text-white bottom-4 left-5 lg:text-xl  font-semibold'>Vietnam</p>
                    <p className='absolute text-white bottom-4 right-5 invisible md:visible'>3 Tours</p>
                </div>
                <div className='relative'>
                    <img className='h-[330px]' src={image2} alt="" />
                    <p className='absolute text-white bottom-4 left-5 lg:text-xl  font-semibold'>Maldives</p>
                    <p className='absolute text-white bottom-4 right-5 invisible md:visible'>2 Tours</p>
                </div>
                <div className='relative'>
                    <img className='h-[330px]' src={image3} alt="" />
                    <p className='absolute text-white bottom-4 left-5 lg:text-xl  font-semibold'>China</p>
                    <p className='absolute text-white bottom-4 right-5 invisible md:visible'>3 Tours</p>
                </div>
            </div>
        </div>
    );
};

export default MostDestinations;