const defaultState = []
const posts = (state = defaultState, action) => {
  const { type, id, title, body, image } = action

  switch (type) {
    case 'ADD_POST':
      return [...state, { id, title, image, body, editing: false }]
    case 'EDIT_EXISTING_POST':
      return state.map(x => {
        if (x.id === id) {
          return { id, title, image, body, editing: !x.editing }
        }
        return x
      })
    case 'DELETE_POST':
      return state.filter(function (value, index, arr) {
        return value.id !== id
      })
    default:
      return state
  }
}

export default posts
