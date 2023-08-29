import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignIn, setIsSignIn] =useState(true);

    const toggleSignIn =()=>{
        setIsSignIn(!isSignIn);
    }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        />
      </div>
      <form className="p-12 absolute bg-black text-white w-3/12  my-28 mx-auto left-0 right-0 bg-opacity-80">
        <h1 className="text-3xl my-4 font-semibold ">{isSignIn?"Sign In":"Sign Up"}</h1>
        {
            !isSignIn&&<input className="p-3 my-2 w-full  bg-zinc-800" type="text" placeholder="Full Name"></input>
        }
        <input  className="p-3 my-2 w-full bg-zinc-800 text-gray-500" type="email" name="email" id="email" placeholder="Email or phone number" />
        <input
         className="p-3 my-2 w-full  bg-zinc-800"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <button className="p-2 my-4 bg-red-700 w-full font-semibold">{isSignIn?"Sign In":"Sign Up"}</button>
        <p className="text-xs my-2 p-2  text-zinc-300 cursor-pointer" onClick={toggleSignIn}>{isSignIn?"New to Netflix? Sign up now.":"Already Registered? Sign In"}</p>
      </form>
    </div>
  );
};

export default Login;
