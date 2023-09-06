import React, { useEffect } from "react";
import { auth } from "../utiles/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utiles/userSlice";
import { LOGO } from "../utiles/constants";

const Header = () => {
  const user = useSelector((store) => store.user);

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

  return (
    <div className="w-screen h-16 absolute bg-gradient-to-b from-black z-40 flex justify-between">
   <img className="w-40 mx-2" src={LOGO} alt="logo" />

      {user && (
        <div className="flex">
          <img className="w-12 h-12 my-2 cursor-pointer mr-6" src={user?.photoURL} alt="usericon" onClick={handleSignout} />
          {/* <button
            className="p-1 m-2  bg-red-700 w-auto mr-6"
            onClick={handleSignout}
          >
            Sign out
          </button> */}
        </div>
      )}
    </div>
  );
};

export default Header;
