import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
type ingredientsType = {
  ingredient: string
  qty: number
  price: number
}

export interface RecipeState {
  id: number
  title: string
  ingredients: ingredientsType[]
  total: number
}

const initialState: RecipeState = {
  id: 0,
  title: '',
  ingredients: [],
  total: 0,
}

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    getRecipe: (state) => {
      console.log(state)
    },
    addNewIngredient: (state, { payload }) => {
      state.ingredients.push(payload)
      let newTotal: number = 0
      state.ingredients.forEach(({ price, qty }) => {
        newTotal += price * qty
      })
      state.total = newTotal
    },
    getTotal: (state) => {},
  },
})

export const { getRecipe, addNewIngredient, getTotal } = recipeSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const total = (state: RootState) => state.recipe.total
export const ingredients = (state: RootState) => state.recipe.ingredients

export default recipeSlice.reducer
