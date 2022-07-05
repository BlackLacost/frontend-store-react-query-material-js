import styled from '@emotion/styled'
import { Button, Input, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { REGISTRATION_ROUTE } from '../utils/consts'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #cecece;
`

const Card = styled.div`
  width: 400px;
  padding: 2rem;
  border: 1px solid #888;
  border-radius: 0.25rem;
  background-color: white;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`

const TheInput = styled.input`
  flex-grow: 1;
  padding: 0.25rem;
`

const Title = styled.h1`
  margin: 0;
  font-size: x-large;
  text-align: center;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const RegisterLink = styled.div``

export const AuthPage = () => {
  return (
    <Container>
      <Card>
        <Title>Авторизация</Title>
        <Form>
          <Input placeholder="Введите ваш email" />
          <Input placeholder="Введите ваш пароль" />
          <ButtonWrapper>
            <RegisterLink>
              Нет аккаунта?{' '}
              <Link to={REGISTRATION_ROUTE} component={RouterLink}>
                Зарегистрируйся!
              </Link>
            </RegisterLink>
            <Button>Войти</Button>
          </ButtonWrapper>
        </Form>
      </Card>
    </Container>
  )
}
