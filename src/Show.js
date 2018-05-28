import React, { Component } from 'react';

import axios from 'axios';



class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      korisniks: []
    };
  }

  componentDidMount() {
   
    axios.get('/api/user/show')
      .then(res => {
        this.setState({ korisniks: res.data });
        console.log(this.state.korisniks);
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/api/user");
        }
      });
  }

 

  render() {
    return (
      <div >
        <table>
            <thead>
                <tr>
                <th >First Name</th>
                <th >Last Name</th>
                <th >Sreet / Number</th>
                <th >City</th>
                <th >Country</th>
                </tr>
                </thead>
                <tbody>
                  {this.state.korisniks.map(Korisnik =>
                    <tr>
                      <td>{Korisnik.firstname}</td>
                      <td>{Korisnik.lastname}</td>
                      <td>{Korisnik.streetnumber}</td>
                      <td>{Korisnik.city}</td>
                      <td>{Korisnik.country}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          );
  }
}

export default Show;