import React from "react";
import Cart from "./cart.png";
import { Link } from "react-router-dom";
const Welcome =()=>{
    return(
       <div className="welcome">
         <div className="intro">
            <h1>Grocery<span> Hub</span></h1>
            <div className="quote">
                <h4>" Bringing you the best from farm to table "</h4>
            </div>
            <div className="enter">
             <Link to="/login"><button >Login</button></Link>
             <Link to="/signup"> <button >Signup</button></Link>
            </div>
         </div>
         <div className="image">
            <img src={Cart}></img>
         </div>
       </div>
    )
}

export default Welcome;