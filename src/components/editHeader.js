import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateEdit, editHeader } from '../actions'
import '../styles/app.css'

const EditPost = ({
  dispatchEditHeader, value2, value3, id, afterEdit,
}) => {
  const [value2_, setValue2] = useState(value2 || '')
  const [value3_, setValue3] = useState(value3 || '')

  return (
    <div className="addblogpost">
      <br />
      <input
        value={value2_}
        onChange={e => setValue2(e.target.value)}
        placeholder="Image Link..."
      />
      <br />
      <textarea
        style={{
          marginTop: '10px',
          marginBottom: '10px',
          height: '10%',
          width: '50%',
        }}
        value={value3_}
        onChange={e => setValue3(e.target.value)}
        placeholder="Body..."
      />
      <br />
      <button
        onClick={() => {
          dispatchEditHeader(value2_, value3_)
          afterEdit()
        }}
      >
        Save
      </button>
      <button
        onClick={() => {
          afterEdit()
        }}
      >
        Cancel
      </button>
    </div>
  )
}
const mapDispatchToProps = dispatch => ({
  dispatchUpdateEdit: editPost => dispatch(updateEdit(editPost)),
  dispatchEditHeader: (value2, value3) => dispatch(editHeader(value2, value3)),
})

const mapStateToProps = state => ({
  posts: state.posts,
  editPost: state.editPost,
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
