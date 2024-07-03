import React, {useContext} from 'react'
import { userContext, channelContext } from '../App'

function UseContext() {
    const user =  useContext(userContext)
    const channel = useContext(channelContext)
  return (
    <div>
      Welcome <b>{user}</b>, to <i>"{channel}"</i>
    </div>
  )
}

export default UseContext
