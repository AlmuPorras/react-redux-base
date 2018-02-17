import { createSelector } from 'reselect'

export const getStaticContent = state => state.staticContent

export const getHomeContent = createSelector (
  [getStaticContent],
  staticContent => staticContent.structure.home
)
