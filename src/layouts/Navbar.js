import React, { Component } from "react";
import { Link } from "react-router-dom"; 
 import './Nav.css';
 
class Navbar extends Component { 

  render() { 
    return (
      <div>
        
        <nav className="navbar navbar-expand-custom navbar-mainbg">  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
 
 
    
   

      <ul className="navbar-nav ml-auto">
      <div className="hori-selectors dashs"><div className="left"></div><div className="right"></div></div>
         
        <li className="nav-item active">
            <Link to="/Dashboard">    <img style={{height: "25px"}} alt="aqi-icon-yellow" class="outdoor-aqius rounded-icon" src="https://yassir.tn/wp-content/uploads/sites/7/logo_yassir_header.png"/>
</Link>
            </li>
    
     </ul>
   </div>
</nav>
      </div>
    );
  }
}

 

export default Navbar;
