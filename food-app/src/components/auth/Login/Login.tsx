import { useFormik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'
import * as Yup from 'yup'
import { login } from '@/core/global/slices/sessionSlice'
import { authRepository } from '../../../core/services/auth.service'
import { useAppDispatch } from '../../../core/global/hooks'

export const Login = () => {
  const { push } = useRouter()
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      const { acces_token } = await authRepository
        .login(values)
        .then(({ data }: any) => data)
        .catch((error: any) => Swal.fire(error.message))

      if (acces_token) {
        dispatch(login())
        await push('/recipes')
      }
    },
  })

  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-100'>
      <div className='w-4/5 max-w-md'>
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
          <div className='flex flex-col gap-3 items-center justify-between'>
            <div className='w-full flex justify-between'>
              <button
                type='submit'
                className='bg-lime-700 hover:bg-lime-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              >
                Sign In
              </button>
              <Link href='/auth/register'>
                <button
                  type='submit'
                  className='bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                >
                  Register
                </button>
              </Link>
            </div>
            <a
              className='inline-block align-baseline font-bold text-sm text-lime-500 hover:text-lime-800'
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
