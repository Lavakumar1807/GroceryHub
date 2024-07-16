import React from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cart from "./Cart";
import Login from "./Login";
import Welcome from "./Welcome";
import Signup from "./Signup";
import Home from "./Home";
import Main from "./Main";
import Fruits from "./Fruits";
import Dairy from "./Dairy";
import Vegetables from "./Vegetables";
import Grains from "./Grains";
import Spices from "./Spices";
import Oils from "./Oils";
import Sanitizers from "./Sanitizers";
import Order from "./Order";

const App = ()=> {
  return (
    <div className="app">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />}/>
            <Route path="/home" element={<Home />} />
            <Route path="/home/cart" element={<Cart/>}/>
            <Route path="/home/main/fruits" element={<Fruits/>}/>
            <Route path="/home/main/dairy" element={<Dairy />}/>
            <Route path="/home/main/vegetables" element={<Vegetables />}/>
            <Route path="/home/main/grains" element={<Grains />}/>
            <Route path="/home/main/spices" element={<Spices/>}/>
            <Route path="/home/main/oils" element={<Oils />}/>
            <Route path="/home/main/sanitizers" element={<Sanitizers />}/>
            <Route path="/login"element={<Login/>}/>
            <Route path="/signup"element={<Signup/>}/>
            <Route path="/home/main" element={< Main />}/>
            <Route path="/home/order" element={<Order />}/>
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
