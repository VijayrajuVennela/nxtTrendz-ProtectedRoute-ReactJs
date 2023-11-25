// Write your JS code here
import Cookies from 'js-cookie'

import {Route, Redirect} from 'react-router-dom'

const ProtectedRoute = props => {
  const jwtToke = Cookies.get('jwt_token')
  if (jwtToke === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}
export default ProtectedRoute
