

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="header">
      <div className="header__container container">
      <a>
        <img src="./logo.svg" alt="logo"/>
      </a>
      
      <nav className="nav">
        <ul className="nav__menu">
          <li className="nav__menu-item">
            <a className="nav__menu-link">
              Карточки
            </a>
          </li>
          <li className="nav__menu-item">
            <a className="nav__menu-link">Создать карточку</a>
          </li>
          <li className="nav__menu-item">
            <a className="nav__menu-link">Информация</a>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  )
}

export default Header