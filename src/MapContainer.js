import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

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
          defaultZoom={ this.props.zoom }>
          <AnyReactComponent
            lat={ 44.3473310 }
            lng={ 20.5517440 }
            text={ 'Your Location' }
          />
        </GoogleMapReact>
      </div>
    )
  }
}