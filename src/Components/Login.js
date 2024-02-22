import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignForm, setIsSignForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignForm(!isSignForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bglogo"
        />
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignForm && <input
          type="text"
          placeholder="Name"
          className="p-4 m-4 w-full bg-gray-700"
        />}
        {!isSignForm && <input
          type="number"
          placeholder="Mobile Number"
          className="p-4 m-4 w-full bg-gray-700"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 m-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-4 w-full bg-gray-700 "
        />
        <button className="p-4 m-4 bg-red-700 w-full">
          {isSignForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 text-white cursor-pointer" onClick={toggleSignInForm}>
         {isSignForm ?  "New to Netflix? Sign Up Now" : "Already registered ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;