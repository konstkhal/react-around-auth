/** @format */

import React from 'react';
//import profile__photo from '../images/image.png';
import profileChangeImage from '../images/pen.svg';
import linkAddImage from '../images/Vector-1.svg';
import { api } from '../utils/api.js';
import Card from './Card.js';

function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
  onDeleteCardClick,
}) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] =
    React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => console.log(err));
    api
      .getInitialCards()
      .then((cardData) => {
        setCards(cardData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className='content'>
      <section className='profile'>
        <div className='profile__photo-container'>
          <div className='profile__cover-overlay' />
          <img
            src={userAvatar}
            className='profile__photo'
            alt='Alt placeholder'
          />
          <button
            type='button'
            className='button profile__link-change profile__link-change_place_image'
            onClick={() => onEditAvatarClick()}>
            <img
              src={profileChangeImage}
              className='profile__image-change profile__image-change_place_image'
              alt='Alt placeholder'
            />
          </button>
        </div>

        <div className='profile__info'>
          <h1 className='profile__name'>{userName}</h1>

          <button
            type='button'
            className='button profile__link-change profile__link-change_place_profile'
            onClick={onEditProfileClick}>
            <img
              src={profileChangeImage}
              className='profile__image-change'
              alt='Alt placeholder'
            />
          </button>

          <p className='profile__role'>{userDescription}</p>
        </div>

        <button
          type='button'
          className='button profile__link-add'
          onClick={onAddPlaceClick}>
          <img
            src={linkAddImage}
            className='profile__image-add'
            alt='Alt placeholder'
          />
        </button>
      </section>

      <section className='photo-grid'>
        <ul className='photo-grid__list'>
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onDeleteCardClick={onDeleteCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
