import React, { useState } from "react";
import useFriendsApi from "../../Hooks/useFriendsApi";

import User from "../../Components/Shared Ui/User";
import { Triangle } from "react-loader-spinner";
import Loading from "../../Components/Shared Ui/Loading";

const Friends = () => {
  const { api, loading } = useFriendsApi();


  const [search,setSearch] =useState('');
  // console.log( 'this is freidn',api);


  const filterUser = api.filter((user)=>user.name.toLowerCase().includes(search.toLowerCase()))

  console.log(filterUser);
  console.log(search);

  return (
    <div className="space-y-14">
      {/* Status Bar */}
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="text-center  border rounded-lg  py-7 border-black/10 bg-white">
          <h1 className="text-3xl text-pri-green font-semibold">
            {api.length}
          </h1>
          <p className="text-text-sec">Total Friends</p>
        </div>
        <div className="text-center  border rounded-lg  py-7 border-black/10 bg-white">
          <h1 className="text-3xl text-pri-green font-semibold">3</h1>
          <p className="text-text-sec">On Track</p>
        </div>
        <div className="text-center  border rounded-lg  py-7 border-black/10 bg-white">
          <h1 className="text-3xl text-pri-green font-semibold">6</h1>
          <p className="text-text-sec">Need Attention</p>
        </div>
        <div className="text-center  border rounded-lg  py-7 border-black/10 bg-white">
          <h1 className="text-3xl text-pri-green font-semibold">12</h1>
          <p className="text-text-sec">Interactions This Month</p>
        </div>
      </div>

      <div className="divider"></div>
      {/* Friends Sections */}

      <div>
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold mb-6">Your Friends </h1>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" onChange={(i)=> setSearch(i.target.value)}/>
          </label>
        </div>



        {loading ? (
          <Loading></Loading>
        ) : (
          <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filterUser.map((user) => (
              <User key={user.id} user={user}></User>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Friends;
