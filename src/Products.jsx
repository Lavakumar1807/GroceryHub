import React from "react";
import  {supabase} from "./SupabaseClient";
import { useState,useMemo } from "react";
import Card from "./Card";
import Loader from "./Loader";

const Products =({type})=>{
    const [error,setError] = useState(null);
    const [ products,setProducts] = useState(null);
   
    useMemo(()=>{
       
        const fetching = async ()=>{
             const { data ,error} = await supabase
             .from('products')
             .select('*');
             
             const filterproduct=data.filter((product)=>product.type==type);
             //console.log(data);
             if(error){
                setError("Could not fetch data");
                setProducts(null);
                console.log(error);
             }
              else if(type=="all"){
                setProducts(data);
                setError(null);
             }
             else{
                setProducts(filterproduct);
                setError(null);
             }
        }
        fetching();

    },[])
    return (
        <div className="products">
           {error && <p>{error}</p>}
           
           { products ? (
                <div className="products">
                    {products.map( product =>(
                       <Card product = {product} /> 
                    ))}
                </div>
           )
           :
             <Loader />
          }
        </div>
    )
}

export default Products;