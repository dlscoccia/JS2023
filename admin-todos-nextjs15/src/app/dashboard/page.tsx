import { WidgetItem } from '@/components';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
    const session = await getServerSession(authOptions);

    if (!session) redirect('/api/auth/signin');

    return (
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2'>
            <WidgetItem title='User connected'>
                <div className='flex flex-col gap-3'>
                    <span className='font-semibold'>{session.user?.name}</span>
                    <span>{session.user?.email}</span>
                    <span>{session.user?.image}</span>
                </div>
            </WidgetItem>
        </div>
    );
}
