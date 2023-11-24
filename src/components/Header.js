import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute w-screen px-4 py-2 bg-gradient-to-b from-black z-50 flex justify-between ">
      <img
        className="w-48 bg-transparent"
        alt="logo"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      ></img>
      <div className="flex justify-end ">
        <h2 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-900 text-2xl text-left m-4 p-3">
          {user?.displayName}
        </h2>
        {user && (
          <button
            className="font-bold  bg-red-700 text-white rounded-lg h-14 p-4 m-4 hover:bg-red-400"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
