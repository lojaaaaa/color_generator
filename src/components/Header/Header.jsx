import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <NavLink to='/'>
          <img src="./img/logo.svg" alt="logo"/>
        </NavLink>
        
        <nav className="nav">
          <ul className="nav__menu">
            <li className="nav__menu-item">
              <NavLink to='/' className="nav__menu-link">
                Карточки
              </NavLink>
            </li>
            <li className="nav__menu-item">
              <NavLink to='/create' className="nav__menu-link">Создать карточку</NavLink>
            </li>
            <li className="nav__menu-item">
              <NavLink to='/info' className="nav__menu-link">Информация</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header