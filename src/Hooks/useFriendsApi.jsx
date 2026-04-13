import React, { useEffect, useState } from 'react';

const useFriendsApi = () => {
    const [api, setApi] = useState([]);
    const [loading, setLoading]= useState(true);


    useEffect(()=>{
         
        const dataCollect = async()=>{
            const res = await fetch("/friends.json");
            const data = await res.json();

            setTimeout(() => {
                setApi(data);
                setLoading(false)
                
            }, 1000);

        }

        dataCollect();

    },[])



    return {api,setApi,loading}
};

export default useFriendsApi;