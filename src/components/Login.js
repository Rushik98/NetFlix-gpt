import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState();
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Netflix"
        ></img>
      </div>

      <form className="absolute text-white w-3/12 bg-black mx-auto my-36 right-0 left-0 p-12 bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-xl m-2 py-4">
          {isSignInForm ? "Sign Up" : "Sign In"}
        </h1>
        {isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 bg-gray-700 w-full rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 bg-gray-700 w-full rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 bg-gray-700 w-full rounded-lg"
        />
        <button className="p-3 m-2 bg-red-600 w-full rounded-lg">
          {isSignInForm ? "Sign Up" : "Sign In"}
        </button>
        <p className="m-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "Already a user? Sign In"
            : "New to Netflix? Sign Up Now"}
        </p>
      </form>
    </>
  );
};

export default Login;
