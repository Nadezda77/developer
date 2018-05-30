import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'



export default class MapContainer extends Component {
  static defaultProps = {
    center: { lat: 44.74, lng: 20.54 },
    zoom: 11
  };
render() {
    return (
      <div class='google-map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCQzdLPTgM0p3LGcDXX1b-BR650lYXvzp0" }}
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }
          >
          
        </GoogleMapReact>
      </div>
    )
  }
}