import { BrowserRouter as   Link } from "react-router-dom";
import React,{Component} from 'react';
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      _id:'', 
      air: [], 

    };
 
}

  administrateur() {
    axios
        .get(`http://localhost:8080/api/air/findAll`)
        .then(res => {
            const air = res.data

             // console.log( localStorage.setItem('name',this.name));
 

            this.setState({
              air
            })
        });
}


async componentDidMount() {
    this.administrateur()
 
}




  render() {

  return (
    <div className="App">
       
<div id='tit'class="bodyAirvisualWidget">
<div class="outdoor-aqius itemAirvisualWidget  widget-bg-green">
  <div class="ic-container outdoor-aqius-icon-container">
  <p>Get datetime where the paris zone evry </p>
  </div>
  <div id='tit' class="outdoor-aqius-textcontainer AirvisualWidgetItemText  ##IS_DISABLED##">
  <p > 1 minute</p>
 
  </div>
</div>
</div>
  <p></p>
  <table class="table"   >
 <thead>
  <tr>
     <th scope="col">City</th>
    <th scope="col">State</th>
    <th scope="col">Date deCreated</th>
    <th scope="col">Aqius</th>

  </tr>
</thead>

{this.state.air.map(data =>

<tbody>

  {data.Result.data.city ==="Paris" ?

  <tr style={{color:"white"}}>
    <th scope="row ">{data.Result.data.city}</th>
     <td>{data.Result.data.state}</td>
    <td>{data.Result.Pollution.Date_Created}</td>


    <td>
    
    
  
{ data.Result.Pollution.aqius < 66 ?

<div class="bodyAirvisualWidget">
<div class="outdoor-aqius itemAirvisualWidget  widget-bg-green">
  <div class="ic-container outdoor-aqius-icon-container">
    <img alt="aqi-icon-yellow" class="outdoor-aqius rounded-icon" src="https://www.iqair.com/assets/aqi/ic-face-green.svg"/>
  </div>
  <div class="outdoor-aqius-textcontainer AirvisualWidgetItemText  ##IS_DISABLED##">
    <strong class="aqiValue outdoor-aqius-value">
    {data.Result.Pollution.aqius}<br/>
    </strong>
    <span class="aqiText">
       AQI
    </span>
  </div>
</div>
</div>
:
data.Result.Pollution.aqius < 70 ?
<div class="bodyAirvisualWidget">
<div class="outdoor-aqius itemAirvisualWidget  widget-bg-yellow">
  <div class="ic-container outdoor-aqius-icon-container">
    <img alt="aqi-icon-yellow" class="outdoor-aqius rounded-icon" src="https://www.iqair.com/assets/aqi/ic-face-yellow.svg"/>
  </div>
  <div class="outdoor-aqius-textcontainer AirvisualWidgetItemText  ##IS_DISABLED##">
    <strong class="aqiValue outdoor-aqius-value">
    {data.Result.Pollution.aqius}<br/>
    </strong>
    <span class="aqiText">
      AQI
    </span>
  </div>
</div>
</div>
  :
  data.Result.Pollution.aqius > 69 ?
<div class="bodyAirvisualWidget">
<div class="outdoor-aqius itemAirvisualWidget  widget-bg-red">
  <div class="ic-container outdoor-aqius-icon-container">
    <img alt="aqi-icon-yellow" class="outdoor-aqius rounded-icon" src="https://www.iqair.com/assets/aqi/ic-face-red.svg"/>
  </div>
  <div class="outdoor-aqius-textcontainer AirvisualWidgetItemText  ##IS_DISABLED##">
    <strong class="aqiValue outdoor-aqius-value">
    {data.Result.Pollution.aqius}<br/>
    </strong>
    <span class="aqiText">
      AQI
    </span>
  </div>
</div>
</div>
:
''
}
    
    
    </td>

  </tr> 
  :
  ''
  }
</tbody>
     )}

 </table> 

 <p></p>
 <p></p>

          

            

            

          
            
 
 
       
      </div>
   );
}
}
export default Home;
