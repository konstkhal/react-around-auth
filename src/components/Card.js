/** @format */

import React from 'react';

export default function Card({
  card,
  onCardClick,
  onDeleteCardClick,
}) {
  // console.log(onClick);
  function handleCardClick() {
    onCardClick(card);
  }
  return (
    <li className='photo-grid__item'>
      <button
        type='button'
        className='button photo-grid__delete-button'
        aria-label='delete'
        onClick={onDeleteCardClick}
      />
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
            className='button photo-grid__like-button'
            aria-label='like'
          />
          <span className='photo-grid__likes-counter'>
            {card.likes.length}
          </span>
        </div>
      </div>
    </li>
  );
}
