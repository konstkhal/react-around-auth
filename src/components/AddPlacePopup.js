/** @format */

import PopupWithForm from './PopupWithForm';
import React from 'react';

export default function AddPlacePopup({
  isOpen,
  onClose,
  onAddPlaceSubmit,
}) {
  const [cardName, setCardName] = React.useState('');
  const [cardLink, setCardLink] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddPlaceSubmit({ name: cardName, link: cardLink });
    onClose();
  };

  const handleCardNameChange = (event) =>
    setCardName(event.target.value);

  const handleCardLinkChange = (event) =>
    setCardLink(event.target.value);
  //console.log(onClose); //Получает объект вместо функции
  return (
    <PopupWithForm
      title='New place'
      name='namePlace'
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
      buttonText='Create'>
      <input
        id='name-place'
        defaultValue=''
        type='text'
        onChange={handleCardNameChange}
        className='form__input form__input_type_image-title'
        placeholder='Title'
        name='namePlace'
        minLength='1'
        maxLength='30'
        required
      />
      <span
        id='name-place-error'
        className='form__input-error'
      />
      <input
        id='url-place'
        defaultValue=''
        type='url'
        onChange={handleCardLinkChange}
        className='form__input form__input_type_image-link'
        placeholder='Image link'
        name='linkPlace'
        required
      />
      <span
        id='url-place-error'
        className='form__input-error'
      />
    </PopupWithForm>
  );
}
