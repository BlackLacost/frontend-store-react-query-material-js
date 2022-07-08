import { Container, Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { TypeBar } from './TypeBar'

export const Layout = () => {
  return (
    <>
      <Header />

      <Container>
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <TypeBar />
          </Grid>
          <Grid item xs={10}>
            <Outlet />
          </Grid>
        </Grid>
      </Container>

      <footer>Footer</footer>
    </>
  )
}
