import React from 'react';
import { useParams } from 'react-router';

const UserDetails = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            This is User deatails
        </div>
    );
};

export default UserDetails;