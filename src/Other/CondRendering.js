import React, { Component } from 'react'

class CondRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isloggedIn: true
      }
    }
    
  render() {
    return this.state.isloggedIn === true ? <h1>Hi Karthikeyan</h1> : <h1>Hi YogaPriya</h1>
  }
}

export default CondRendering
