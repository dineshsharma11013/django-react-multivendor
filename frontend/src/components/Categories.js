import React from 'react'
import { useState, useEffect } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const Categories = () => {
  const baseUrl = "http://localhost:8000/api";
  const [categories, setCategories] = useState([])
  const [totalResult, setTotalResult] = useState(0)

  useEffect(()=>{
    fetchData(baseUrl+'/categories')
  },[])
  const fetchData = (pth)=>{
    console.log(pth)
    fetch(pth)
    .then((response)=>response.json())
    .then((data)=>{console.log(data.results)
      setCategories(data.results)
      setTotalResult(data.count)
    }
      )
  }

  function changeUrl(pth)
  {
    fetchData(pth)
  }
  
  var links = [];
  var limit =1;
  var totalLinks = totalResult/limit;
  for(let i=1; i<=totalLinks; i++)
  {
    links.push(<li className="page-item" key={i}><Link onClick={()=>changeUrl(baseUrl+`/categories/?page=${i}`)} className="page-link" to={`/categories/?page=${i}`}>{i}</Link></li>)
  }


  return (
    <main className='mt-4'>
        <div className='container'>
        <h3 className="mb-4">All Categories </h3>
    <div className='row'>
     
    {
      categories.map((cat, index)=>
      <div className='col-12 col-md-3 mb-2' key={index}>
    <div className="card" style={{width: '18rem'}}>
  <img src={logo} className="card-img-top" alt={cat.title} /><hr/>
  <div className="card-body">
    <h4 className="card-title"><Link to={`/category/${cat.title}/${cat.id}`}>{cat.title}</Link></h4>
    
  </div>
  <div className='card-footer'>
    
  <button className="btn btn-success btn-sm"><i className='fa fa-cart-plus'></i> </button>
        <button className="btn btn-danger btn-sm ms-1"><i className='fa fa-heart'></i></button>
  </div>
</div>

  </div> 
      )
    }  
      </div>
      <ul className="pagination">
  {links}
</ul>
        </div>
    </main>
  )
}

export default Categories
