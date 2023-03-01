import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import registerImage from '../../assets/login_image 3.jpg'
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    useTitle("Register")

    const handleRegister = data => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User created successfully')
                console.log(data.name);
                navigate('/')
            })
            .catch(error => console.error(error))

    }
    return (
        <div className='w-full relative'>

            <div className='w-full h-full top-0 left-0 absolute bg-gradient-to-br from-black via-black-100 opacity-30'>

            </div>

            <div className='w-full h-full absolute top-0 left-0'>
                <div className='w-full absolute top-0 left-0'>
                    <Header></Header>

                </div>
                {/* <div className='text-white text-xl md:text-3xl lg:text-4xl font-bold '><i>Let's Travel And</i></div>
            <div className='text-white text-3xl md:text-4xl lg:text-6xl font-bold'>Find Your Next Adventure</div> */}
                <div className=' w-[385px] h-[460px] shadow-xl my-[450px] md:my-[600px] lg:my-[150px] border px-[29px] py-[25px] mx-auto'>
                    <h2 className='text-2xl text-center text-primary font-bold'>Register</h2>
                    <form onSubmit={handleSubmit(handleRegister)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" {...register("name")} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p role="alert" className='text-red-700'>{errors.email?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs mb-2">
                            <label className="label"><span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p role="alert" className='text-red-700'>{errors.password?.message}</p>}
                        </div>
                        <p className='mb-4 text-white font-bold'>Already have an account? <Link to='/login' className='text-primary font-bold '>Please Login</Link></p>



                        <button className="btn btn-primary text-white w-full mb-[11px]">Register</button>
                    </form>
                </div>

            </div>
            <img className='w-full' src={registerImage} alt="" />
        </div>
    );
};

export default Register;