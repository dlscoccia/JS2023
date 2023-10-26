import { FiMail } from 'react-icons/fi'
import Link from 'next/link'
import { ImageGallery } from '@/shared/components/ImageGallery/ImageGallery'

const LandingPage = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-lime-700'>
      <div className='bg-white bg-opacity-50 rounded-2xl p-8 sm:p-16 max-w-md w-full mt-5 flex flex-col items-center'>
        <h1 className='text-4xl sm:text-5xl font-bold mb-8 text-center text-gray-700'>
          My Recipe Book
        </h1>
        <p className='text-xl sm:text-2xl text-gray-700 mb-8 text-center'>
          Keep all your favorite recipes in one place
        </p>
        <Link href='/auth/register'>
          <button className='bg-lime-700 hover:bg-lime-900 text-white font-bold py-3 px-6 rounded-md inline-block transition-colors duration-300'>
            Join now
          </button>
        </Link>
      </div>

      <ImageGallery />

      <div className='bg-white bg-opacity-50 rounded-2xl p-8 sm:p-16 mt-8 max-w-md w-full'>
        <h2 className='text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800'>
          Join Our Newsletter
        </h2>
        <p className='text-lg sm:text-xl text-gray-700 mb-8 text-center'>
          Sign up to receive the latest recipes, tips, and news from My Recipe
          Book
        </p>
        <form className='flex flex-col sm:flex-row justify-center items-center'>
          <input
            className='bg-gray-100 rounded-lg py-2 px-4 mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto'
            type='email'
            placeholder='Your Email'
          />
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full inline-block transition-colors duration-300'
            type='submit'
          >
            <FiMail className='inline-block mr-2' />
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default LandingPage
