import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='text-center py-7 lg:py-12 space-y-3'>
            <h1 className='text-3xl lg:text-5xl font-bold'>Friends to keep close in your life</h1>
            <p className='text-text-sec'>Your personal shelf of meaningful connections. Browse, tend, and nurture <br /> the
relationships that matter most.</p>

<button className='btn bg-pri-green text-white'><FaPlus /> Add a Friend</button>
            
        </div>
    );
};

export default Hero;