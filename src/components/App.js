import React, { useState } from 'react'
import { connect } from 'react-redux'

import AddPost from './AddPost'
import Posts from './Posts'
import Header from './Header'
import { VisibilityFilters, updateVis } from '../actions'
import '../styles/app.css'

const App = ({ posts, dispatchUpdateVis, header }) => {
  const { SHOW_POST, SHOW_NONE } = VisibilityFilters
  const dispPosts = posts.map(post => (
    <Posts
      title={post.title}
      key={post.id}
      image={post.image}
      body={post.body}
      id={post.id}
    />
  ))

  return (
    <div>
      <Header body={header.body} image={header.image} />
      <h1>Blog Posts</h1>
      <button onClick={() => dispatchUpdateVis(SHOW_POST)}>Add Post</button>
      <br />
      <AddPost />

      <hr />
      <br />
      <br />
      {dispPosts}
    </div>
  )
}
const mapDispatchToProps = dispatch => ({
  dispatchUpdateVis: status => dispatch(updateVis(status)),
})

const mapStateToProps = state => ({
  visibility: state.visibility,
  posts: state.posts,
  header: state.header,
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

// export default (App)
