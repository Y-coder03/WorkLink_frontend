import React from 'react';
import logo from "../auth/img1.jpg";
import img1 from "../auth/CC - GAC - LOGO_V0.webp";
import "./styles.css";


const Sidebar = () => {
  return (
    <>
      <div className="w-1/2 flex flex-col items-center justify-center gap-4" id="sidebar" >
          <img class="" src={logo} alt="logo" />
          <h1 class="text-white font-bold"> Cloud Counselage Pvt. Ltd </h1>
          <p class="text-white font-bold"> Welcome to IAC Cloud Counselage Pvt. Ltd. </p>
          <img class="w-48 h-30 " src={img1} alt="gift career" />
      </div>
    </>
  )
}



export default Sidebar