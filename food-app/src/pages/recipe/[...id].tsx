import React from 'react'
import { useRouter } from 'next/router'
import { RecipeContainer } from '../../components/Recipes/RecipeContainer/RecipeContainer'

const RecipeScreen = () => {
  const router = useRouter()
  console.log(router)
  return (
    <div>
      <RecipeContainer />
    </div>
  )
}

export default RecipeScreen
