import React, { Component } from 'react';
import axios from 'axios';
const API_URL = 'http://samples.openweathermap.org/data/2.5/weather';

class App extends Component {
    state = {
        weathers: []
    }
    componentDidMount() {
        const url = `${API_URL}?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22/`;
        axios.get(url, {headers: {'Access-Control-Allow-Origin': '*'}}).then(response => response.data)
        .then((data) => {
          this.setState({ weathers: data })
          console.log(this.state.weathers)
         })
      }
  render() {
    return (
       <div className="container">
        <div className="col-xs-8">
        <h1>Weather App</h1>
        {this.state.weathers.map((weather) => (
          <div className="card">
           <div className="card-body">
                <h5 className="card-title">{weather.main}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    {weather.description}
                </h6>
            </div>
          </div>
        ))}
        </div>
       </div>
    );
  }
}
export default App;