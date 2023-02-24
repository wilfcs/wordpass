import React from 'react'
import logo from "../images/logo192.png"

const Signup = () => {
  return (
    <div className=" lg:w-5/6 p-10 mx-auto font-montserrat overflow-hidden">
      <div className=" text-center text-4xl font-semibold">Sign Up</div>
      <div className=" flex flex-col sm:flex-row mt-8">
        <div className="flex sm:w-1/2 mb-5 sm:mb-0">
          <div className=" my-auto">
            <img
              src={logo}
              alt="Signup :)"
              width="500"
              height="300"
            />
          </div>
        </div>
        <div className=" sm:w-1/2 sm:ml-10 my-auto">
          <input
            className=" w-full p-3 border-2 rounded-lg m-1"
            type="text"
            placeholder="Your Name"
          ></input>
          <input
            className=" w-full p-3 border-2 rounded-lg m-1"
            type="text"
            placeholder="Your Email"
          ></input>
          <input
            className=" w-full p-3 border-2 rounded-lg m-1"
            type="text"
            placeholder="Your Mobile Number"
          ></input>
          <input
            className=" w-full p-3 border-2 rounded-lg m-1"
            type="password"
            placeholder="Password"
          ></input>
          <input
            className=" w-full p-3 border-2 rounded-lg m-1"
            type="password"
            placeholder="Confirm Password"
          ></input>
          <button
            type="submit"
            className=" w-full mt-3 py-3 bg-blue-600 rounded-lg text-white text-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup