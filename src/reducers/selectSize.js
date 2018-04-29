
import { SELECT_SIZE } from '../actions/actions'

const initialSize = []

export default (state = initialSize, action) => {
  switch (action.type) {
    case SELECT_SIZE :
        return [...state, action.payload.size]


    default :
      return state
  }
}