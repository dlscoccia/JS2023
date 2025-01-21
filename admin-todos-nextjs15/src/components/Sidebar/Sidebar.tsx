import Image from 'next/image';
import Link from 'next/link';
import { SidebarItem } from './SidebarItem';
import { menuItems } from '@/routes/routes';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { LogoutButton } from './LogoutButton';

export const Sidebar = async () => {
    const session = await getServerSession(authOptions);

    const userName = session?.user?.name ?? 'No name';
    const userImageUrl =
        session?.user?.image ??
        'https://static.valorantstats.xyz/agent-headshots/kayo-headshot.png';
    const userRoles = session?.user?.roles ?? ['client'];

    return (
        <aside className='ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]'>
            <div>
                <div className='-mx-6 px-6 py-4'>
                    <Link href='#' title='home'>
                        <Image
                            src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'
                            className='rounded-3xl'
                            alt='tailus logo'
                            width={75}
                            height={75}
                        />
                    </Link>
                </div>

                <div className='mt-8 text-center'>
                    <Image
                        src={userImageUrl}
                        alt=''
                        className='w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28'
                        width={112}
                        height={112}
                        objectFit='cover'
                    />
                    <h5 className='hidden mt-4 text-xl font-semibold text-gray-600 lg:block'>
                        {userName}
                    </h5>
                    <span className='hidden text-gray-400 lg:block capitalize'>
                        {userRoles.join(', ')}
                    </span>
                </div>

                <ul className='space-y-2 tracking-wide mt-8'>
                    {menuItems.map((item) => (
                        <SidebarItem key={item.title} {...item} />
                    ))}
                </ul>
            </div>

            <div className='px-6 -mx-6 pt-4 flex justify-between items-center border-t'>
                <LogoutButton />
            </div>
        </aside>
    );
};
