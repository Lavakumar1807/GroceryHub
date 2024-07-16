import React from 'react';
import {Link} from 'react-router-dom';
import { IoMenuOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useState } from 'react';
import { FaShoppingBag } from "react-icons/fa";

const Navbar = ({ onSearch ,cartcheck}) =>{
    const [ check , setCheck] = useState(true);
    const [search ,setSearch ] = useState('');
   
    const handleinput =(e)=>{
         e.preventDefault();
         setSearch(e.target.value);
    }
    const searching =()=>{
       onSearch(search);
    }

    const handlefalse =()=>{
      setCheck(false);
    }
    const handletrue =()=>{
      setCheck(true);
    }
    let cartchecking = false ;
    if(!cartcheck){
       cartchecking = false;
    }
    else{
      cartchecking=true
    }
    return(
       <div className='navbar'>
         { check==true ?
         <Link to="/home/main" ><button className="menubtn" onClick={handlefalse}><IoMenuOutline className='menuicon' /></button></Link>
         : <Link to="/home"><button className="menubtn" onClick={handletrue}><RxCross1 className='menuicon' /></button></Link>
         }
         <div className='logo'>
           <h1>Grocery<span> Hub</span></h1>
          </div>
          
          {cartchecking==false ?
          <>
          <div className='search'>
           <input type="text" placeholder='Search item...'autoComplete='off' value={search} onChange={(e)=>handleinput(e)}></input>
           <button id="searchbtn" onClick={searching}>Search</button>
          </div>
          <div className='navright'>
            <Link to="/home/cart"><FaShoppingCart id="cart" title="Cart"/></Link>
            <Link to='/home/order'><FaShoppingBag id="orderbag" title="Orders"/></Link>
          </div>
          </>
          :<></>
          }
       </div>
    )
}

export default Navbar;