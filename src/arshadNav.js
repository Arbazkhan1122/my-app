import React, { useState } from 'react';
import './arshadNav.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__data">
          <a href="#" className="nav__logo">
            <i className="ri-planet-line"></i> Company
          </a>
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <i className={`ri-menu-line nav__burger ${isMenuOpen ? 'show-icon' : ''}`}></i>
            <i className={`ri-close-line nav__close ${isMenuOpen ? 'show-icon' : ''}`}></i>
          </div>
        </div>

        <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">

            <li className="dropdown__item">
              <div className="nav__link">
                Known us <i className="ri-arrow-down-s-line dropdown__arrow"></i>
              </div>
              <ul className="dropdown__menu">
                <li>
                  <a href="#" className="dropdown__link">
                    <i className="ri-pie-chart-line"></i> Overview
                  </a>
                </li>

                <li>
                  <a href="#" className="dropdown__link">
                    <i className="ri-arrow-up-down-line"></i> Transactions
                  </a>
                </li>

                <li>
                  <a href="#" className="dropdown__link">
                    <i className="ri-arrow-up-down-line"></i> Reports
                  </a>
                </li>
              </ul>
            </li>

            <li className="dropdown__item">
              <div className="nav__link">
                Oue VENTUERS <i className="ri-arrow-down-s-line dropdown__arrow"></i>
              </div>
              <ul className="dropdown__menu">
                <li>
                  <a href="#" className="dropdown__link">
                    <i className="ri-pie-chart-line"></i> Overview
                  </a>
                </li>

                <li>
                  <a href="#" className="dropdown__link">
                    <i className="ri-arrow-up-down-line"></i> Transactions
                  </a>
                </li>

                <li>
                  <a href="#" className="dropdown__link">
                    <i className="ri-arrow-up-down-line"></i> Reports
                  </a>
                </li>
              </ul>
            </li>

            <li><a href="#" className="nav__link">Products</a></li>

            <li className="dropdown__item">
              <div className="nav__link">
                Services
                <i className="ri-arrow-down-s-line dropdown__arrow"></i>
              </div>
              <ul className="dropdown__menu">
                <li>
                  <a href="#" className="dropdown__link">
                    <i className="ri-pie-chart-line"></i> Overview
                  </a>
                </li>

                <li>
                  <a href="#" className="dropdown__link">
                    <i className="ri-arrow-up-down-line"></i> Transactions
                  </a>
                </li>

                <li>
                  <a href="#" className="dropdown__link">
                    <i className="ri-arrow-up-down-line"></i> Reports
                  </a>
                </li>
              </ul>
            </li>
            <li><a href="#" className="nav__link">Contact us</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;