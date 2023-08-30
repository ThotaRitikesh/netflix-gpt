import React, { useState, useRef } from "react";
import Header from "./Header";
import { validate } from "../utiles/validate";
import { auth } from "../utiles/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // GoogleAuthProvider,signInWithRedirect,getRedirectResult
} from "firebase/auth";

const Login = () => {
  
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  // const provider = new GoogleAuthProvider();

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
          console.log(user);
          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          setErrorMessage("Email already used");
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          setErrorMessage("Invalid User");
        });
    }
  };

  // const handleGoogleLogin=()=>{
  // signInWithRedirect(auth, provider);
  // getRedirectResult(auth)
  // .then((result) => {
  //   // This gives you a Google Access Token. You can use it to access Google APIs.
  //   const credential = GoogleAuthProvider.credentialFromResult(result);
  //   const token = credential.accessToken;

  //   // The signed-in user info.
  //   const user = result.user;
  //   console.log(user);
  //   // IdP data available using getAdditionalUserInfo(result)
  //   // ...
  // }).catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // setErrorMessage(errorMessage);
  //   console.log(errorMessage);
  //   // The email of the user's account used.
  //   // const email = error?.customData?.email;
  //   // console.log(email);
  //   // The AuthCredential type that was used.
  //   const credential = GoogleAuthProvider.credentialFromError(error);
  //   // ...
  // });
  // }

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
    setErrorMessage(null);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-12 absolute bg-black text-white w-3/12  my-28 mx-auto left-0 right-0 bg-opacity-80"
      >
        <h1 className="text-3xl my-4 font-semibold ">
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
        {/* <button onClick={handleGoogleLogin} className="p-2 my-4 bg-red-700 w-full font-semibold">login with google</button> */}
        <p
          className="text-xs my-2 p-2  text-zinc-300 cursor-pointer"
          onClick={toggleSignIn}
        >
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already Registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
