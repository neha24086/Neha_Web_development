import React from "react";
import { NavLink } from "react-router-dom";
import abc from './abc.jpg';
import Common from './Common';

const Home = () => {
  return (
    <>
     <Common 
     name="Grow your business with"
     imgsrc={abc}
     visit="/service"
     btname="Get Started"/>
    </>
   
  );
};

export default Home;
