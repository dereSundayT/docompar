import React from 'react'
import {Link} from 'react-router-dom';
const NavBar = ({icon,title}) =>{
    return(
        <nav className='navbar bg-primary'>
        <h1>
          <i className={icon} /> {title} 
        </h1>
        <ul>
        <li><Link to='/history'>Home</Link></li>
        <li><Link to='/compare'>Compare</Link></li>
        <li><Link to='/logout'>Logout</Link></li>
        </ul>
      
       
      </nav>
    )
}
export default NavBar