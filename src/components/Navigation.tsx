const Navigation = () => {
  return (
    <nav className="container_main nav">
      <div className="nav__content">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="" className="nav__name-page">
              Главная
            </a>
          </li>
          <li className="nav__item">
            <a href="" className="nav__name-page">
              Проекты
            </a>
          </li>
          <li className="nav__item">
            <a href="" className="nav__name-page">
              Обо мне
            </a>
          </li>
          <li className="nav__item">
            <a href="" className="nav__name-page">
              Контакты
            </a>
          </li>
        </ul>

        <div className="nav__social">
          <div className="nav__link_wrapper group">
            <a className="social__link " href="">
              ↗ telegram
            </a>
            <div className="social__link-line -translate-x-full  group-hover:translate-x-0"></div>
          </div>
          <div className="nav__link_wrapper group">
            <a className="social__link " href="">
              ↗ vk
            </a>
            <div className="social__link-line -translate-x-full  group-hover:translate-x-0"></div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
