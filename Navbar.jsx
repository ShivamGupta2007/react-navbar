import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div id="container">
      <h2>LOCOBAKERY</h2>
      <div className='navbar1'>
          <p>Service</p>
          <p>Projects</p>
          <p>About</p>
          <button>Contact</button>
      </div>
    </div>
  )
}

export {Navbar} ;  