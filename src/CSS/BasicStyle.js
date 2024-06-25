import React from 'react'
import './basicStyle.css'
import moduleStyle from './moduleStyle.module.css'

const inlineStyle = {
    color: 'red',
    fontSize: '72px',
    fontWeight: '900',
    textDecoration: 'underline',
    padding: '10px',
    border: '1px solid black',
}

function BasicStyle() {
  return (
    <div>
      <div className='base'>StyleSheet</div>
      <div className={`base font`}>Multiple Classes</div>
      <div style={inlineStyle}>Inline CSS</div>
      <div className={moduleStyle.content}>
        <div className={moduleStyle.b1}>BOX 1</div>
        <div className={moduleStyle.b2}>BOX 2</div>
        <div className={moduleStyle.b3}>BOX 3</div>
      </div>
    </div>
  )
}

export default BasicStyle
