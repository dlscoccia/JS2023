'use client';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function ProfilePage() {
    const [userData, setUserData] = useState({});

    const { data: session } = useSession();

    useEffect(() => {
        console.log('Client side');
    }, []);

    return (
        <div>
            <h1 className='text-3xl font-semibold'>Profile Page</h1>
            <hr className='my-2' />
            <div className='flex flex-col gap-3'>
                <span className='text-lg font-semibold'>
                    {session?.user?.name ?? 'No name'}
                </span>
                <span className='text-lg'>
                    {session?.user?.email ?? 'No email'}
                </span>
                <span className='text-lg'>
                    {session?.user?.image ?? 'No image'}
                </span>
                <span className='text-lg'>{session?.user?.id ?? 'No id'}</span>
                <span className='capitalize'>
                    {session?.user?.roles?.join(',') ?? 'No roles'}
                </span>
            </div>
        </div>
    );
}
