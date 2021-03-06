import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';

import Navigation from './Navigation.js';
import Slider from './Carousel.js';
import HighestRated from './HighestRated.js'
import LogIn from './LogIn.js'
import HighestRatedList from './HighestRatedList.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation/>
          <Route exact path="/" component={Slider}/>
          <Route path="/Highest-Rated" component={HighestRatedList} />
          <Route path="/LogIn" component={LogIn} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
