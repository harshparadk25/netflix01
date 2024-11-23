import React, { useRef, useState } from 'react'
import Header from './Header';
import {checkValidData} from "../utils/validate";
import { createUserWithEmailAndPassword  , signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { auth } from '../utils/firebase';

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';




const Login = () => {
  
  
  const [errorMessage , setErrorMessage] = useState(null);
  const [isSignIn , setIsSignIn] = useState(true);
  const dispatch = useDispatch()

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"_" + errorMessage)
    // ..
  });
    }
    else{
      
     signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "_ "+errorMessage);
  });
    }
  }
  const toggleIsSignIn = () =>{
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img  className=' w-full h-full' src='https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_large.jpg' alt='logo'/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className=' mt-36  w-4/12 absolute p-12 bg-black mx-auto right-0 left-0 text-white rounded-xl bg-opacity-80 '>
        <h1 className='font-bold text-3xl py-4' >{isSignIn ? "Sign In" : "Sign up"}</h1>

            {!isSignIn && (<input className=' bg-black p-4 my-3 w-full bg-opacity-30 border border-white rounded-md' ref={name} type="text"  placeholder='Username'/>)}

            <input className=' bg-black p-4 my-3 w-full bg-opacity-30 border border-white rounded-md'
            ref={email} type="text" placeholder='Email or mobile number'/>

            <input className='p-4 my-3 w-full bg-black bg-opacity-30 border border-white rounded-md'
            ref={password} type='password' placeholder='Password'/>

            <p className='text-red-500 font-bold text-lg py-2 '>{errorMessage}</p>

            <button className='p-4 my-6 w-full bg-red-700' onClick={handleButtonClick}>{isSignIn ? "Sign In" : "Sign up"}</button>




            <p className='text-gray-500'>{isSignIn ? "New to Netflix?" : "Already a user?"} <span className='text-white cursor-pointer hover:border-b-2' onClick={toggleIsSignIn}>{isSignIn ? "Sign up now" : "Sign in now"}</span></p>
            
            <p className=' py-5 text-sm text-gray-600'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='text-red-700'>Learn more.</span></p>
        </form>
     </div>
  )
}

export default Login; 