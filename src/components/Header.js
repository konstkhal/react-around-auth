/**
 * @format done by Prettier
 * @function Header returns Header element
 *
 *
 */
import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import logo from '../images/Vector__header.svg';
import {UserContext} from '../contexts/CurrentUserContext';

/* import HeaderNav from './HeaderNav'; */

export default function Header ({ isLoggedIn, email, handleLogout }) {
  const currentUser = React.useContext(UserContext);
  const currentPath = useLocation().pathname;

  return (
    <header className='header'>
   {/*    <Link to="/"> } // Need to know, why this does not work */}
      <img
        src={logo}
        className='header__logo'
        alt='Logo around the us - Just text'
      />
{/*       </Link> */}
{/*       <HeaderNav {...props} /> */}

<div>
        {isLoggedIn ? (
          <div className="header__container">
            <p className="header__email">{currentUser.email}</p>
            <div className='header__text' onClick={handleLogout}>
              Log Out
            </div>
          </div>
        ) : (
            <div>
              <Link to={currentPath.pathname === '/signin' ? '/signup' : '/signin'} className='header__link'>
              {currentPath.pathname === '/signin' ? 'Sign up' : 'Sign in'}
              </Link>
            </div>
        )}
      </div>



    </header>
  );
};


