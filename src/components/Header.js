import React, { useEffect, useRef, useState } from "react";
import { auth } from "../utiles/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utiles/store/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utiles/constants";
import { changeLanguage } from "../utiles/store/configSlice";
import HeaderList from "./HeaderList";
import { addGptMovieResults } from "../utiles/store/gptSlice";

const Header = ({ path }) => {
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);
  const user = useSelector((store) => store.user);

  const lang = useRef();

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  if (path !== "/gptsearch") {
    dispatch(addGptMovieResults({ movieNames: null, movieResults: null }));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // User is signed out
        dispatch(removeUser());
        Navigate("/");
      } else {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // Navigate("/browse");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        Navigate("/error");
        // An error happened.
      });
  };

  const handleLanguageChange = () => {
    dispatch(changeLanguage(lang?.current?.value));
  };
  const handleDropDown = () => {
    setIsDropdownClicked(!isDropdownClicked);
  };
  return (
    <div className="w-screen h-16 absolute bg-gradient-to-b from-black z-40 flex justify-between">
      <div className="flex">
        <img
          className="w-40 mx-auto md:mx-2 cursor-pointer"
          src={LOGO}
          alt="logo"
          onClick={() => Navigate("/browse")}
        />
        {user && <HeaderList />}
      </div>
      {user && (
        <div className="flex justify-between">
          {path === "/gptsearch" && (
            <select
              className="m-4 mx-2 px-2 bg-black text-white rounded-lg"
              ref={lang}
              onClick={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES?.map((lang) => (
                <option key={lang?.identifier}>{lang?.name}</option>
              ))}
            </select>
          )}
          <div className="flex flex-col w-36">
            <div className="flex items-center">
              <img
                className="w-10 h-10 ml-3 mt-3 cursor-pointer"
                src={user?.photoURL}
                alt="usericon"
              />
              <span
                className="material-symbols-outlined text-white cursor-pointer pt-5  hover:text-red-700"
                onClick={handleDropDown}
              >
                expand_more
              </span>
            </div>
            {isDropdownClicked && (
              <div className="bg-black m-0 md:mr-5 bg-opacity-60 ">
                <h1 className=" text-white text-opacity-60 font-bold p-2 mx-2 rounded-xl  hover:text-red-700">
                  {user.displayName}
                </h1>
                <button
                  className=" text-white text-opacity-60 font-bold p-2 mx-2 rounded-xl  hover:text-red-700"
                  onClick={() => Navigate("/gptsearch")}
                >
                  GPT Search
                </button>
                <h1
                  className=" text-white text-opacity-60 font-bold p-2 mx-2 rounded-xl cursor-pointer  hover:text-red-700"
                  onClick={handleSignout}
                >
                  Sign Out
                </h1>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
