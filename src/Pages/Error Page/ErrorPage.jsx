import React from 'react';
import errorImg from '../../assets/connection faild error.gif'
import { IoArrowBackCircle } from 'react-icons/io5';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const nevigate = useNavigate()
    return (
        <div className=' flex flex-col justify-center items-center pb-12'>
            <img src={errorImg} alt="" />
            <h1 className='text-3xl'>Oops! Page not found</h1>
            <p className='my-4'>We can’t seem to find the page you re looking for. It might have been removed or the link is broken.</p>
            <button className=' btn btn-xl rounded-full btn-success' onClick={()=>nevigate(-1)}><IoArrowBackCircle />Back</button>
           
        </div>
    );
};

export default ErrorPage;