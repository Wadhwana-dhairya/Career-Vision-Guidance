import React from "react";
import { NavLink } from "react-router-dom";

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="mypic" className="c_img" />
          <div className="c_info">
          <div>
            <span className="cat"> {props.title} </span>
          </div>
            <NavLink to={props.link} target="">
              <button style={{padding:4}}>Visit Now</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;