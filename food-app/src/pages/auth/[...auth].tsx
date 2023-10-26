import { Login } from '@/components/auth/Login/Login'
import { Auth } from '../../components/auth/Auth'
import { useRouter } from 'next/router'
import { Register } from '@/components/auth/Register/Register'
import { useState } from 'react';


const AuthPage = () => {
  const [authState, setAutState] = useState('login')
  const {
    query: { auth },
  } = useRouter()
  console.log(auth)

  return (<>
    {auth[0] === 'login' ? <Login /> : <Register />
  })
  </>
}
export default AuthPage
