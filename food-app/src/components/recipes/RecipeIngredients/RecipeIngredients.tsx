import { useFormik } from 'formik'
import { AiOutlineSave, AiOutlineEdit } from 'react-icons/ai'

export const RecipeIngredients = () => {
  const formik = useFormik({
    initialValues: {
      inputs: [''], // inicialmente hay un input vacío
      inputStates: [false], // inicialmente todos los inputs están deshabilitados
    },
    onSubmit: (values) => {
      console.log(values)
    },
  })

  const addInput = () => {
    // actualiza el estado de formik para agregar un nuevo input vacío
    formik.setValues({
      ...formik.values,
      inputs: [...formik.values.inputs, ''],
      inputStates: [...formik.values.inputStates, false], // agrega el estado de habilitar/deshabilitar para el nuevo input
    })
  }

  const toggleInputState = (index: number) => {
    // actualiza el estado de habilitar/deshabilitar para el input correspondiente
    const newInputStates = [...formik.values.inputStates]
    newInputStates[index] = !newInputStates[index]
    formik.setValues({
      ...formik.values,
      inputStates: newInputStates,
    })
  }

  return (
    <form onSubmit={formik.handleSubmit} className='my-5 flex flex-col gap-3'>
      <button type='button' onClick={addInput} className='btn-action'>
        Add ingredient
      </button>
      {formik.values.inputs.map((input, index) => (
        <div key={index} className='flex'>
          <label
            htmlFor={`input-${index}`}
            className='mr-3 flex-grow-1'
          >{`Ingredient #${index + 1}`}</label>
          <input
            id={`input-${index}`}
            name={`inputs[${index}]`}
            type='text'
            onChange={formik.handleChange}
            value={formik.values.inputs[index]}
            className='flex-grow border-2 border-b-lime-900 outline-none'
            disabled={formik.values.inputStates[index]} // habilita/deshabilita el input según el estado correspondiente
          />
          <button type='button' onClick={() => toggleInputState(index)}>
            {formik.values.inputStates[index] ? (
              <AiOutlineEdit />
            ) : (
              <AiOutlineSave />
            )}
          </button>
        </div>
      ))}
    </form>
  )
}
