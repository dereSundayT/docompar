import React from 'react'
const Nav = ({icon,title}) =>{
    return(
        <nav className='navbar bg-primary'>
        <h1>
          <i className={icon} /> {title} 
        </h1>
        
      </nav>
    )
}
export default Nav