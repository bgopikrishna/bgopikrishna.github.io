import React from 'react';
import navbarStyle from './Navbar.module.css';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faCircle } from '@fortawesome/free-solid-svg-icons';
import Header from './header';
import { ROUTES } from '../../constants/constants';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const nightModeIcon = darkMode ? (
    <FontAwesomeIcon icon={faSun} />
  ) : (
    <FontAwesomeIcon icon={faMoon} />
  );
  const nightModeIconStyle = darkMode ? navbarStyle.day : navbarStyle.night;

  return (
    <div className={`${navbarStyle.navsection}`}>
      <Header />
      <nav>
        <ul className={navbarStyle.navbar}>
          {ROUTES.length !== 0 &&
            ROUTES.map(route => (
              <li className={navbarStyle.navitem} key={route.pathName}>
                <Link
                  className={navbarStyle.navlink}
                  to={route.path}
                  activeClassName={navbarStyle.linkActive}>
                  {' '}
                  <span className={navbarStyle.navlinkIcon}>
                    <FontAwesomeIcon icon={route.icon} />
                  </span>
                  <span>{route.pathName}</span>
                </Link>
              </li>
            ))}
        </ul>
      </nav>
      <div className="top_action">
        <button
          className={`${navbarStyle.nightModeBtn} ${nightModeIconStyle}`}
          onClick={toggleDarkMode}
          aria-label="toggle darkmode"
          title="toggle darkmode">
          {nightModeIcon}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
