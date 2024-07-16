import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import { CgProfile } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import { LuApple } from "react-icons/lu";
import { GiTomato } from "react-icons/gi";
import { GiMilkCarton } from "react-icons/gi";
import { FaPepperHot } from "react-icons/fa";
import { FaBowlRice } from "react-icons/fa6";
import { FaOilCan } from "react-icons/fa";
import { FaPumpSoap } from "react-icons/fa";
import { supabase } from "./SupabaseClient";
import { useNavigate } from "react-router-dom";

const Menu =()=>{
    let navigate = useNavigate();
    const [username,setUsername] = useState('')
    const handlesignout =async()=>{
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Error signing out:', error.message);
      } 
      navigate("/");
    }
    
    useEffect(()=>{
        const user = async ()=>{
           const {data:{user},error} = await supabase.auth.getUser();
           const index = user.email.indexOf('@');
           setUsername(user.email.substring(0,index).toUpperCase());
        }
        user();
    })

    return (
            <div className="dashboard">
                <div className="profileicon">
                 <CgProfile id="profile"/>
                  <h4>Hello {username}</h4>
                </div>
                <hr className="hr"/>

                <div className="menulist">
                   <Link to="/home" className="homelist">
                      <button className="homelist">
                       <AiFillHome className="menuicons"/>
                       <p>Home</p>
                      </button>
                    </Link>
                    <hr className="hr"/>
                    
                    <div className="filter">

                      <Link to="/home/main/fruits" className="homelist">
                      <button className="fruits">
                        <LuApple className="menuicons" />
                        <p>Fruits</p>
                      </button>
                      </Link>

                      <Link to="/home/main/dairy" className="homelist">
                      <button className="dairy">
                        <GiMilkCarton className="menuicons" />
                        <p>Dairy</p>
                      </button>
                      </Link>

                      <Link to="/home/main/vegetables" className="homelist">
                      <button className="vegetables">
                        <GiTomato className="menuicons" />
                        <p>Vegetables</p>
                      </button>
                      </Link>

                      <Link to="/home/main/grains" className="homelist">
                      <button className="grains">
                        <FaBowlRice className="menuicons" />
                        <p>Grains</p>
                      </button>
                      </Link>

                      <Link to="/home/main/spices" className="homelist">
                      <button className="spices">
                        <FaPepperHot className="menuicons" />
                        <p>Spices</p>
                      </button>
                      </Link>

                      <Link to="/home/main/oils" className="homelist">
                      <button className="oils">
                        <FaOilCan className="menuicons" />
                        <p>Oils</p>
                      </button>
                      </Link>

                      <Link to="/home/main/sanitizers" className="homelist">
                      <button className="sanitizers">
                        <FaPumpSoap className="menuicons" />
                        <p>Sanitizers</p>
                      </button>
                      </Link>
                    </div>
                     
                    <hr className="hr"/>


                </div>

                <div className="logout">
                    <button onClick={handlesignout}>Logout</button>
                </div>
            </div>

    )
}

export default Menu;