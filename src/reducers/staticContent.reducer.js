import staticContent from './../staticContent'

const initialState = {
  ...staticContent,
}

const actionsMap = {}

/**
 * reducer
 */
export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type]
  return fn ? fn(state, action) : state
}
