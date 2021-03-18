import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addPost, VisibilityFilters, updateVis } from '../actions'
import '../styles/app.css'

const AddPost = ({ dispatchAddPost, dispatchUpdateVis, visibility }) => {
  const [value, setValue] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')

  const { SHOW_POST, SHOW_NONE } = VisibilityFilters
  switch (visibility) {
    case SHOW_POST:
      return (
        <div className="addblogpost">
          <h2 style={{ textAlign: 'center' }}>Add New Post!</h2>
          <input
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Title..."
          />
          <br />
          <br />

          <input
            value={value2}
            onChange={e => setValue2(e.target.value)}
            placeholder="Image Link..."
          />
          <br />
          <br />

          <textarea
            style={{ width: '80%', height: '12%' }}
            value={value3}
            onChange={e => setValue3(e.target.value)}
            placeholder="Body..."
          />
          <br />
          <br />

          <button
            onClick={() => {
              dispatchAddPost(value, value2, value3)
              dispatchUpdateVis(SHOW_NONE)
            }}
          >
            Post
          </button>
          <button onClick={() => dispatchUpdateVis(SHOW_NONE)}>Cancel</button>
        </div>
      )
    case SHOW_NONE:
      return <div />
    default:
      return <div />
  }
}
const mapDispatchToProps = dispatch => ({
  dispatchAddPost: (value1, value2, value3) => dispatch(addPost(value1, value2, value3)),
  dispatchUpdateVis: visibility => dispatch(updateVis(visibility)),
})

const mapStateToProps = state => ({
  visibility: state.visibility,
  posts: state.posts,
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)
