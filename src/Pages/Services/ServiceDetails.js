
import Header from '../Shared/Header/Header';
import { CiLocationOn } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";
import { IoPerson, IoTimeOutline } from "react-icons/io5";
import { useLoaderData } from 'react-router-dom';
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import Footer from '../Shared/Footer/Footer';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { _id, name, image, description, price, location, availability, duration, rating, departure, age, returnTime, departureTime, included, notIncluded } = useLoaderData();


    const imgbbKey = process.env.REACT_APP_imgbbKey;
    console.log(imgbbKey)

    const handleMyReview = data => {
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const review = {
                        name: name,
                        image: imgData.data.url,
                        comment: data.comment,
                        service_id: _id,
                        email: data.email,
                    }
                    console.log(review)
                    fetch('http://localhost:5000/reviews', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(review)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success('Product Added Successfully');

                        })
                }
            })



        // fetch('http://localhost:5000/reviews', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(review)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.acknowledged) {
        //             form.reset();
        //             alert('Review placed succesfully')
        //         }
        //     })
        //     .catch(error => console.error(error));

    }

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

                    <hr className='text-black border-[1px] border-black my-5 opacity-20 w-full lg:w-3/5' />
                    <p className='flex'><span className='font-bold md:text-[18px] lg:text-xl'>Included:</span> <span className='ml-12 md:ml-24 lg:ml-36 flex'><div className='grid grid-cols-2 gap-4'>{
                        included.map(include => <p className='flex justify-center items-center flex-'><TiTick className='text-2xl'></TiTick> <span> {include}</span></p>)
                    }</div></span></p>

                    <hr className='text-black border-[1px] border-black my-5 opacity-20 w-full lg:w-3/5' />
                    <p className='flex'><span className='font-bold md:text-[18px] lg:text-xl'>Not Included:</span> <span className='ml-12 md:ml-20 lg:ml-24 flex'><div className='grid grid-cols-2 gap-4'>{
                        notIncluded.map(include => <p className='flex justify-center items-center flex-'><ImCross className='text-[14px] mr-3'></ImCross> <span> {include}</span></p>)
                    }</div></span></p>

                    <hr className='text-black border-[1px] border-black my-5 opacity-20 w-full lg:w-3/5' />





                </div>
            </div >

            <div>
                {user?.email ?
                    <div className='w-[385px] h-[480px] shadow-xl my-[236px] border px-[29px] py-[25px] mx-auto'>
                        <h2 className='text-2xl text-center text-primary font-bold'>Login</h2>

                        <form onSubmit={handleSubmit(handleMyReview)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text font-bold">Name</span>
                                </label>
                                <input type="text" {...register("name")} className="input input-bordered w-full max-w-xs" />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text font-bold">Email</span>
                                </label>
                                <input type="text" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs bg-slate-200" value={user?.email} readOnly />
                                {errors.email && <p role="alert" className='text-red-700'>{errors.email?.message}</p>}
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text font-bold">Image</span>
                                </label>
                                <input type="file" {...register("image", { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs" />
                                {errors.image && <p role="alert" className='text-red-700'>{errors.image?.message}</p>}
                            </div>

                            <div className="form-control w-full  ">
                                <label className="label"><span className="label-text font-bold">Comment</span>
                                </label>
                                <textarea {...register("comment")} className="textarea textarea-bordered mb-5 h-28" placeholder="Write Your Comment"></textarea>
                                {/* <input type="text"  placeholder='Description' className="input input-bordered w-full "/> */}
                                {/* {errors.password && <p role="alert" className='text-red-700'>{errors.password?.message}</p>} */}
                            </div>



                            <button className="btn btn-primary w-full my-[15px] ">Login</button>

                        </form>
                    </div>
                    : <></>
                }
            </div>
            <Footer></Footer>
        </div >
    );
};

export default ServiceDetails;