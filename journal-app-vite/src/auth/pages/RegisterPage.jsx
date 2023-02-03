import { Link as RouterLink } from 'react-router-dom'
import { Grid, Typography, TextField, Button, Link, Alert } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startRegisterUserWithEmailPassword } from '../../store/auth/thunks'

const formData = {
  email: '',
  password: '',
  displayName: '',
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe tener un @'],
  password: [
    (value) => value.length >= 6,
    'El password debe tener más de 6 letras',
  ],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {
  const dispatch = useDispatch()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { status, errorMessage } = useSelector((state) => state.auth)
  const isCheckingAuthentication = useMemo(
    () => status === 'checking',
    [status]
  )

  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations)

  const onSubmit = (event) => {
    event.preventDefault()
    setFormSubmitted(true)

    if (!isFormValid) return

    dispatch(startRegisterUserWithEmailPassword(formState))
  }

  return (
    <AuthLayout title='Crear cuenta'>
      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn'>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Nombre Completo'
              type='name'
              placeholder='Nombre Completo'
              fullWidth
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Correo'
              type='email'
              placeholder='Correo@google.com'
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Contraseña'
              type='password'
              placeholder='Contraseña'
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12}>
              <Button
                type='submit'
                variant='contained'
                fullWidth
                disabled={isCheckingAuthentication}
              >
                Crear cuenta
              </Button>
            </Grid>
            <Grid item></Grid>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link color='inherit' to='/auth/login' component={RouterLink}>
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
