const defaultState = []
const header = (state = defaultState, action) => {
  const { type, body, image } = action

  switch (type) {
    case 'EDIT_HEADER':
      return { image, body }
    default:
      return state
  }
}
export default header
