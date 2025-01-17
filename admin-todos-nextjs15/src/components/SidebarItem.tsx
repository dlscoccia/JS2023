'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  title: string
  href: string
  icon: React.ReactNode
}

export const SidebarItem = ({ title, href, icon }: Props) => {
  const path = usePathname()

  return (
    <li>
      <Link
        href={href}
        className={`px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group hover:bg-gradient-to-r hover:bg-sky-500 hover:to-sky-700 hover:text-white ${
          path === href &&
          'text-white bg-gradient-to-r from-sky-600 to-cyan-400'
        }`}
      >
        {icon}
        <span className='group-hover:text-white font-medium'>{title}</span>
      </Link>
    </li>
  )
}
