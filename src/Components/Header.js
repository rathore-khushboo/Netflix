import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user)
  const handleSignOut = ()=>{
    signOut(auth).then(()=>{
      navigate("/")
      
    }).catch((error)=>{
      navigate("/error")
    })
  }
  return (
    <div className="fixed top-0 left-0 right-0 px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img
        className="w-48 h-auto"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (<div className="flex items-center">
        <img
          className="w-10 h-auto"
          src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-dyrp6bw6adbulg5b.webp"
          alt=""
        />
        <button onClick={handleSignOut} className="ml-4 text-red-700 font-bold">(SignOut)</button>
      </div>)}
    </div>
  );
};

export default Header;
