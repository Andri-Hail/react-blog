import React, { useState } from 'react'
import { connect } from 'react-redux'
import { editFilter, updateEdit } from '../actions'
import EditHeader from './editHeader'
import '../styles/app.css'

const Header = ({ body, image, id }) => {
  const [showEdits, setShowEdits] = useState(false)

  const afterEdit = () => {
    setShowEdits(!showEdits)
  }

  if (showEdits) {
    return (
      <div>
        <EditHeader value2={image} value3={body} afterEdit={afterEdit} />
      </div>
    )
  }
  return (
    <div className="blogpost">
      <h3>Welcome to my blog!</h3>
      <img src={image} style={{ maxWidth: '300px' }} alt="wrong link!" />
      <p>
        {body}
      </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)
