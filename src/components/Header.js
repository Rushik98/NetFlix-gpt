import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" alt="logo" src={Logo}></img>
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
