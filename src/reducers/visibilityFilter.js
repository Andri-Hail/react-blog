import {VisibilityFilters} from '../actions'

const defaultState = VisibilityFilters.SHOW_NONE

const visibility = (state = defaultState, action) => {
    const { type, status } = action

    switch (type) {
        case 'UPDATE_VISIBILITY':
            return status
        default: 
            return state
    }
}

export default visibility