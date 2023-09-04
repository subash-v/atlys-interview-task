import React from 'react';
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
export default function index() {
  return (
    <section className="bg-[#000]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <img className="w-8 h-8 mb-10" src={logo} alt="logo" />
        <div
          className="w-full bg-[#27292D] rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 border-[#C5C7CA] border "
        >
          <div className="p-6 ">
            <div className=" font-bold text-[#6B6C70] text-sm text-center">
            SIGN UP
            </div>
            <div className=" font-bold text-[#FFFFFF] text-xl text-center mb-10">
            Create an account to continue
            </div>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-[#C5C7CA]"
                >
                  Email 
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-[#27292D] border border-[#35373B] text-[#fff] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Enter your email "
                  required={true}
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-[#C5C7CA]"
                >
                  Username
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-[#27292D] border border-[#35373B] text-[#fff] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Choose a preferred username"
                  required={true}
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-[#C5C7CA]"
                  >
                    Password
                  </label>
                  <div className=" text-xs font-medium text-[#C5C7CA] cursor-pointer">
                    Forgot password?
                  </div>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Choose a strong password"
                  className="bg-[#27292D] border border-[#35373B] text-[#fff] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required={true}
                />
              </div>
              <Link to='/feed'>
              <button
                type="submit"
                className="w-full text-white bg-[#4A96FF] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={(val)=>console.log(val)}
              >
                Continue
              </button>
              </Link>
              <p className="text-sm font-light text-[#7F8084] ">
              Already have an account?{" "} 
              <Link to='/'>
                <span
                  className="font-medium text-[#C5C7CA] hover:underline cursor-pointer "
                //   onClick={()=>props.history?.push("/signup")}
                >
                 Login →
                </span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
