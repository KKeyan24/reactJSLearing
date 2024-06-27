import React, { Component } from 'react'
import axios from 'axios'

class GetHTTP extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts: []
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response =>{
        this.setState({posts: response.data})
    }).catch (error =>{
        console.log(error)
    })
  }

  render() {
    const { posts } = this.state
    return (
      <div>
        <div>
            <h1>List of Data:</h1>
            {
                posts.length ?
                posts.map (res => <div key={res.id}>{res.title}</div>) : null
            }
        </div>
      </div>
    )
  }
}

export default GetHTTP
