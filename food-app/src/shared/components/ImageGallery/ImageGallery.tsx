import { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import Link from 'next/link'
import { Stats } from '@/components/landing/Stats/Stats'
import { TrustedBy } from '../../../components/landing/TrustedBy/TrustedBy'
import { Footer } from '../../../components/landing/Footer/Footer'
import { client } from '@/client'

const QUERY = gql`
  query ExampleQuery {
    personCount
  }
`

export const ImageGallery = () => {
  const { loading, error, data } = useQuery(QUERY, { client })
  console.log(loading, error, data)

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className='bg-gradient-to-r from-gray-100 to-lime-500'>
      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <div className='mx-auto max-w-3xl py-32 sm:py-48 lg:py-56'>
          <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
            <div className='relative rounded-full py-1 px-3 text-md leading-6 text-gray-600 ring-1 ring-lime-700/10 hover:ring-lime-700/20'>
              Discover, Create, and Share Delicious Recipes with FonziFood!
            </div>
          </div>
          <div className='text-center'>
            <h1 className='text-2xl font-bold tracking-tight text-gray-800 sm:text-6xl'>
              Join The Foodie Revolution <br /> Share Your Passion For Cooking
              with FonziFood!
            </h1>
            <p className='mt-6 text-lg leading-8 text-lime-900'>
              Whether you&apos;re looking to discover new recipes, share your
              own creations, or even publish your own cookbook, Fonzifood has
              got you covered. So <b>why settle for boring meals</b> when you
              can join the Fonzifood community and unleash your inner chef?
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-2'>
              <Link
                href='/auth/register'
                className='rounded-sm bg-lime-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600'
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Stats />
      <TrustedBy />
      <Footer />
    </div>
  )
}
