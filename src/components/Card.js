/** @format */

import React from 'react';
import { UserContext } from '../contexts/CurrentUserContext';

export default function Card({
  card,
  onCardClick,
  onDeleteCardClick,
  onCardLike,
}) {
  const currentUser = React.useContext(UserContext);
  // Checking if the current user is the owner of the current card
  const isOwn = card.owner._id === currentUser._id;

  const isLiked = card.likes.some(
    (like) => like._id === currentUser._id
  );

  const cardLikesButtonClassName = `button photo-grid__like-button ${
    isLiked ? 'photo-grid__like-button_active' : ''
  }`;
  // Creating a variable which you'll then set in `className` for the delete button
  const cardDeleteButtonClassName = `button photo-grid__delete-button ${
    isOwn
      ? 'photo-grid__delete-button_visible'
      : 'photo-grid__delete-button_hidden'
  }`;

  // console.log(onClick);
  /*  const handleLikeClick = useCallback(() => {
    onCardLike(card._id);
  }, []); */

  /*  console.log(isOwn); */

  const handleLikeClick = () => onCardLike(card, isLiked);

  const handleDeleteClick = () =>
    onDeleteCardClick(card._id);

  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <li className='photo-grid__item'>
      {isOwn && (
        <button
          type='button'
          className={cardDeleteButtonClassName}
          aria-label='delete'
          onClick={handleDeleteClick}
        />
      )}
      <img
        src={card.link}
        alt={card.name}
        className='photo-grid__image'
        onClick={handleCardClick}
      />
      <div className='photo-grid__container'>
        <h2 className='photo-grid__title'>{card.name}</h2>
        <div className='photo-grid__like-container'>
          <button
            type='button'
            className={cardLikesButtonClassName}
            aria-label='like'
            onClick={handleLikeClick}
          />
          <span className='photo-grid__likes-counter'>
            {card.likes.length}
          </span>
        </div>
      </div>
    </li>
  );
}
