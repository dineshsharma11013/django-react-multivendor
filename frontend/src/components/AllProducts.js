import React from 'react'
import SingleProduct from './SingleProduct';
import { useState, useEffect } from 'react';

const AllProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    getProducts()
  },[])
  const getProducts = ()=>{
    fetch('http://127.0.0.1:8000/api/products/')
    .then((response)=>response.json())
    .then((data)=>{console.log(data.results)
      setProducts(data.results)
    }
      )
  }
  
  return (
    <main className='mt-4'>
        <div className='container'>
        <h3 className="mb-4">All Products </h3>
    <div className='row'>
    {
      products.map((prod, index)=><SingleProduct key={index} product={prod} />)
    }    


      </div>
        </div>
    </main>
  )
}

export default AllProducts
