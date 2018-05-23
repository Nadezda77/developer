import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
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
      city: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { firstname, lastname, streetnumber, city } = this.state;

    axios.post('/api/auth/register', { firstname, lastname, streetnumber, city })
      .then((result) => {
        this.props.history.push("/login")
      });
  }

  render() {
    const { firstname, lastname, streetnumber, city } = this.state;
    return (
        <div class="flex-container">
       
          <div class="form">
                <h3 >User Details</h3> 
                <form class="form-signin" action="/" method="post">
                 <div class="sub-entry-1">
                  <input type="text" class="form-control" placeholder="First Name"  name="FirstName"  onChange={this.onChange} required autocomplete="off" />
                </div>
                <div class="sub-entry-2">
                   <input type="text" class="form-control" placeholder="Last Name"  name="LastName"  onChange={this.onChange} required autocomplete="off"/>
                </div>  
                  <input type="text" class="form-control" placeholder="Street / Number"  name="Street / Number"  onChange={this.onChange} required autocomplete="off"/>
                  <input type="text" class="form-control" placeholder="City"  name="City"  onChange={this.onChange} required autocomplete="off"/>
                  <input type="text" class="form-control" placeholder="Country"  name="Country"  onChange={this.onChange} required autocomplete="off"/>    
                  <button type="submit" class="button  button-block">Add User</button>
                </form>
          </div>
       
       
        <MapContainer google={this.props.google} />

      </div>
      
    );
  }
}

export default App;

