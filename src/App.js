import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
  import './App.css';
  import Home from "./components/home"
   import Navbar from "./layouts/Navbar";
  import Sidebar from "./layouts/Sidebar";

 class App extends Component {
  render() {return (
           <div>
 <Router>
          <div className="App">
         <Navbar></Navbar>
        <Sidebar></Sidebar>
             <Switch>
             

              <Route path="/" component={Home} />  

            </Switch>
          </div>
        </Router> 
          </div>
   );
}
}
export default App;
