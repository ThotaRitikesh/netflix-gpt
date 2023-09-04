import React from "react";
import { auth } from "../utiles/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);

  const Navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        Navigate("/");
      })
      .catch((error) => {
        Navigate("/error");
        // An error happened.
      });
  };

  return (
    <div className="w-screen absolute bg-gradient-to-b from-black z-40 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex">
          <img className="w-12 h-12 my-4" src={user?.photoURL} alt="usericon" />
          <button
            className="p-1 m-4  bg-red-700 w-auto"
            onClick={handleSignout}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
