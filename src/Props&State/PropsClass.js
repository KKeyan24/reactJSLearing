import React, { Component } from "react";

class KKNPropsClass extends Component {
    render () {
        return (
            <div>
                <h2><u>Class Props</u></h2>
                <h3>His Name is {this.props.name}</h3>
                <h5>{this.props.children}</h5>
            </div>
        )
    }
}

export default KKNPropsClass