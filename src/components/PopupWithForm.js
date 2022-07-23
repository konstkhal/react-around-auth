/** @format */

import React from 'react';

export default function PopupWithForm({
  title,
  name,
  isOpen,
  buttonText = 'Save',
  onClose,
  children,
}) {
  console.log(isOpen);
  return (
    <div
      className={`popup popup_type_${name} ${
        isOpen ? 'popup_opened' : ''
      }`}>
      <div className='popup__window'>
        <button
          type='button'
          className={`'popup__close-button popup__close-button_${name}'`}
          aria-label='close'
          onClick={onClose}></button>
        <h2 className='popup__title'>{title}</h2>

        <form
          className={`'form popup__container popup__container_${name}'`}
          name={name}
          noValidate>
          {children}
          <button
            type='submit'
            className={`'button form__submit-button form__submit-button_place_${name}'`}>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
