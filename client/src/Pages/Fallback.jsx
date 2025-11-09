import React from "react";
import "../css/Fallback.css"
import { NavLink } from "react-router-dom";

const Fallback = ()=>{
     return(
        <>
          <div className="fallback">
              <h1>Page <span>Not</span> Found!</h1>
              <NavLink to="/" className="back-btn"><i className="ri-arrow-left-s-fill"></i> Go Back</NavLink>
          </div>
        </>
     );
};

export default Fallback;