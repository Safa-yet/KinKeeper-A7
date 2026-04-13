import React from 'react';
import { Triangle } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className='text-5xl h-[80vh] flex justify-center items-center'>
                <Triangle height="150"
width="150" ></Triangle>
            </div>
    );
};

export default Loading;