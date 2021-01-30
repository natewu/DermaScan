import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Landing from "./components/Landing";
import Title from "./components/Title";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div className="App" >
        <ParallaxProvider>
          <Landing/>
          <div className="content" style={{minHeight:"1000px"}}>
            <ArrowDropDownIcon className="scrollDown"/>
            <Title/>
          </div>
        </ParallaxProvider>
      </div>
    )
  }
}

export default App
