import { useAppSelector } from '@/core/global/hooks'
import { logout } from '@/core/global/slices/sessionSlice'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { useAppDispatch } from '../../../core/global/hooks'
import { useEffect, useState } from 'react'
import { GiCat, GiSpellBook } from 'react-icons/gi'
import { FiLogOut, FiUser } from 'react-icons/fi'

const navigation = [
  {
    name: 'Profile',
    href: '/profile',
    icon: <FiUser className='w-8 h-8 text-lime-900' />,
  },
  {
    name: 'Recipes',
    href: '/recipes',
    icon: <GiSpellBook className='w-8 h-8 text-lime-900' />,
  },
]

export const Navbar = () => {
  const isLoggedIn = useAppSelector((state) => state.session.isLoggedIn)
  const [styles, setStyles] = useState(
    'w-full h-16 fixed flex bg-gray-100 p-6 border-b-2 border-lime-600'
  )
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  useEffect(() => {
    function handleScroll(scrollEvent: any) {
      if (window.scrollY > 100) {
        setStyles(
          'w-full h-16 fixed flex bg-gray-100 p-6 border-b-4 border-lime-600 text-lime-600'
        )
      } else {
        setStyles(
          'w-full h-16 fixed flex bg-gray-100 p-6 border-b-2 border-lime-600'
        )
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className='fixed inset-x-0 bottom-0 z-50 bg-gray-100 border-t-2 border-lime-700'>
      <nav
        className='flex items-center justify-between p-2 lg:px-8  bg-transparent'
        aria-label='Global'
      >
        <div className='flex flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>FonziFood</span>
            <GiCat className='h-8 w-8 text-lime-900' />
          </Link>
        </div>
        {isLoggedIn && (
          <div className='flex flex-1 justify-between'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text-sm font-semibold leading-6 text-gray-900'
              >
                {item.icon}
              </Link>
            ))}
          </div>
        )}
        <div className='flex flex-1 justify-end'>
          {isLoggedIn ? (
            <button
              className='text-lg font-semibold leading-6 text-gray-900'
              onClick={handleLogout}
            >
              <FiLogOut className='h-8 w-8  text-lime-900' />{' '}
            </button>
          ) : (
            <Link
              href='/auth/login'
              className='text-lg font-semibold leading-6 text-lime-900'
            >
              Login <span aria-hidden='true'>&rarr;</span>
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}
