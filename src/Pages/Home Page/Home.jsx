import React from 'react';
import Hero from './Hero';
import Friends from './Friends';


const Home = () => {
        
    
    
    return (
        <div className='bg-base-100'>
            <div className='container-main py-8 '>
            <Hero></Hero>

            <Friends></Friends>
        </div>
        </div>
    );
};

export default Home;