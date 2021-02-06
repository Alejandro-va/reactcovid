import React from 'react';

import Navbar from 'react-bootstrap/Navbar';

import '../style.css';

const NavBar = () => {

   return(
      <div>
         <Navbar>
            <Navbar className="navBar">
               <h1>Covid19 Rastreador by Jesús Hernández</h1>
            </Navbar>
         </Navbar>
      </div>
   )
}

export default NavBar;