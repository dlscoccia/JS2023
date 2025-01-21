import {
    IoCalendar,
    IoCartOutline,
    IoCheckboxOutline,
    IoCode,
    IoListOutline,
    IoPersonOutline,
} from 'react-icons/io5';

export const menuItems = [
    {
        title: 'Dashboard',
        icon: <IoCalendar size={30} />,
        href: '/dashboard',
    },
    {
        title: 'REST Todos',
        icon: <IoCheckboxOutline size={30} />,
        href: '/dashboard/rest-todos',
    },
    {
        title: 'Server Actions',
        icon: <IoListOutline size={30} />,
        href: '/dashboard/server-todos',
    },
    {
        title: 'Cookies',
        icon: <IoCode size={30} />,
        href: '/dashboard/cookies',
    },
    {
        title: 'Products',
        icon: <IoCartOutline size={30} />,
        href: '/dashboard/products',
    },
    {
        title: 'Profile',
        icon: <IoPersonOutline size={30} />,
        href: '/dashboard/profile',
    },
];
