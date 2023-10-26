import { RecipeIngredients } from '../RecipeIngredients/RecipeIngredients'
import RecipeLinks from '../RecipeLinks/RecipeLinks'
import { RecipeSteps } from '../RecipeSteps/RecipeSteps'
export const RecipeContainer = () => {
  return (
    <div className='flex flex-col md:flex-row w-full pb-10'>
      {/* First Section */}
      <div className='w-full md:w-1/2 h-full overflow-hidden'>
        <img
          className='object-cover object-center w-full h-full'
          src='https://images.unsplash.com/photo-1602540953134-e753ac78e81d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
          alt='Recipe'
        />
      </div>
      {/* Second Section */}
      <div className='w-full md:w-1/2 px-4 py-8 md:py-12'>
        <h2 className='text-3xl font-bold mb-4'>Recipe Title</h2>
        <RecipeIngredients />
        <RecipeSteps />
        <RecipeLinks />
      </div>
    </div>
  )
}
