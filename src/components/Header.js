/**
 * @format done by Prettier
 * @function Header returns Header element
 *
 *
 */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/Vector__header.svg';
import { UserContext } from '../contexts/CurrentUserContext';
/* import HeaderNav from './HeaderNav'; */

export default function Header({
	isLoggedIn,
	handleLogout,
}) {
	const currentUser = React.useContext(UserContext);
	const currentPath = useLocation().pathname;
	//console.log('isLoggedIn: ' + isLoggedIn);
	/* console.log(
		'currentUser: ' + JSON.stringify(currentUser)
	); */
	//console.log('currentUser.email: ' + currentUser.email);

	return (
		<header className='header'>
			{/*    <Link to="/"> } // Need to know, why this does not work */}
			<img
				src={logo}
				className='header__logo'
				alt='Logo around the us - Just text'
			/>
			{/*       </Link> */}

			{isLoggedIn ? (
				<div className='header__container'>
					<p className='header__email'>
						{currentUser.email}
					</p>
					<div
						className='header__text'
						onClick={handleLogout}
					>
						Log Out
					</div>
				</div>
			) : (
				<Link
					to={
						currentPath.pathname === '/signin'
							? '/signup'
							: '/signin'
					}
					className='header__link'
				>
					{currentPath.pathname === '/signin'
						? 'Sign up'
						: 'Sign in'}
				</Link>
			)}
		</header>
	);
}

/*
  <header className="header">
      <img
        src={logo}
        alt="Around the U.S logo"
        className="header__logo"
        id="logo"
      />

      <div>
        {loggedIn ? (
          <div className="header__container">
            <p className="header__email">{email}</p>
            <div className='header__text' onClick={signOut}>
              Log Out
            </div>
          </div>
        ) : (
            <div>
              <Link to={location.pathname === '/signin' ? '/signup' : '/signin'} className='header__link'>
              {location.pathname === '/signin' ? 'Sign up' : 'Sign in'}
              </Link>
            </div>
        )}
      </div>
    </header>


*/
