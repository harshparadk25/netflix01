import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom";
import {auth} from "../utils/firebase"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser , removeUser } from '../utils/userSlice';
import { toggleGptSearch } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configue';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut=()=>{
    
     signOut(auth)
     .then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
      }

      useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid , email , displayName , photoURL} = user;
              dispatch(addUser({uid:uid, email:email, displayName:displayName , photoURL:photoURL

              })
            );
            navigate("/browse");
              // ...
            } else {
              // User is signed out
              dispatch(removeUser());
              navigate("/");
              
              // ...
            }
          });

          return ()=> unsubscribe();
    },[]);

    const handleGPTClick=()=>{
      dispatch(toggleGptSearch());
    };

    const languageChange=(e)=>{
      dispatch(changeLanguage(e.target.value));
    }

  return (
    <div className='w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between' >
        <img className='w-48 ' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='netflix-logo'/>

        {user &&
         (<div className='flex p-4 mr-4'>
          {showGptSearch && <select className='p-2 bg-gray-900 text-white m-2 rounded-lg' onChange={languageChange}>
            <option value="en">English</option>
            <option value="hindi">Hindi</option>
            <option value="spanish">Spanish</option>
          </select>}
          <button className='py-1 px-4 mx-4 my-2 bg-purple-500 text-white rounded-lg ' onClick={handleGPTClick}>{showGptSearch? "Home page" : "GPT Search"}</button>
          <img className='h-10 w-10 mr-4' src='https://imgs.search.brave.com/Y3VYcZExZtR89T9vI3dKXCRRVZ5bJNbt7ZMXEaa2jJo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvbmV0/ZmxpeC1wcm9maWxl/LXBpY3R1cmVzLTEw/MDAteC0xMDAwLTg4/d2tkbWpyb3Jja2Vr/aGEuanBn' alt='user-logo'/>
          <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
        </div>)}
    </div>
    
  );
};

export default Header