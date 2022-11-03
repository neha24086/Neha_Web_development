import React from "react";
import { NavLink } from "react-router-dom";
// import Card from './Card';
import s1 from './s1.jpg';
const Card = (props) => {
        return (
         <>
         
          {/* <div className="my-5">
          <h1 className="tex-center">Our Services</h1>
          </div>
          <div className="container-fluid mb-5">
            <div className="row">
              <div className="col-10 mx-auto"></div>
            </div> */}
          <div className="col-md-4 col-10 mx-auto">
          <div className="card" >
  <img src={props.imgsrc} width="300" height="250" alt={props.imgsrc}></img>
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
</div>

         </>
        )
       }
       
       export default Card;