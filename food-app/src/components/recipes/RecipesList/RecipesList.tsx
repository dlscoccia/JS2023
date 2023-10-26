import Image from 'next/image'
import { BsClock } from 'react-icons/bs'
import { IoMdGlobe } from 'react-icons/io'
import Link from 'next/link'

export const RecipesList = ({}) => {
  const recipes = [
    {
      id: 1,
      name: 'Spaghetti Carbonara',
      image:
        'https://images.unsplash.com/photo-1556761223-4c4282c73f77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
      description:
        'Classic italian pasta dish made with eggs, pancetta and parmesan cheese.',
      origin: 'Italy',
      cookTime: '45 min',
    },
    {
      id: 2,
      name: 'Chicken Alfredo',
      image:
        'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      description:
        'Creamy pasta dish made with chicken, heavy cream, and parmesan cheese.',
      origin: 'Italy',
      cookTime: '45 min',
    },
    {
      id: 3,
      name: 'Beef Stroganoff',
      image:
        'https://images.unsplash.com/photo-1602540953134-e753ac78e81d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
      description: 'Russian dish made with beef, sour cream, and mushrooms.',
      origin: 'Italy',
      cookTime: '45 min',
    },
  ]

  return (
    <div className='flex flex-col  items-center justify-center mt-12 w-4/5 mx-auto mb-20'>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className='bg-white shadow-lg rounded-lg mx-2 my-4 w-full'
        >
          <Link
            href={`/recipe/${recipe.id}`}
            className='flex flex-col md:flex-row'
          >
            <div className='h-60 overflow-hidden rounded-t-lg'>
              <Image
                src={recipe.image}
                alt={`Image of ${recipe.name}`}
                width={300}
                height={200}
                className='object-cover h-full  w-full'
              />
            </div>
            <div className='w-full p-4 divide-y'>
              <h2 className='font-bold text-xl mb-3'>
                {recipe.id} | {recipe.name}
              </h2>
              <div className='flex justify-between'>
                <p className='flex  items-center mt-2 gap-2'>
                  <IoMdGlobe className='h-4 w-4' />
                  {recipe.origin}
                </p>
                <p className='flex  items-center mt-2 gap-2'>
                  <BsClock className='h-4 w-4' /> {recipe.cookTime}
                </p>
              </div>
              <p className='mt-2 pt-2 divide-y-4 divide-x-4'>
                {recipe.description}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}
