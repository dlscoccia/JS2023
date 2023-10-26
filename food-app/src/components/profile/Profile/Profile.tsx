import React, { useState } from 'react'
import { useRouter } from 'next/router'
import ModalContainer from '../../../shared/components/Modal/ModalContainer'

const ProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  const handleDeleteAccount = () => {
    // TODO: implement delete account functionality
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }
  return (
    <>
      <ModalContainer isModalOpen={isModalOpen}>
        <div className='flex flex-col'>
          <h2 className='text-center my-3'>Are you sure?</h2>
          <div className='flex justify-evenly'>
            <button
              className='bg-red-700 rounded-md p-2 text-white hover:bg-red-900'
              onClick={() => alert('Deleted, bye')}
            >
              Delete anyway
            </button>
            <button
              onClick={handleCloseModal}
              className='bg-gray-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-gray-600'
            >
              Close
            </button>
          </div>
        </div>
      </ModalContainer>
      <div className='min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Profile Information
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
            View and manage your profile information below
          </p>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <div className='mt-6'>
              <div className='text-gray-600 font-bold uppercase tracking-wide mb-2'>
                Favorite Recipes:
              </div>
              <ul className='list-disc ml-5'>
                <li>Recipe 1</li>
                <li>Recipe 2</li>
                <li>Recipe 3</li>
              </ul>
            </div>
            <div className='mt-6'>
              <div className='text-gray-600 font-bold uppercase tracking-wide mb-2'>
                Date Joined:
              </div>
              <div className='text-gray-900 font-medium'>March 23, 2022</div>
            </div>
            <div className='mt-6'>
              <div className='text-gray-600 font-bold uppercase tracking-wide mb-2'>
                Recipes Uploaded:
              </div>
              <div className='text-gray-900 font-medium'>5</div>
            </div>
            <div className='mt-8'>
              <button
                type='button'
                className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm'
                onClick={handleDeleteAccount}
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage
