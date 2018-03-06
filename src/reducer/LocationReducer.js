import {
  ADD_LOCATION,
  SET_CURRENT_LOCATION,
  SET_ZOOM_LEVEL
} from '../actions/actions.js'
import addLocation from '../actions/actions.js'

const initialState = {
  zoomLevel = 0.0,
  currentLocation: {
    latitude = 0.0,
    longitude = 0.0
  },
  locations: []
}

function nearbyLocationsAppReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ZOOM_LEVEL:
      return Object.assign({}, state, {
        zoomLevel: action.zoom
      })
    case SET_CURRENT_LOCATION:
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
