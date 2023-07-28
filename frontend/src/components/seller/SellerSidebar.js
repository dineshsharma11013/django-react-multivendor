import React from 'react'
import { Link } from 'react-router-dom'

const SellerSidebar = () => {
  return (
    <ul className="list-group">
                <Link to="/seller/dashboard" className="list-group-item">Dashboard</Link>
                <Link to="/seller/products" className="list-group-item">Products</Link>
                <Link to="/seller/add-product" className="list-group-item">Add Product</Link>
                <Link to="/customer/orders" className="list-group-item">Orders</Link>
                <li className="list-group-item">Customers</li>
                <li className="list-group-item">Reports</li>
                <li className="list-group-item text-danger">Log Out</li>
                </ul>
  )
}

export default SellerSidebar