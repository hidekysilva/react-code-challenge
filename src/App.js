import React, { Component } from 'react';
import './App.scss';

import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import HeadingGroup from './components/HeadingGroup';
import Headline from './components/Headline';

class App extends Component {
  render() {
    return (
      <div className="App">

        <NavBar/>
        <Carousel/>
        <HeadingGroup/>
        <Headline/>
        <Footer/>

      </div>
    );
  }
}

export default App;
