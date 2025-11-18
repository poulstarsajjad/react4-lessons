"use client"

import { useEffect, useState } from "react";
import Container from "../container/Container";
import axios from "axios";

function Product() {

    const [products , setProducts] = useState<Iproduct[]>([]);
    
    useEffect(()=>{
        axios.get("https://dummyjson.com/products")
        .then((result)=>{
            setProducts(result.data)
        })
    } , [])
  return (
    <Container>
      <div className="grid grid-col-3 justify-between ">
        <div>
            
        </div>
      </div>
    </Container>
  )
}

export default Product;
