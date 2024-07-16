import React, { useEffect, useState } from "react";
import { supabase } from "./SupabaseClient";
import Card from "./Card";
import Loader from "./Loader";

const Item =({title})=>{
    const [item ,setItem] = useState();
    const [error,setError] = useState(null);
    const itemname = title.toUpperCase().trim();

    useEffect(()=>{
          const fetching = async ()=>{
            const {data,error} = await supabase
             .from("products")
             .select('*')
            //console.log(name);
            const newdata = data.filter(item => item.name.toUpperCase().includes(itemname))
            
            if(error){
                setError("Could not fetch data");
                setItem(null)
                console.log(error);
            }
             else{
                setItem(newdata);
                setError(null);
             }
          }
          fetching();

    },[itemname])
    return(
        <div className="item">
           {error && <p>{error}</p>}
           { item ? (
                <div className="products">
                    {item.map( product =>(
                       <Card product = {product} /> 
                    ))}
                </div>
           ) :
             <Loader />
           }
        </div>
    )
}

export default Item;