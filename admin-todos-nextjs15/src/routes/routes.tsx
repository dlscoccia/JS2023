import { IoCalendar, IoCheckboxOutline, IoListOutline } from 'react-icons/io5'

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
]
