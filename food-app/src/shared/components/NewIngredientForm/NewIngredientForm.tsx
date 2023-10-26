import { useAppDispatch } from '@/core/global/hooks'
import { addNewIngredient, total } from '@/core/global/slices/recipeSlice'
import { addNewRecipe } from '@/core/global/slices/recipesSlices'
import { useFormik } from 'formik'

export const NewIngredientForm = () => {
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      ingredient: '',
      qty: 0,
      price: 0,
    },
    onSubmit: (values) => {
      dispatch(addNewIngredient(values))
    },
  })
  return (
    <form onSubmit={formik.handleSubmit} className='flex flex-col'>
      <label htmlFor='email'>Ingredients</label>
      <input
        id='ingredient'
        name='ingredient'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.ingredient}
      />
      <label htmlFor='email'>Qty</label>
      <input
        id='qty'
        name='qty'
        type='number'
        onChange={formik.handleChange}
        value={formik.values.qty}
      />
      <label htmlFor='email'>Price / gr</label>
      <input
        id='price'
        name='price'
        type='number'
        onChange={formik.handleChange}
        value={formik.values.price}
      />
      <button type='submit'>Add</button>
    </form>
  )
}
