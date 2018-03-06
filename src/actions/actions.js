export const ADD_LOCATION = 'ADD_LOCATION'

/**
 * Actions are created by Action Creators which are defined with simpe functions
 * in Redux.
 * @param {int} index - The index for the Action.
 * @param {float} latitude - The location latitude.
 * @param {float} longitude - The location longitude.
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
 * Arrow function (lambda) to return a list of actions.
 */
var actions = () => [
  addLocation(0, 37.992763, -1.130564),
  addLocation(1, 37.996453, -1.134679),
  addLocation(2, 37.992222, -1.121404),
  addLocation(3, 37.984967, -1.128375)
]
