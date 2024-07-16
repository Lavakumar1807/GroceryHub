import React, { useEffect } from "react";
import { useState } from "react";
import  {supabase} from "./SupabaseClient";

const Card = ({product})=>{
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = async () => {
    const {data:{user}} = await supabase.auth.getUser();
    const userId = user.id; 
    const productId = product.id; 
    try {
      const { data, error } = await supabase
        .from('cart')
        .insert([{ user_id: userId, product_id: productId, quantity}]);
      
      if (error) {
        throw error;
      }
      alert("Item added to cart")
    } catch (error) {
      console.error('Error adding to cart:', error.message);
    }
  }
  const decquantity = ()=>{
    if(quantity<=1){
       setQuantity(1)
    }
    else{
     setQuantity(quantity-1)
    }
  }
  const incquantity = ()=>{
    setQuantity(quantity+1)
  }
    
    return (
      <div className="card">
         <div className="productimage">
           <img src={product.image}/>
         </div>
          <div className="productinfo">
             <h3>{product.name}</h3>
             <p>{product.type}</p>
             {product.State=="Solid" ?
             <p>Rs.{product.price} /kg</p>
             : <p>Rs.{product.price} /lt</p>
             }
              <p>Quantity : <button className="quantity" onClick={decquantity}>-</button> {quantity} <button className="quantity" onClick={incquantity}>+</button></p>
          </div>
          <div className="cardbtn">
              <button id="addtocart" onClick={handleAddToCart}>Add to cart</button>
          </div>
      </div>
    )
}

export default Card;