import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/portofolio'>Portofolio</Link>
            </li>
            <li>
              <Link to='/blog'>Blogs</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar