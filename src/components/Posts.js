import React, { useState } from 'react'
import { connect } from 'react-redux'
import { editFilter, updateEdit } from '../actions'
import EditPost from './editPost'
import '../styles/app.css'

const Posts = ({ title, body, image, id }) => {
  const [showEdits, setShowEdits] = useState(false)

  const afterEdit = () => {
    setShowEdits(!showEdits)
  }

  if (showEdits) {
    return (
      <div>
        <EditPost
          value={title}
          value2={image}
          value3={body}
          id={id}
          afterEdit={afterEdit}
        />
      </div>
    )
  }
  return (
    <div className="blogpost">
      <h3>{title}</h3>
      <h4 style={{ float: 'right' }}>
        Post:
        {id}
      </h4>
      <img src={image} style={{ maxWidth: '300px' }} alt="wrong link!" />
      <p>{body}</p>
      <button onClick={() => afterEdit()}>edit</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchUpdateEdit: editPost => dispatch(updateEdit(editPost)),
})

const mapStateToProps = state => ({
  posts: state.posts,
  editPost: state.editPost,
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
