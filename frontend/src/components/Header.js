import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-success text-white">
    <div className="container">
      <Link className="navbar-brand" to="/">Market Place</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categories">Categories</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/checkout">My Cart (4)</Link>
          </li>

          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              My Account
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/customer/register">Register</Link></li>
              <li><Link className="dropdown-item" to="/customer/login">Login</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li><Link className="dropdown-item" to="/customer/dashboard">Dashboard</Link></li>
              <li><Link className="dropdown-item" href="#">Logout</Link></li>
            </ul>
          </li>
         
        </ul>
      
      </div>
    </div>
  </nav>
  )
}

export default Header
