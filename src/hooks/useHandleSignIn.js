// import React from 'react';
// import { validate } from '../utiles/validate';

// const useHandleSignIn = () => {
//     const message = validate(
//         email.current.value,
//         password.current.value,
//         name?.current?.value
//       );
//       setErrorMessage(message);
//       if (message) return;
  
//       if (!isSignIn) {
//         createUserWithEmailAndPassword(
//           auth,
//           email.current.value,
//           password.current.value
//         )
//           .then((userCredential) => {
//             // Signed in
//             const user = userCredential.user;
//             updateProfile(user, {
//               displayName: name?.current?.value,
//               photoURL: PHOTO_URL,
//             })
//               .then(() => {
//                 // Profile updated!
//                 // ...
//                 const { uid, email, displayName, photoURL } = auth.currentUser;
//                 dispatch(
//                   addUser({
//                     uid: uid,
//                     email: email,
//                     displayName: displayName,
//                     photoURL: photoURL,
//                   })
//                 );
//               })
//               .catch((error) => {
//                 setErrorMessage(error.message);
//               });
//           })
//           .catch((error) => {
//             // const errorCode = error.code;
//             // const errorMessage = error.message;
//             setErrorMessage("Email already used");
//             // ..
//           });
//       } else {
//         signInWithEmailAndPassword(
//           auth,
//           email.current.value,
//           password.current.value
//         )
//           .then((userCredential) => {
//             // Signed in
//             const user = userCredential.user;
//             // ...
//           })
//           .catch((error) => {
//             // const errorCode = error.code;
//             // const errorMessage = error.message;
//             setErrorMessage("Invalid User");
//           });
//       }
// }

// export default useHandleSignIn;
