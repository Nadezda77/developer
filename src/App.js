//
import React, { Component } from 'react';
import axios from 'axios';
//import {Panel} from 'react-bootstrap';

import MapContainer from './MapContainer';
import "./App.css";

class App extends Component {

  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '', 
      streetnumber: '',
      city: '',
      country: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { firstname, lastname, streetnumber, city, country } = this.state;

    axios.post('/api/user', { firstname, lastname, streetnumber, city, country })
      .then( (result) => {
       
        this.props.history.push("/success")
      });
  }

  render() {
    const { firstname, lastname, streetnumber, city, country } = this.state;
    return (
        <div class="flex-container">
       
          <div class="form">
                <h3 >User Details</h3> 
                <form onSubmit={this.onSubmit} class="form-signin" >
                 <div class="sub-entry-1">
                  <input type="text" class="form-control" placeholder="First Name"  name="firstname" value={firstname} onChange={this.onChange} required autocomplete="off" />
                </div>
                <div class="sub-entry-2">
                   <input type="text" class="form-control" placeholder="Last Name"  name="lastname" value={lastname} onChange={this.onChange} required autocomplete="off"/>
                </div>  
                  <input type="text" class="form-control" placeholder="Street / Number"  name="streetnumber" value={streetnumber} onChange={this.onChange} required autocomplete="off"/>
                  <input type="text" class="form-control" placeholder="City"  name="city" value={city} onChange={this.onChange} required autocomplete="off"/>
                  <input type="text" class="form-control" placeholder="Country"  name="country" value={country} onChange={this.onChange} required autocomplete="off"/>    
                  <button type="submit" class="button  button-block">Add User</button>
                </form>
          </div>
       
       
        <MapContainer google={this.props.google} />

      </div>
      
    );
  }
}

export default App;

