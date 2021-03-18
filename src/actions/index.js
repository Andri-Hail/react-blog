let counter = 0

export const addPost = (title, image, body) => ({
  type: 'ADD_POST',
  id: counter++,
  title,
  body,
  image,
})
export const editExistingPost = (title, image, body, id) => {
  return {
    type: 'EDIT_EXISTING_POST',
    title,
    body,
    image,
    id,
  }
}

export const deletePost = id => {
  return {
    type: 'DELETE_POST',
    id,
  }
}
export const editHeader = (image, body) => {
  return {
    type: 'EDIT_HEADER',
    body,
    image,
  }
}

export const editFilter = {
  EDIT_POST: 'EDIT_POST',
  READ_POST: 'READ_POST',
}

export const updateEdit = status => ({
  type: 'UPDATE_EDIT',
  status,
})

export const VisibilityFilters = {
  SHOW_POST: 'SHOW_POST',
  SHOW_NONE: 'SHOW_NONE',
}

export const updateVis = status => ({
  type: 'UPDATE_VISIBILITY',
  status,
})
