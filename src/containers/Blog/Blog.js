import './Blog.css'

import { NavLink, Route, Switch } from 'react-router-dom'
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
                <NavLink exact to='/posts/' activeClassName='custom-active'>
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink to='/new-post'>New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path='/new-post' component={NewPost} />
          <Route path='/posts' component={Posts} />
        </Switch>
      </div>
    )
  }
}

export default Blog
