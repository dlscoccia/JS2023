'use client';
import Link from 'next/link';
import {
    IoCloseOutline,
    IoLogInOutline,
    IoLogOutOutline,
    IoPeopleOutline,
    IoPersonOutline,
    IoSearchOutline,
    IoShirtOutline,
    IoTicketOutline,
} from 'react-icons/io5';
import { useUIStore } from '@/store';
import clsx from 'clsx';

export const Sidebar = () => {
    const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);
    const closeSidebar = useUIStore((state) => state.closeSidebar);

    return (
        <div>
            {isSidebarOpen && (
                <div className='fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30' />
            )}

            {isSidebarOpen && (
                <div
                    onClick={closeSidebar}
                    className='fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm'
                />
            )}

            <nav
                className={clsx(
                    'fixed p-5 top-0 right-0 h-screen w-[500px] z-20 bg-white shadow-2xl transform transition-all duration-300',
                    {
                        'translate-x-full': !isSidebarOpen,
                        'translate-x-0': isSidebarOpen,
                    }
                )}>
                <IoCloseOutline
                    size={50}
                    className='absolute top-5 right-5 cursor-pointer'
                    onClick={closeSidebar}
                />

                <div className='relative mt-14'>
                    <IoSearchOutline
                        size={20}
                        className='absolute top-2 left-2'
                    />
                    <input
                        type='text'
                        placeholder='Buscar...'
                        className='w-full bg-gray-50 rounded pl-10 pr-10 py-1 border-b-2 text-xl border-gary-200 focus:outline-none focus:border-blue-700'
                    />
                </div>

                <Link
                    href='/'
                    className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'>
                    <IoPersonOutline size={30} />
                    <span className='ml-3 text-xl'>Perfil</span>
                </Link>
                <Link
                    href='/'
                    className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'>
                    <IoTicketOutline size={30} />
                    <span className='ml-3 text-xl'>Ordenes</span>
                </Link>
                <Link
                    href='/'
                    className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'>
                    <IoLogInOutline size={30} />
                    <span className='ml-3 text-xl'>Ingresar</span>
                </Link>
                <Link
                    href='/'
                    className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'>
                    <IoLogOutOutline size={30} />
                    <span className='ml-3 text-xl'>Salir</span>
                </Link>
                <div className='w-full h-px bg-gray-200 my-10' />
                <Link
                    href='/'
                    className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'>
                    <IoShirtOutline size={30} />
                    <span className='ml-3 text-xl'>Productos</span>
                </Link>
                <Link
                    href='/'
                    className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'>
                    <IoTicketOutline size={30} />
                    <span className='ml-3 text-xl'>Ordenes</span>
                </Link>
                <Link
                    href='/'
                    className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'>
                    <IoPeopleOutline size={30} />
                    <span className='ml-3 text-xl'>Usuarios</span>
                </Link>
            </nav>
        </div>
    );
};
