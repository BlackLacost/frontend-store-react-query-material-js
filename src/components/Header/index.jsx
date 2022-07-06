import { Box, Button, Container, Link } from '@mui/material'
import { Link as RouterLink, NavLink } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { LOGIN_ROUTE, SHOP_ROUTE } from '../../utils/consts'
import { Logo } from './Logo'

export function Header() {
  const { user, signout } = useAuth()
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        minHeight: 60,
        borderBottom: '1px solid #ddd',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link to={SHOP_ROUTE} component={NavLink}>
            <Logo />
          </Link>
          <Box sx={{ display: 'flex' }}>
            {user ? (
              <>
                <Button>Админ панель</Button>
                <Button onClick={() => signout(() => {})}>Выйти</Button>
              </>
            ) : (
              <>
                <Button to={LOGIN_ROUTE} component={RouterLink}>
                  Авторизация
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
