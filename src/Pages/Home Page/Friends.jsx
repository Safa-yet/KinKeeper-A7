import React from 'react';
import useFriendsApi from '../../Hooks/useFriendsApi';
import { data } from 'react-router';
import User from '../../Components/Shared Ui/User';
import { Triangle } from 'react-loader-spinner';
import Loading from '../../Components/Shared Ui/Loading';


const Friends = () => {
    const {api,setApi,loading} = useFriendsApi();
    // console.log( 'this is freidn',api);
   
    return (
        <div className='space-y-14'>
           {/* Status Bar */}
           <div className='grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            <div className='text-center  border rounded-lg  py-7 border-black/10'>
                <h1 className='text-3xl text-pri-green font-semibold'>10</h1>
                <p className='text-text-sec'>Total Friends</p>
            </div>
            <div className='text-center  border rounded-lg  py-7 border-black/10'>
                <h1 className='text-3xl text-pri-green font-semibold'>10</h1>
                <p className='text-text-sec'>Total Friends</p>
            </div>
            <div className='text-center  border rounded-lg  py-7 border-black/10'>
                <h1 className='text-3xl text-pri-green font-semibold'>10</h1>
                <p className='text-text-sec'>Total Friends</p>
            </div>
            <div className='text-center  border rounded-lg  py-7 border-black/10'>
                <h1 className='text-3xl text-pri-green font-semibold'>10</h1>
                <p className='text-text-sec'>Total Friends</p>
            </div>

           </div>

<div className='divider'></div>
           {/* Friends Sections */}

           <div>
            <h1 className='text-2xl font-semibold'>Your Friends </h1>
            
            {
                loading? <Loading></Loading>:<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                    api.map((user)=><User key={user.id} user={user}></User>)
                }
            </div>
            }
            
            
           </div>
        </div>
    );
};

export default Friends;