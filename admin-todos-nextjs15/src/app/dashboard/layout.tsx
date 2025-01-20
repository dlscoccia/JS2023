import { Sidebar, TopMenu } from '@/components';
import { PropsWithChildren } from 'react';

export default function DashboardLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Sidebar />
            <div className='ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen'>
                <TopMenu />
                <div className='px-6 pt-6 bg-white p-2 pb-5 m-2 rounded'>
                    {children}
                </div>
            </div>
        </>
    );
}
