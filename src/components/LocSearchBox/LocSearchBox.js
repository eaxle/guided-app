import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import './styles.css';

const {googleMapLoader} = GoogleMap;

class LocSearchBox extends Component {
  constructor(props) {
    super(props);
    this.inputBox = React.createRef();
    this.state = {
      location: ""
    }
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
          className="searchInput"
          ref={this.inputBox}
          type="text"
          value={this.state.location}
          onChange={e => { this.setState({ location: e.target.value }) }}
        />
        <a onClick={e => {this.setState({location: ""}) }}>clear</a>
      </div>
    )
  }
}
 
export default LocSearchBox;