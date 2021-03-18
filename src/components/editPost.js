import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  editFilter,
  updateEdit,
  editExistingPost,
  deletePost,
} from '../actions'
import '../styles/app.css'

const EditPost = ({
  dispatchUpdateEdit,
  dispatchDeletePost,
  dispatchEditExistingPost,
  value,
  value2,
  value3,
  id,
  afterEdit,
}) => {
  const [value_, setValue] = useState(value || '')
  const [value2_, setValue2] = useState(value2 || '')
  const [value3_, setValue3] = useState(value3 || '')

  const { EDIT_POST, READ_POST } = editFilter
  return (
    <div className="addblogpost">
      <input
        value={value_}
        onChange={e => setValue(e.target.value)}
        placeholder="Title..."
      />
      <br />
      <input
        value={value2_}
        onChange={e => setValue2(e.target.value)}
        placeholder="Image Link..."
      />
      <br />
      <textarea
        value={value3_}
        onChange={e => setValue3(e.target.value)}
        placeholder="Body..."
      />
      <br />
      <button
        onClick={() => {
          dispatchEditExistingPost(value_, value2_, value3_, id)
          afterEdit()
        }}
      >
        Save
      </button>
      <button
        onClick={() => {
          dispatchUpdateEdit(READ_POST)
          afterEdit()
        }}
      >
        Cancel
      </button>
      <button
        onClick={() => {
          dispatchDeletePost(id)
          afterEdit()
        }}
      >
        Delete
      </button>
    </div>
  )
}
const mapDispatchToProps = dispatch => ({
  dispatchUpdateEdit: editPost => dispatch(updateEdit(editPost)),
  dispatchDeletePost: id => dispatch(deletePost(id)),
  dispatchEditExistingPost: (value1, value2, value3, id) => dispatch(
    editExistingPost(value1, value2, value3, id),
  ),
})

const mapStateToProps = state => ({
  posts: state.posts,
  editPost: state.editPost,
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
