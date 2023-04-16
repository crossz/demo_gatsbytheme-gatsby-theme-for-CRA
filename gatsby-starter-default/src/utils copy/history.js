import { createBrowserHistory } from 'history'
import { isString, isArray, isObject } from 'lodash'
import { matchPath } from 'react-router'
const history = createBrowserHistory({ basename: '/health-platform' })
export default history

export const matchPathCallback = ({ routes, match, noMatch }) => {
  const {
    location: { pathname },
  } = history
  let isMatch = false
  if (isString(pathname))
    isMatch = matchPath(pathname, {
      path: routes,
      exact: true,
    })
  if (isObject(routes))
    isMatch = matchPath(pathname, {
      path: routes?.path,
      exact: true,
    })
  if (isArray(routes))
    isMatch = routes.find((route) =>
      matchPath(pathname, {
        path: route?.path,
        exact: true,
      }),
    )
  return isMatch ? match && match(history) : noMatch && noMatch(history)
}
