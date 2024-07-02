import React, { useState, useEffect } from 'react'
import axios from 'axios'

function FetchData() {
    const [data, setData] = useState(null)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res.data)
            setData(res.data)
        })
    }, [])
  return (
    <div>
      <h1>API using Hooks</h1>
      <ul>
        {
            data && data.map(item => <li key={item.id}>{item.title}</li>)
        }
      </ul>
    </div>
  )
}

export default FetchData
