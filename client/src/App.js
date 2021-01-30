import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Rotate from "react-reveal/Rotate";
import Landing from "./components/Landing";
import Title from "./components/Title";
import Scanner from "./components/Scanner";
import Footer from "./components/Footer";

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div className="App" >
        <ParallaxProvider>
          <Landing/>
          <div className="content">
            <ArrowDropDownIcon className="scrollDown"/>
            <Title/>
            <Rotate bottom left>
              <Scanner/>
            </Rotate>
          </div>
          <Footer/>
        </ParallaxProvider>
      </div>
    )
  }
}

export default App
