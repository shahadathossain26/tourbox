import React from 'react';
import Header from '../Shared/Header/Header';
import loginImage from '../../assets/login_image 3.jpg'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    return (
        <div className='w-full relative'>

            <div className='w-full h-full top-0 left-0 absolute bg-gradient-to-br from-black via-black-100 opacity-30'>

            </div>

            <div className='w-full h-full  absolute top-0 left-0'>
                <div className='w-full absolute top-0 left-0'>
                    <Header></Header>

                </div>
                {/* <div className='text-white text-xl md:text-3xl lg:text-4xl font-bold '><i>Let's Travel And</i></div>
                <div className='text-white text-3xl md:text-4xl lg:text-6xl font-bold'>Find Your Next Adventure</div> */}
                <div className='w-[385px] h-[480px] shadow-xl my-[236px] border px-[29px] py-[25px] mx-auto'>
                    <h2 className='text-2xl text-center text-primary font-bold'>Login</h2>

                    <form onSubmit={handleSubmit()}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text font-bold">Email</span>
                            </label>
                            <input type="text" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p role="alert" className='text-red-700'>{errors.email?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p role="alert" className='text-red-700'>{errors.password?.message}</p>}
                        </div>



                        <button className="btn btn-primary w-full my-[15px] ">Login</button>
                        <p className='text-primary font-bold'>New to Tourbox? <span className='text-secondary'><Link className='text-white ' to='/register'>Create new account</Link></span></p>
                        <div className="divider mb-[25px] text-white">OR</div>
                        <button className="btn btn-outline btn-primary w-full">Continue With Goole</button>
                    </form>
                </div>

            </div>
            <img className='w-full' src={loginImage} alt="" />
        </div>
    );
};

export default Login;