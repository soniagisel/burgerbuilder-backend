import './Post.css'

import React from 'react'
//this is a way of getting acces to the Route properties
import { withRouter } from 'react-router-dom'

const post = props => {
  return (
    <article className='Post' onClick={props.clicked}>
      <h1>{props.title}</h1>
      <div className='Info'>
        <div className='Author'>{props.author}</div>
      </div>
    </article>
  )
}

export default withRouter(post)
