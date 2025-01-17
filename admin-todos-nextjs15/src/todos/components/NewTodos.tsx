'use client'
import { FormEvent, useState } from 'react'
import { IoTrashOutline } from 'react-icons/io5'
import { createTodo, deleteCompleted } from '../actions/todo-actions'

export const NewTodo = () => {
  const [description, setDescription] = useState('')

  const onSumbit = async (event: FormEvent) => {
    event.preventDefault()
    if (description.trim().length === 0) return

    const todo = await createTodo(description)
    if (todo) setDescription('')
  }

  return (
    <form onSubmit={onSumbit} className='flex w-full'>
      <input
        onChange={(event) => setDescription(event.target.value)}
        value={description}
        type='text'
        className='w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all'
        placeholder='¿Qué necesita ser hecho?'
      />

      <button
        type='submit'
        className='flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all'
      >
        Create
      </button>

      <span className='flex flex-1'></span>

      <button
        onClick={() => deleteCompleted()}
        type='button'
        className='flex items-center gap-2 justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all'
      >
        <IoTrashOutline />
        Delete completed
      </button>
    </form>
  )
}
