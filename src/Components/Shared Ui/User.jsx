import React from "react";
import { Link } from "react-router";

const User = ({ user }) => {
  const { id,name, picture, days_since_contact, status, tags }= user
  return (
    <Link to={`/user/${id}`} className="card bg-base-500  shadow-xl items-center justify-center hover:-translate-y-1 duration-500 transition">
      <figure className="px-10 pt-10">
        <img 
          src={picture}
          alt="Shoes"
          className="rounded-full"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-text-sec font-semibold">{days_since_contact}d ago
        </p>
        <div className="space-x-1.5">{
            tags.map(tag=><div  className="badge badge-soft badge-success uppercase text-sm rounded-2xl">{tag}</div>)
            }
          
        </div>
        <div className={`badge ${status === "overdue"? "badge-error" : status === "almost due"? "badge-warning" : "badge-success" } rounded-2xl`}>{status}</div>
      </div>
    </Link>
  );
};

export default User;
