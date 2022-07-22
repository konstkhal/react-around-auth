/** @format */

import React from 'react';
import profile__photo from '../images/image.png';
import profile__change from '../images/pen.svg';
import link__add from '../images/Vector-1.svg';
import { api } from '../utils/api';
import Card from './Card';

function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
}) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] =
    React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo().then((userData) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
    });
    api.getCardList().then((cardData) => {
      setCards(cardData);
    });
  }, []);

  const profile__photo = userAvatar;

  return (
    <main className='content'>
      <section className='profile'>
        <div className='profile__photo-container'>
          <div className='profile__cover-overlay'></div>
          <img
            src={profile__photo}
            className='profile__photo'
            alt='Alt placeholder'
          />
          <button
            type='button'
            className='button profile__link-change profile__link-change_place_image'
            onClick={() => onEditAvatarClick}>
            <img
              src={profile__change}
              className='profile__image-change profile__image-change_place_image'
              alt='Alt placeholder'
            />
          </button>
        </div>

        <div className='profile__info'>
          <h1 className='profile__name'>
            Jacques Cousteau
          </h1>

          <button
            type='button'
            className='button profile__link-change profile__link-change_place_profile'>
            <img
              src={profile__change}
              className='profile__image-change'
              alt='Alt placeholder'
            />
          </button>

          <p className='profile__role'>Explorer</p>
        </div>

        <button
          type='button'
          className='button profile__link-add'>
          <img
            src={link__add}
            className='profile__image-add'
            alt='Alt placeholder'
          />
        </button>
      </section>

      <section className='photo-grid'>
        <ul className='photo-grid__list'></ul>
      </section>
    </main>
  );
}

export default Main;
