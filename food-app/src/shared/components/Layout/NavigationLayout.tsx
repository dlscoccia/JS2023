import { ReactElement } from 'react'
import { Navbar } from '../Navbar/Navbar'

type NavLayoutProps = {
  children: ReactElement
}

export const NavigationLayout = ({ children }: NavLayoutProps) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  )
}
