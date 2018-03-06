import ADD_LOCATION from '../actions/actions.js' 

const initialState = {
  locations: []
}

function nearbyLocationsAppReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_LOCATION:
      return { ...state, visibilityFilter: action.filter }
    default:
      return state
  }
}
