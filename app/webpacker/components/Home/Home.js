import React, { Component } from 'react'
import Hero from './Hero'
import Table from './Table/Table'
import NewPost from './NewPost'
import axios from 'axios'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewPost = this.addNewPost.bind(this)
  }

  handleFormSubmit(title, description, url) {
    let body = JSON.stringify({ post: { title: title, description: description, url: url } })
    fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => { return response.json() })
      .then((post) => {
        this.addNewPost(post)
      })
  }

  handleVideoChange(post, event) {
    event.preventDefault()
    let posts = [...this.state.posts]
    posts.map(data => {
      data.active = false
    })

    post.active = !post.active
    posts[post.id - 1] = post

    this.setState({ posts })
  }

  addNewPost(post) {
    this.setState({
      posts: this.state.posts.concat(post)
    })
  }

  componentDidMount() {
    axios.get('/posts.json')
      .then(data => {
        let resource = []
        data.data.data.map((data) => {
          resource.push({
            id: data.id,
            title: data.title,
            description: data.description,
            url: data.url
          })
          this.setState({ posts: resource })
        })
      })
  }

  render() {
    return (
      <div>
        <Hero />
        <Table handleVideoChange={this.handleVideoChange.bind(this)} posts={this.state.posts} />
        <NewPost handleFormSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}


export default Home