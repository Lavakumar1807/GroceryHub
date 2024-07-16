import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState,useEffect } from "react";
import { supabase } from "./SupabaseClient";
import Loader from "./Loader";

const Cart = ()=>{
    const [user, setUser] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchUser = async () => {
        try {
          const { data: { user }, error } = await supabase.auth.getUser();
          if (error) {
            throw error;
          }
          setUser(user);
        } catch (error) {
          console.error('Error fetching user:', error.message);
          setUser(null);
        }
      };
  
      fetchUser();
    }, []);
  
    useEffect(() => {
      const fetchCartItems = async () => {
        if (!user) return;
  
        try {
          const { data, error } = await supabase
            .from('cart')
            .select(`
              id,
              user_id,
              product_id,
              quantity,
              products(*)
            `)
            .eq('user_id', user.id);
  
          if (error) {
            throw error;
          }
  
          setCartItems(data);
        } catch (error) {
          console.error('Error fetching cart items:', error.message);
        } finally {
          setLoading(false);
        }
      };
  
      // Only fetch cart items if user is authenticated
      if (user && user.id) {
        fetchCartItems();
      }
    }, [user]);
       
  
    if (loading) {
      return <Loader />;
    }
  
  const orderItem = async (cartItemid)=>{
    try{
    const { data, error } = await supabase
    .from('cart')
    .update({ order: true })
    .eq('id', cartItemid)
    .select()

    alert("Item ordered")
    if(error) throw error
    }catch (error) {
      console.error('Error ordering item from cart:', error.message);
    }
  }
  
    const removeFromCart = async (cartItemId) => {
      try {
        const { error } = await supabase
          .from('cart')
          .delete()
          .eq('id', cartItemId)
          .eq('user_id', user.id);
  
        if (error) throw error;
      } catch (error) {
        console.error('Error removing item from cart:', error.message);
      }
    };
   
    return(
        <div className="cart">
           <Navbar cartcheck="true"/>
           <h1 id="cartheader">Your Cart \_/-</h1>
         <div className="cartlist">
             {cartItems.length === 0 ? (
              <h2>Your cart is empty.</h2>
              ) : (
            <>
              {cartItems.map((item) => (
              <div className="cart-item">
                <img src={item.products.image}></img>
                <div className="info">
                 <h3>{item.products.name}</h3>
                 {item.products.State=="Solid"?
                 <p>Price: Rs.{item.products.price}/kg</p> :
                <p>Price: Rs.{item.products.price}/lt</p>
                 }
                 <p>Quantity : {item.quantity}</p>
                 <button id="removeitem" onClick={()=>removeFromCart(item.id)}>Remove</button>
                 <button id="order" onClick={()=>orderItem(item.id)}>Order</button>
                 </div>
             </div>
            ))}
            </>
           )}
        </div>
            <Footer />
        </div>
    )
}

export default Cart;