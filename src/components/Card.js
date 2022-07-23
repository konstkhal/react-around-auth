/** @format */

import React from 'react';

export default function Card({
  card,
  onClick,
  onDeleteCardClick,
}) {
  // console.log(onClick);
  function handleClick() {
    onClick(card);
  }
  return (
    <li className='photo-grid__item'>
      <button
        type='button'
        className='button photo-grid__delete-button'
        aria-label='delete'
        onClick={onDeleteCardClick}></button>
      <img
        src={card.link}
        alt={card.name}
        className='photo-grid__image'
        onClick={handleClick}
      />
      <div className='photo-grid__container'>
        <h2 className='photo-grid__title'>{card.name}</h2>
        <div className='photo-grid__like-container'>
          <button
            type='button'
            className='button photo-grid__like-button'
            aria-label='like'></button>
          <span className='photo-grid__likes-counter'>
            {card.likes.length}
          </span>
        </div>
      </div>
    </li>
  );
}
