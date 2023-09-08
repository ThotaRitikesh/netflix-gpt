import React, { useEffect, useRef } from "react";
import { auth } from "../utiles/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utiles/store/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utiles/constants";
import { toggleGptSearchView } from "../utiles/store/gptSlice";
import { changeLanguage } from "../utiles/store/configSlice";

const Header = () => {
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
  };

  const handleLanguageChange = () => {
    dispatch(changeLanguage(lang?.current?.value));
  };

  return (
    <div className="w-screen h-16 absolute bg-gradient-to-b from-black z-40 flex justify-between">
      <img className="w-40 mx-2" src={LOGO} alt="logo" />

      {user && (
        <div className="flex">
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
          <button
            className="bg-green-950 text-white text-opacity-60 font-bold px-2 m-2 rounded-xl"
            onClick={handleGptSearchClick}
          >
            {showLangOptions ? "Home Page" : "GPT Search"}
          </button>
          <img
            className="w-12 h-12 my-2 cursor-pointer mr-6"
            src={user?.photoURL}
            alt="usericon"
            onClick={handleSignout}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
