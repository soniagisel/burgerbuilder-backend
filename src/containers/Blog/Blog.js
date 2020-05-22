import './Blog.css'

import { Link, Route } from 'react-router-dom'
import React, { Component } from 'react'

import NewPost from './NewPost/NewPost'
import Posts from './Posts/Posts'

class Blog extends Component {
  render() {
    return (
      <div className='Blog'>
        <header>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/new-post'>New Post</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Route path='/' exact component={Posts} />
        <Route path='/new-post' component={NewPost} />
      </div>
    )
  }
}

export default Blog
