import React, { useState, useRef } from "react";
import { validate } from "../../utiles/validate";
import { auth } from "../../utiles/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../../utiles/store/userSlice";
import { BG_IMG_URL, LOGO, PHOTO_URL } from "../../utiles/constants";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButton = () => {
    const message = validate(
      email.current.value,
      password.current.value,
      name?.current?.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value,
            photoURL: PHOTO_URL,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              Navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          setErrorMessage("Email already used");
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
          Navigate("/browse");
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          setErrorMessage("Invalid User");
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
    setErrorMessage(null);
  };

  return (
    <>
      <div className="absolute z-40">
        <img
          className="w-40 mx-auto md:mx-2 cursor-pointer"
          src={LOGO}
          alt="logo"
        />
      </div>
      <div className="fixed">
        <img
          className="h-screen object-cover md:h-auto"
          src={BG_IMG_URL}
          alt="bg-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-12 absolute bg-black text-white w-full sm:w-2/3 lg:w-1/4 md:w-2/6  my-20 lg:my-28 mx-auto left-0 right-0 bg-opacity-80 pb-2 lg:pb-0"
      >
        <h1 className="text-xl md:text-3xl mb-4 font-semibold ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            className="p-3 my-2 w-full  bg-zinc-800"
            type="text"
            placeholder="Full Name"
          ></input>
        )}
        <input
          ref={email}
          className="p-3 my-2 w-full bg-zinc-800 text-gray-500"
          type="email"
          name="email"
          id="email"
          placeholder="Email or phone number"
        />
        <input
          ref={password}
          className="p-3 my-2 w-full  bg-zinc-800"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <p className="text-red-700 font-semibold">{errorMessage}</p>
        <button
          className="p-2 my-4 bg-red-700 w-full font-semibold"
          onClick={handleButton}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-xs my-2 p-2  text-zinc-300 cursor-pointer"
          onClick={toggleSignIn}
        >
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already Registered? Sign In"}
        </p>
      </form>
    </>
  );
};

export default Login;
