import React, { Component } from 'react'
import UpdatedComponent from './HOC'

class HoverCount extends Component {
    render() {
        const { countValue, incrementFunc } = this.props
        return (
            <div>
                <h1 onMouseOutCapture={incrementFunc}> Hover Count: {countValue}</h1>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCount)
