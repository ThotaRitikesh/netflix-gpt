import React, { useEffect, useRef, useState } from "react";
import { auth } from "../utiles/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utiles/store/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utiles/constants";
import { toggleGptSearchView } from "../utiles/store/gptSlice";
import { changeLanguage } from "../utiles/store/configSlice";

const Header = () => {
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);
  const user = useSelector((store) => store.user);
  const showLangOptions = useSelector((store) => store.gpt?.showGptSearch);

  const lang = useRef();

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
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
        Navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        Navigate("/");
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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
    setIsDropdownClicked(!isDropdownClicked);
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
        <img className="w-40 mx-auto md:mx-2" src={LOGO} alt="logo" />
        {user && (
          <ul className="text-white lg:flex gap-8 mt-5 hidden sm:hidden">
            <li
              className="cursor-pointer"
              onClick={() => Navigate("/nowplaying")}
            >
              Now Playing
            </li>
            <li
              className="cursor-pointer"
              onClick={() => Navigate("/toprated")}
            >
              Top Rated
            </li>
            <li
              className="cursor-pointer"
              onClick={() => Navigate("/upcoming")}
            >
              UpComing Movies
            </li>
            <li className="cursor-pointer" onClick={() => Navigate("/tvshows")}>
              Tv Shows
            </li>
          </ul>
        )}
      </div>
      {user && (
        <div className="flex justify-between">
          {showLangOptions && (
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
                className="material-symbols-outlined text-white cursor-pointer pt-5"
                onClick={handleDropDown}
              >
                expand_more
              </span>
            </div>
            {isDropdownClicked && (
              <div className="bg-black m-0 md:mr-5 bg-opacity-60 ">
                <h1 className=" text-white text-opacity-60 font-bold p-2 mx-2 rounded-xl">
                  {user.displayName}
                </h1>
                <button
                  className=" text-white text-opacity-60 font-bold p-2 mx-2 rounded-xl"
                  onClick={handleGptSearchClick}
                >
                  {showLangOptions ? "Home Page" : "GPT Search"}
                </button>
                <h1
                  className=" text-white text-opacity-60 font-bold p-2 mx-2 rounded-xl cursor-pointer"
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
