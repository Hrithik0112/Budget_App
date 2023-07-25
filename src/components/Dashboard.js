import React from "react";
import ExpenseForm from "./ExpenseForm";

const Dashboard = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl text-green-600 pt-10 ml-10">
        Welcome Back ,
        <span className="text-white bg-green-300 font-semibold rounded-md px-3">User</span>
      </h1>
      <div className=" w-max flex mt-10 p-10 ">
        <h2 className="text-2xl mr-20 border border-black p-1">Total Budget</h2>
        <h3 className="text-2xl border border-black p-1">0 / 900</h3>
      </div>

      <ExpenseForm />
      {/* <div className="p-10 border-2 border-black w-max rounded-lg ml-10">
        <h2 className="text-3xl font-semibold italic -mt-3 mb-2">Sub- Budget</h2>
        <div>
          <h3 className="text-2xl p-2">
            Category :{" "}
            <input placeholder="like: Food ,Rent" className="border border-black"></input>
          </h3>
          <h3 className="text-2xl p-2">
            Budget :{" "}
            <input placeholder="0 Rs." type="number" className="border border-black ml-1"></input>
          </h3>
          <button className="border border-black bg-green-300 text-xl translate-x-80 p-2 rounded-lg">
            Add
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
