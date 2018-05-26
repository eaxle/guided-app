import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import './styles.css';

const {googleMapLoader} = GoogleMap;

class LocSearchBox extends Component {
  constructor(props) {
    super(props);
    this.inputBox = React.createRef();
  }

  componentDidMount() {
    googleMapLoader()
      .then((map) => {
        const input = this.inputBox.current;
        this.searchBox = new map.places.SearchBox(input);
      })
  }

  onPlacesChanged() {
    console.log(this.searchBox.getPlaces());
  }

  render() { 
    return (  
      <div>
        <GoogleMap onGoogleApiLoaded={({ map, maps }) => console.log(map, maps)}
          yesIWantToUseGoogleMapApiInternals
        />
        <input 
          ref={this.inputBox}
          type="text"
        />
      </div>
    )
  }
}
 
export default LocSearchBox;