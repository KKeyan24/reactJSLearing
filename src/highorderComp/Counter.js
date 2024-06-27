import React, { Component } from 'react'
import UpdatedComponent from './HOC'

class Counter extends Component {
  render() {
    const { countValue, incrementFunc } = this.props
    return (
      <div>
        <button onClick={incrementFunc}>Click for Count: {countValue}</button>
      </div>
    )
  }
}

export default UpdatedComponent(Counter)
