import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Rotate from "react-reveal/Rotate";
import Fade from 'react-reveal/Fade';
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
          <Fade top>
            <Landing/>
          </Fade>
          <Fade middle>
            <div className="content">
              <ArrowDropDownIcon className="scrollDown"/>
              <Fade bottom>
                <Title/>
              </Fade>
              <Rotate bottom left>
                <Scanner/>
              </Rotate>
              <Fade bottom>
              </Fade>
            </div>
          </Fade>
          <Footer/>
        </ParallaxProvider>
      </div>
    )
  }
}

export default App
