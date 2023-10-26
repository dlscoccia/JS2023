import { configureStore } from '@reduxjs/toolkit'
import recipeSlice from './slices/recipeSlice'
import recipesSlices from './slices/recipesSlices'
import sessionSlice from './slices/sessionSlice'
// ...

export const store = configureStore({
  reducer: {
    recipe: recipeSlice,
    recipes: recipesSlices,
    session: sessionSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
