import { Metadata } from 'next'
import { CartCounter } from '@/components'

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'A simple counter',
}

export default async function CounterPage() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <span>Products on shopping cart</span>
      <CartCounter />
    </div>
  )
}
