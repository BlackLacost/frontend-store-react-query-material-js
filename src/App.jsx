import { CssBaseline } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './components/AuthProvider'
import { Layout } from './components/Layout'
import { RequireAuth } from './components/RequireAuth'
import { AdminPage } from './pages/AdminPage'
import { AuthPage } from './pages/AuthPage'
import { BasketPage } from './pages/BasketPage'
import { DevicePage } from './pages/DevicePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ShopPage } from './pages/ShopPage'
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from './utils/consts'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path={ADMIN_ROUTE}
              element={
                <RequireAuth>
                  <AdminPage />
                </RequireAuth>
              }
            />
            <Route
              path={BASKET_ROUTE}
              element={
                <RequireAuth>
                  <BasketPage />
                </RequireAuth>
              }
            />

            <Route index element={<ShopPage />} />
            <Route path={DEVICE_ROUTE + '/:id'} element={<DevicePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path={LOGIN_ROUTE} element={<AuthPage />} />
          <Route path={REGISTRATION_ROUTE} element={<AuthPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
