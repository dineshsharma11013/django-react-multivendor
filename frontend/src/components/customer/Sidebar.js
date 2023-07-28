import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <ul className="list-group">
                <Link to="/customer/dashboard" className="list-group-item">Dashboard</Link>
                <Link to="/customer/orders" className="list-group-item">Orders</Link>
                <li className="list-group-item">Wishlist</li>
                <li className="list-group-item">Profile</li>
                <Link to="/customer/addreses" className="list-group-item">Address</Link>
                <li className="list-group-item text-danger">Log Out</li>
                </ul>
  )
}

export default Sidebar