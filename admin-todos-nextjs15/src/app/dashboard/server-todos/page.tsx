export const dynamic = 'force-dynamic'
export const revalidate = 0

import prisma from '@/lib/prisma'
import { NewTodo, TodosGrid } from '@/todos/components'

export const metadata = {
  title: 'Server Todos Page',
  description: 'SEO Title',
}

export default async function ServerTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })

  return (
    <div>
      <span className='text-3xl'>Server Actions</span>
      <div className='w-full px-5 m-5'>
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  )
}
