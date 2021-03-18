import {editFilter} from '../actions'

const defaultState = editFilter.READ_POST

const editPost = (state = defaultState, action) => {
    const { type, status } = action

    switch (type) {
        case 'UPDATE_EDIT':
            return status
        default: 
            return state
    }
}

export default editPost