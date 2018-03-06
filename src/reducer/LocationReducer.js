import {
  ADD_LOCATION,
  ADD_CURRENT_LOCATION
} from '../actions/actions.js'
import addLocation from '../actions/actions.js'

const initialState = {
  currentLocation: {
    latitude = 0,
    longitude = 0
  },
  locations: []
}

function nearbyLocationsAppReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CURRENT_LOCATION:
      return Object.assign({}, state, {
        currentLocation: {
          latitude = action.latitude,
          longitude = action.longitude
        }
      })
    case ADD_LOCATION:
      return Object.assign({}, state, {
        todos: [
          ...state.locations,
          {
            latitude: action.latitude,
            longitude: action.longitude
          }
          addLocation(action.index, action.latitude, action.longitude)
        ]
      })
    default:
      return state
  }
}
