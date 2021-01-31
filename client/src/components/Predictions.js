import React, { Component } from 'react';


class Predictions extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
          predictions:'',
        };

    }
    render() {
        return(
        <div className="predictions" style={this.props.passStyle}>
            <div>Predictions:</div>
        </div>
    )
    }

}

export default Predictions;
