import { combineReducers } from 'redux'
import showPost from './App'
import visibility from './visibilityFilter'
import editPost from './editFilter'
import posts from './posts'
import header from './header'

export default combineReducers({
  posts,
  showPost,
  visibility,
  editPost,
  header,
})
