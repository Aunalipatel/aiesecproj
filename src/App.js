import React , {useEffect, useState} from 'react';
import {Button,Modal} from 'react-bootstrap';
// import VizSensor from 'react-visibility-sensor';

import './App.css';
import Opportunity from './opportunity';
import Navbar from './navbar';
// import Vizimage from './vizimage';

function App() {
  

  const [opp_list,setopp_list] = useState([]);

  const apifunction = async() => {
    // POST request using fetch with async/await
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };
    const response = await fetch(`https://api-staging.aiesec.org/graphql?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c&query={allOpportunity(page:1,per_page:25){data{title description cover_photo}paging{current_page total_items total_pages}}}`, requestOptions);
    const info = await response.json();
    // console.log(info)
    const info_clearer = info.data.allOpportunity.data;
    console.log(info_clearer);
    // setopp_list(opp_list.concat(info_clearer;
    setopp_list(info_clearer);
  }

  // useEffect(() => {
  //   return() =>{
  //     console.log("change of opplist use effect just ran!")
      
  //     }
  //   }
  // ,[opp_list]);

  return (
    <div id="body">
      <Navbar/>
      <div className="container mt-1" >
      <div className = "d-flex justify-content-center">
        <h1 className = "d-inline-flex p-2">Opportunities for you!</h1>
        <Button className = "d-inline-flex p-2" onClick = {apifunction}><h1>Fetch</h1></Button>
        
      </div>
      </div>
    
      <div className = "container">
        
        {opp_list.map(oneOpportunity => (
            
            <Opportunity 
            // key = {oneOpportunity.title}
            title = {oneOpportunity.title} 
            description = {oneOpportunity.description}
            source = {oneOpportunity.cover_photo.url}/>
            
          ))}

        {/* <Button>load mre</Button> */}
        
        
      </div>
      
    </div>

    
  );
}

export default App;
