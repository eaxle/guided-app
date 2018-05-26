import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import './styles.css';

const defaultCenter = {
  lat: -37.787192,
  lng: 144.939598
}

const defaultZoom = 15;

class MapSnap extends Component {
  
  state = {}

  render() { 
    return (
      <div className="mapContainer">
        <GoogleMapReact
          defaultCenter={defaultCenter}
          defaultZoom={defaultZoom}
        >
          <span 
            lat={-37.787192}
            lng={144.939598}
            class="glyphicon glyphicon-map-marker" 
            aria-hidden="true"
          ></span>
        </GoogleMapReact>
      </div>
    )
  }
}
 
export default MapSnap;