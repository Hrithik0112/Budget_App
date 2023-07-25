import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="pt-10 ml-5">
        <h1 className="font-bold text-9xl text-green-600">Welcome,</h1>
        <h2 className="text-3xl italic">
          Kudos to you for taking the first step towards youre journey of
          <span className="bg-green-300 font-semibold text-4xl rounded-lg ml-1">
            {" "}
            Financial Freedom
          </span>
        </h2>
      </div>
      <div className="border border-4-black w-[560px] bg-green-100 p-10 mt-20 ml-14 rounded-lg ">
        <h3 className="text-4xl font-semibold italic">Start By creating Your Account,</h3>
        <div className="flex pt-10">
          <h4 className="text-3xl">Enter Your Name :</h4>
          <input
            placeholder="Enter Username..."
            className="rounded-lg ml-3 text-xl font-serif"
          ></input>
        </div>
        <Link to="/dashboard">
          <button className="text-xl bg-green-500 rounded-lg font-semibold p-2 mt-2 text-white">
            {" "}
            Create User
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
