import MenuIcon from '@icons/MenuIcon'
import logo from '@assets/n-neito-logo.svg'

const Header = () => {
  return (
    <header className=" header">
      <div className="header__content">
        <div className="header__side">
          <img className="logo" src={logo} alt="neito" />
        </div>
        <div className="header__side">
          <button className="header__nav-button">
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
