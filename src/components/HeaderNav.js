import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import menuIcon from '../images/menu.svg';
import closeButton from '../images/Vector-1.svg';
import {UserContext} from '../contexts/CurrentUserContext';

export default function HeaderNav ({ isLoggedIn, handleLogout, handleMenuClick, isDropDownOpen, isMobileSized } ) {

  const currentPath = useLocation().pathname;
  const linkTo = currentPath === '/signin' ? '/signup' : '/signin';
  const linkText = linkTo === '/signin' ? 'Log in' : 'Sign up';
  const currentUser = React.useContext(UserContext);
 //console.log (isLoggedIn);

  return /*isMobileSized &&*/ isLoggedIn ? (
    <img
      style={{ cursor: 'pointer' }}
      onClick={handleMenuClick}
      className={isDropDownOpen ? 'header__nav-link header__nav-link_type_close' : 'header__nav-link'}
      src={isDropDownOpen ? closeButton : menuIcon}
      alt={isDropDownOpen ? 'close icon' : 'hamburger style menu icon'}
    ></img>
  ) : isLoggedIn ? (
    <div className="header__nav-wrapper">
      <span className="header__user-email">{currentUser.email}</span>
      <div className="header__nav-link" onClick={handleLogout}>
        <Link to={'/signin'} style={{ color: '#A9A9A9', textDecoration: 'inherit', border:'solid red 1px'}}>
          {'Log out'}
        </Link>
      </div>
    </div>
  ) : (
    <span className="header__nav-link">
      <Link to={linkTo} style={{ color: 'inherit', textDecoration: 'inherit', border:'solid green 1px' }}>
        {linkText}
      </Link>
    </span>
  );
};

