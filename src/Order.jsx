import React from "react";
import { supabase } from "./SupabaseClient";
import { useState,useEffect } from "react";
import Loader from "./Loader";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Order = ()=>{
    const [orders,setOrders] = useState(null);
    const [user, setUser] = useState(null);
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
        const fetchOrderedItems = async () => {
          if (!user) return;
    
          try {
            const { data, error } = await supabase
              .from('cart')
              .select(`
                id,
                user_id,
                product_id,
                quantity,
                order,
                products(*)
              `)
              .eq('user_id', user.id);
    
            if (error) {
              throw error;
            }
            setOrders(data.filter(item => item.order === true))
          } catch (error) {
            console.error('Error fetching cart items:', error.message);
          } finally {
            setLoading(false);
          }
        };
        if (user && user.id) {
          fetchOrderedItems();
        }
      }, [user]);

      
    if (loading) {
        return <Loader />;
      }
    return(
       <div className="order">
           <Navbar cartcheck="true"/>
           <h1 className="orderheader">Your Orders </h1>
           <div className="cartlist">
             {orders.length === 0 ? (
              <h2>No orders</h2>
              ) : (
            <>
              {orders.map((item) => (
              <div className="cart-item">
                <img src={item.products.image}></img>
                <div className="info">
                 <h3>{item.products.name}</h3>
                 {item.products.State=="Solid"?
                 <p>Price: Rs.{item.products.price}/kg</p> :
                <p>Price: Rs.{item.products.price}/lt</p>
                 }
                <p>Quantity : {item.quantity}</p>
                <p>Net Amount : Rs.{item.quantity*item.products.price}</p>
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

export default Order;