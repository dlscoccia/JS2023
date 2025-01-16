'use client'
import { useAppDispatch, useAppSelector } from '@/store'
import {
  addOne,
  initCounterState,
  substractOne,
} from '@/store/counter/counterSlice'
import { useEffect } from 'react'

interface CounterResponse {
  count: number
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch('http://localhost:3000/api/counter').then((resp) =>
    resp.json()
  )

  return data
}

export const CartCounter = () => {
  const count = useAppSelector((state) => state.counter.count)
  const dispatch = useAppDispatch()

  useEffect(() => {
    getApiCounter().then(({ count }) => dispatch(initCounterState(count)))
  }, [dispatch])

  return (
    <>
      <span className='text-9xl'>{count}</span>
      <div className='flex mt-4'>
        <button
          onClick={() => dispatch(addOne())}
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
        >
          +1
        </button>
        <button
          onClick={() => dispatch(substractOne())}
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]'
        >
          -1
        </button>
      </div>
    </>
  )
}
