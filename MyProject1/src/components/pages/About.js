import React from "react";
import { NavLink } from "react-router-dom";
import about from './about.png';
import Common from "./Common";

const About = () => {
  return (
    <>
     <Common 
     name="Welcome to About page"
     imgsrc={about}
     visit="/contact"
     btname="contact now"/>
    </>
  );
};


export default About;
