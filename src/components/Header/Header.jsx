import React from 'react'

function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <img src="./img/logo.svg" alt="logo"/>
        <nav className="nav">
          <ul className="nav__menu">
            <li className="nav__menu-item">
              <a href="#" className="nav__menu-link">Карточки</a>
            </li>
            <li className="nav__menu-item">
              <a href="#" className="nav__menu-link">Создать карточку</a>
            </li>
            <li className="nav__menu-item">
              <a href="#" className="nav__menu-link">Информация</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header