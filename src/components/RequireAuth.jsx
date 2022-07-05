import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { LOGIN_ROUTE } from '../utils/consts'

export const RequireAuth = ({ children }) => {
  const location = useLocation()
  const { user } = useAuth()

  if (!user) {
    return <Navigate to={LOGIN_ROUTE} state={{ from: location }} />
  }

  return children
}
