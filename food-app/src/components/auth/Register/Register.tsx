import axiosInstance from '@/core/config/axiosInstance'
import RegisterSchema from '@/shared/schemas/registerSchema'
import { useFormik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'
import * as Yup from 'yup'
import { authRepository } from '../../../core/services/auth.service'

export const Register = () => {
  const { push } = useRouter()

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required('Required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Required'),
    }),
    onSubmit: async (values) => {
      const { username } = await authRepository
        .register(values)
        .then(({ data }: any) => data)
        .catch((error: any) => Swal.fire(error.message))

      if (username) {
        await push('/recipes')
      }
    },
  })

  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-100'>
      <div className='w-full max-w-md'>
        <form
          onSubmit={formik.handleSubmit}
          className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        >
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-gray-700 font-bold mb-2'
            >
              Username
            </label>
            <input
              type='username'
              id='username'
              name='username'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter your username'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className='text-red-500'>{formik.errors.username}</div>
            ) : null}
          </div>
          <div className='mb-6'>
            <label
              htmlFor='password'
              className='block text-gray-700 font-bold mb-2'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter your password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className='text-red-500'>{formik.errors.password}</div>
            ) : null}
          </div>
          <div className='mb-6'>
            <label
              htmlFor='confirmPassword'
              className='block text-gray-700 font-bold mb-2'
            >
              Confirm Password
            </label>
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Repeat your password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className='text-red-500'>
                {formik.errors.confirmPassword}
              </div>
            ) : null}
          </div>
          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Sign up
            </button>
            <Link href='/auth/login'>
              <button
                type='button'
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              >
                Login
              </button>
            </Link>
            <a
              className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
              href='#'
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
