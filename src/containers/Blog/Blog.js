import './Blog.css'

import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import React, { Component } from 'react'

import NewPost from './NewPost/NewPost'
import Posts from './Posts/Posts'

class Blog extends Component {
  state = {
    auth: false,
  }

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
          {this.state.auth ? <Route path='/new-post' component={NewPost} /> : null}
          <Route path='/posts' component={Posts} />
          <Route render={() => <h1>Not Found!</h1>} />
          {/* <Redirect from='/' to='/posts' />*/}
        </Switch>
      </div>
    )
  }
}

export default Blog
