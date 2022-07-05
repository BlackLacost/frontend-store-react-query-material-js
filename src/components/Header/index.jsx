import { Box, Button, Container, Link } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { SHOP_ROUTE } from '../../utils/consts'
import { Logo } from './Logo'

export function Header() {
  const { user, signin, signout } = useAuth()
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
                <Button onClick={() => signin('Ilya', () => {})}>
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
