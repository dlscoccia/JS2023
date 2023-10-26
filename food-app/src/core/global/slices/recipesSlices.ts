import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { RecipeState } from './recipeSlice'

// Define a type for the slice state
export interface RecipesState {
  value: number
}

const initialState: RecipeState[] = [
  {
    id: 1,
    title: 'Pasta Carbonara',
    ingredients: [
      {
        ingredient: 'pasta',
        qty: 200,
        price: 6.5,
      },
      {
        ingredient: 'queso',
        qty: 100,
        price: 120,
      },
      {
        ingredient: 'tocineta',
        qty: 50,
        price: 20.2,
      },
    ],
    total: 0,
  },
  {
    id: 2,
    title: 'Quiche Lorreine',
    ingredients: [
      {
        ingredient: 'pasta',
        qty: 200,
        price: 6.5,
      },
      {
        ingredient: 'queso',
        qty: 100,
        price: 120,
      },
      {
        ingredient: 'tocineta',
        qty: 50,
        price: 20.2,
      },
    ],
    total: 0,
  },
  {
    id: 3,
    title: 'Tiramisu',
    ingredients: [
      {
        ingredient: 'pasta',
        qty: 200,
        price: 6.5,
      },
      {
        ingredient: 'queso',
        qty: 100,
        price: 120,
      },
      {
        ingredient: 'tocineta',
        qty: 50,
        price: 20.2,
      },
    ],
    total: 0,
  },
]

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    addNewRecipe: (state, { payload }) => {
      state.push(payload)
    },
  },
})

export const { addNewRecipe } = recipesSlice.actions

// Other code such as selectors can use the imported `RootState` type

export default recipesSlice.reducer
