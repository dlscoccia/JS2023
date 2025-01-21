export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { getUserSessionServer } from '@/auth/actions/auth-actions';
import prisma from '@/lib/prisma';
import { NewTodo, TodosGrid } from '@/todos/components';
import { redirect } from 'next/navigation';

export const metadata = {
    title: 'Server Todos Page',
    description: 'SEO Title',
};

export default async function ServerTodosPage() {
    const user = await getUserSessionServer();
    if (!user) redirect('/api/auth/signin');

    const todos = await prisma.todo.findMany({
        where: { userId: user?.id },
        orderBy: { description: 'asc' },
    });

    return (
        <div>
            <span className='text-3xl'>Server Actions</span>
            <div className='w-full px-5 m-5'>
                <NewTodo />
            </div>
            <TodosGrid todos={todos} />
        </div>
    );
}
