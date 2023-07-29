import React from 'react'
import SingleProduct from './SingleProduct';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

const AllProducts = () => {
  const [products, setProducts] = useState([])
  const [totalResult, setTotalResult] = useState(0)
  const baseUrl = "http://localhost:8000/api";

  useEffect(()=>{
    fetchData(baseUrl+'/products')
  },[])
  const fetchData = (pth)=>{
    console.log(pth)
    fetch(pth)
    .then((response)=>response.json())
    .then((data)=>{console.log(data.results)
      setProducts(data.results)
      setTotalResult(data.count)
    }
      )
  }

   function changeUrl(pth)
  {
    fetchData(pth)
  }
  
  var links = [];
  for(let i=1; i<=totalResult; i++)
  {
    links.push(<li className="page-item" key={i}><Link onClick={()=>changeUrl(baseUrl+`/products/?page=${i}`)} className="page-link" to={`/products/?page=${i}`}>{i}</Link></li>)
  }



  return (
    <main className='mt-4'>
        <div className='container'>
        <h3 className="mb-4">All Products {totalResult} </h3>
    <div className='row'>
    {
      products.map((prod, index)=><SingleProduct key={index} product={prod} />)
    }    
      </div>
<ul className="pagination">
  {links}
</ul>


        </div>
    </main>
  )
}

export default AllProducts
