import React, { Component } from "react";

class KKNStateClass extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Welcome to all Visitors :-)'
        }
    }

    messageChange() {
        this.setState({
            message: 'Thanks for Visiting Us :-)'
        })
    }

    render () {
        return (
            <div>
                <h2><u>Class State</u></h2>
                <h3>{this.state.message}</h3>
                <button onClick={() => this.messageChange()}>Subscribe !</button>
            </div>
        )
    }
}

export default KKNStateClass