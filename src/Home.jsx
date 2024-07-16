import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Products from "./Products";
import { useState } from "react";
import  Item from "./Item";

const Home = ()=>{
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return(
        <div className="home">
            <Navbar onSearch={handleSearch}/>
            {searchQuery=="" ?
            <Products type="all" />
            : <Item title={searchQuery}/>
            }
            <Footer />
        </div>
    )
}

export default Home;