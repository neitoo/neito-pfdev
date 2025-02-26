import { Outlet } from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation'

const Layout = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
      <div className="noise"></div>
    </>
  )
}

export default Layout
