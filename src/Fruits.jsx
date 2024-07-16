import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Products from "./Products";
import { useState } from "react";
import Item from "./Item";

const Fruits = ()=>{
   const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };
    return(
        <div className="cart">
            <div className="cartlist">
            <Navbar onSearch={handleSearch}/>
            {searchQuery==="" ?
            <Products type="Fruits" />
            : <Item title={searchQuery}/>
            }
            <Footer />
            </div>
        </div>
    )
}

export default Fruits;