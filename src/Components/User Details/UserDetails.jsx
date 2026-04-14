import React, { useState } from "react";
import { useParams } from "react-router";
import useFriendsApi from "../../Hooks/useFriendsApi";
import { MdOutlineSnooze } from "react-icons/md";
import Loading from "../Shared Ui/Loading";
import { FaArchive, FaTrashAlt } from "react-icons/fa";
import { TbBrush } from "react-icons/tb";
import callImg from '../../assets/call.png';
import textImg from '../../assets/text.png';
import videoImg from '../../assets/video.png';

const UserDetails = () => {
  const { id } = useParams();
  console.log(id);
  const { api, setApi, loading } = useFriendsApi();

  if (loading) {
    return (
      <>
        <Loading></Loading>
      </>
    );
  }

  // const [findUser, setFindUser]= useState();

  const matchUser = api.find((user) => user.id === parseInt(id));
  // console.log(matchUser.name);
  const {name, picture, days_since_contact, tags, status, bio,goal,next_due_date } = matchUser;

  return (
    <div className="bg-gray-300 py-12">
      <div className="container-main mx-auto grid lg:grid-cols-3 gap-6">
        {/* left sie */}
        <div className="flex flex-col gap-4   ">
          <div className="card bg-base-100  shadow-sm ">
            <figure className="px-10 pt-8">
              <img src={picture} alt="Shoes" className="rounded-full" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="text-xl font-semibold">{name}</h2>
              <p className="text-text-sec font-semibold">
                {days_since_contact}d ago
              </p>
              <div className="space-x-1.5">
                {tags.map((tag) => (
                  <div className="badge badge-soft badge-success uppercase text-sm rounded-2xl">
                    {tag}
                  </div>
                ))}
              </div>
              <div
                className={`badge ${status === "overdue" ? "badge-error" : status === "almost due" ? "badge-warning" : "badge-success"} rounded-2xl`}
              >
                {status}
              </div>
              <p className="text-text-sec">{bio}</p>
            </div>
          </div>

          <button className="bg-white btn rounded-lg">
            <MdOutlineSnooze />
            Snooze 2 Weeeks{" "}
          </button>
          <button className="bg-white btn rounded-lg">
            <FaArchive /> Archive
          </button>
          <button className="bg-white btn rounded-lg text-[#EF4444]">
            <FaTrashAlt />
            Delete
          </button>
        </div>
        {/* Right side */}
        <div className="lg:col-span-2">
          <div className="grid  lg:grid-cols-3 lg:grid-rows-7 gap-6">
            <div className="lg:row-span-2 col-span-3 ">
              <div className="grid lg:grid-cols-3 lg:gap-6 gap-3">
                <div className=" bg-white py-5 lg:py-12 text-center rounded-lg  flex flex-col justify-center">
                  <h1 className="text-3xl font-semibold text-pri-green">{days_since_contact}</h1>
                  <p className="text-text-sec">Day Since Contact</p>
                </div>
                <div className=" bg-white py-5 lg:py-12 text-center rounded-lg  flex flex-col justify-center">
                  <h1 className="text-3xl font-semibold text-pri-green">{goal}</h1>
                  <p className="text-text-sec">Goal (Days)</p>
                </div>
                <div className=" bg-white py-5 lg:py-12 text-center rounded-lg  flex flex-col justify-center">
                  <h1 className="text-3xl font-semibold text-pri-green">{next_due_date}</h1>
                  <p className="text-text-sec">Next Due</p>
                </div>
              
              </div>
            </div>

            <div className="lg:row-span-2 col-span-3 bg-white flex justify-between py-8 px-6 rounded-lg items-center">
              <div>
                <h1 className="lg:text-xl  font-semibold mb-3 text-pri-green">Relationship Goal</h1>

                <p className="text-sm lg:text-lg text-text-sec">
                  Contact Everry <b className="text-black">{goal} days</b>
                </p>
              </div>
              <button className="btn">Edit</button>
            </div>
            <div className="lg:row-span-3 col-span-3  bg-white rounded-lg py-8 px-6">
              <h1 className="lg:text-xl font-semibold mb-5 text-pri-green">Quick Check-In</h1>
              <div className="grid lg:grid-cols-3 gap-6 ">
                
                 
                <button className=" btn h-full flex-col py-2 lg:py-4">
                  <img src={callImg} alt="" srcset="" className="mx-auto mb-2.5"/>
                  <p className="font-semibold">Call</p>
                </button>
                <button className=" btn h-full flex-col  py-2 lg:py-4">
                  <img src={textImg} alt="" srcset="" className="mx-auto mb-2.5"/>
                  <p className="font-semibold">Text</p>
                </button>
                <button className=" btn h-full flex-col py-2 lg:py-4">
                  <img src={videoImg} alt="" srcset="" className="mx-auto mb-2.5"/>
                  <p className="font-semibold">Video</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
