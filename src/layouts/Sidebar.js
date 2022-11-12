import React, { Component } from "react";
import { Link } from "react-router-dom"; 
import './side.css'
class Sidebar extends Component {
 
  render() {
 
    return (

      <div className="navigation">
        <ul className="list">

        
            <li className="list-item  "  >
              <Link to="/DlotMq">
                <span className="icon">
                <i class="fa-solid fa-earth-americas"></i>                </span>
                <span className="nav-text">AIR QUALITY</span>
              </Link></li>
       
 

        </ul>
      </div>


    );
  }
}

 

export default  Sidebar;
