import React from 'react'
import logo from '../logo.svg';
import SingleProduct from './SingleProduct';

const Categories = () => {
  return (
    <main className='mt-4'>
        <div className='container'>
        <h3 className="mb-4">All Categories </h3>
    <div className='row'>
     
    <SingleProduct title="Python Project" />
    <SingleProduct />


      </div>
        </div>
    </main>
  )
}

export default Categories
