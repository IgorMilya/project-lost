import { FC } from 'react'
import { useLoginMutation } from 'store/api'
import { UserLoginRequestType } from 'types/UserType'
import { Navigate } from 'react-router-dom'
import { Login } from './login'

const LoginPage: FC = () => {
  const [login, { isSuccess, isError, error }] = useLoginMutation()

  const handleSubmitLogin = (value: UserLoginRequestType) => {
    login(value)
  }

  if (isSuccess) {
    return <Navigate to="/home" />
  }

  return <Login onSubmit={handleSubmitLogin} isError={isError} error={error} />
}

export default LoginPage
