import React, { Component } from 'react'
import Post from './Post'
import ActivePost from './ActivePost'
import styled from 'styled-components'


class Table extends Component {
  constructor(props) {
    super(props)
  }
  render() {

    const posts = this.props.posts.map((data) => {
      let handleVideoChange = this.props.handleVideoChange.bind(this, data)
      return (
        data.active ?
          <ActivePost handleVideoChange={handleVideoChange} key={data.id}
            title={data.title}
            description={data.description} /> :
          <Post handleVideoChange={handleVideoChange}
            key={data.id}
            title={data.title}
            description={data.description} />
      )
    })

    return (
      <div className="test">
        <div className="pt-5 pb-5">
          <div className="container">
            <div className="text-center">
              <h2 className="pt-4 pb-4">Posts List</h2>
            </div>
            {posts}
          </div>
        </div>
      </div>
    )
  }
}

export default Table