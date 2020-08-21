import React, { Component } from 'react';
import { GoogleComponent } from 'react-google-location' 

const API_KEY ="AIzaSyBAhvLw_czDKnCQc1eEz9HPkOoGU5h6hGU"
class SearchBar extends Component {
    constructor(props) {
      super(props)
      this.state = {
        place: null,
      };
    }
   
    render() {
      return (
        <div >
           <GoogleComponent
           
            apiKey={API_KEY}
            language={'en'}
            country={'country:in|country:us'}
            coordinates={true}
            locationBoxStyle={'custom-style'}
            locationListStyle={'custom-style-list'}
            onChange={(e) => { this.setState({ place:e}) }} />
        </div>
   
      )
    } 
  }
   
   
  export default SearchBar;
   
 