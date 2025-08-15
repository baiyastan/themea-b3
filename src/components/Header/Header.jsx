import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <nav className='nav container'>
        <img className='logo' src="https://www.themealdb.com/images/logo.svg" alt="" />
        <div className='nav-right'>
            <Link className='active' to='/'>Home</Link>
            <Link to='/api'>Api</Link>
            <input className='search' type="text" placeholder='Search' />
        </div>
      </nav>
    </header>
  )
}

export default Header
