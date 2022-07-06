import {
  Box,
  Button,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'

export const AuthPage = () => {
  const { signin } = useAuth()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const isLogin = pathname === LOGIN_ROUTE

  const onSubmit = (e) => {
    e.preventDefault()
    signin('Ilya', () => {})
    navigate(SHOP_ROUTE, { replace: true })
  }
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#cecece',
      }}
    >
      <Paper elevation={7} sx={{ padding: 5, width: 600 }}>
        <Form onSubmit={onSubmit}>
          <Typography variant="h4" component="h1" align="center">
            {isLogin ? 'Вход' : 'Регистрация'}
          </Typography>
          <TextField label="Введите ваш email" variant="outlined" />
          <TextField label="Введите ваш пароль" variant="outlined" />
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" alignItems="center" spacing={1}>
              {isLogin ? (
                <>
                  <Typography>Нет аккаунта? </Typography>
                  <Link to={REGISTRATION_ROUTE} component={RouterLink}>
                    <Typography> Зарегистрируйся!</Typography>
                  </Link>
                </>
              ) : (
                <>
                  <Typography>Есть аккаунт?</Typography>
                  <Link to={LOGIN_ROUTE} component={RouterLink}>
                    <Typography>Войдите!</Typography>
                  </Link>
                </>
              )}
            </Stack>
            <Button type="submit" variant="contained">
              {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button>
          </Stack>
        </Form>
      </Paper>
    </Box>
  )
}

const Form = (props) => <Stack spacing={2} component="form" {...props} />
