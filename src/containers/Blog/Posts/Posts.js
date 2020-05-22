import './Posts.css'

import React, { Component } from 'react'

import Post from '../../../components/Post/Post'
import axios from '../../../axios'

class Posts extends Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    axios
      .get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4)
        const updatePosts = posts.map(post => {
          return {
            ...post,
            author: 'Max',
          }
        })
        this.setState({ posts: updatePosts })
      })
      .catch(error => {
        //this.setState({ error: true })
      })
  }

  postSelectedHandler = id => {
    this.setState({ selectedPostId: id })
  }

  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        )
      })
    }

    return <section className='Posts'>{posts}</section>
  }
}

export default Posts
