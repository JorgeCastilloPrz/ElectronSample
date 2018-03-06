export const ADD_LOCATION = 'ADD_LOCATION'
export const SET_CURRENT_LOCATION = "SET_CURRENT_LOCATION"
export const SET_ZOOM_LEVEL = "SET_ZOOM_LEVEL"

// Actions are created by Action Creators which are defined with simpe functions
// in Redux.

/**
 * @param {int} index - The index for the Action.
 * @param {float} latitude - The location latitude.
 * @param {float} longitude - The location longitude.
 *
 * @return an ADD_LOCATION action with the given parameters.
 */
function addLocation(index, latitude, longitude) {
  return {
    type: ADD_LOCATION,
    index: index,
    latitude: latitude,
    longitude: longitude
  }
}

/**
 * @param {float} latitude - The current location latitude.
 * @param {float} longitude - The current location longitude.
 *
 * @return an SET_CURRENT_LOCATION action with the given parameters.
 */
 function setCurrentLocation(latitude, longitude) {
   return {
     type: SET_CURRENT_LOCATION,
     latitude: latitude,
     longitude: longitude
   }
 }

 /**
  * @param {float} zoomLevel - The zoom level to set.
  *
  * @return an SET_ZOOM_LEVEL action with the given parameters.
  */
  function setZoomLevel(zoomLevel) {
    return {
      type: SET_ZOOM_LEVEL,
      zoom: zoomLevel
    }
  }


/**
 * Arrow function (lambda) to return a list of actions.
 */
var actions = () => [
  addLocation(0, 37.992763, -1.130564),
  addLocation(1, 37.996453, -1.134679),
  addLocation(2, 37.992222, -1.121404),
  addLocation(3, 37.984967, -1.128375)
]
