import React, { Component } from 'react';
import "./Scanner.css";
import GetFile from "./GetFile";
import Predictions from "./Predictions";

export class Scanner extends Component {
    render() {
        return (
            <div className="scanner">
                <h1>Scanner</h1>
                <div className="results">
                </div>
                <GetFile passStyle={styles}/>
                <Predictions passStyle={styles}/>
            </div>
        )
    }
}

const styles = {
    gridRow: "3",
    alignContent: "center",
    alignItems: "center",
    margin:"0 auto",
    display: "grid"
}

export default Scanner
