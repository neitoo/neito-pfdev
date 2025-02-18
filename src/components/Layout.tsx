import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <div className="noise"></div>
    </>
  )
}

export default Layout
