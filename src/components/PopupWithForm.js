/** @format */

import React from 'react';

function PopupWithForm({
  title,
  formName,
  isOpen,
  buttonText = 'Save',
  onClose,
  children,
}) {
  return (
    <div
      className={`popup popup_type_${formName} ${
        isOpen ? 'popup_opened' : ''
      }`}>
      <div className='popup__window'>
        <button
          type='button'
          className={`'popup__close-button popup__close-button_${formName}'`}
          aria-label='close'
          onClick={onClose}></button>
        <h2 className='popup__title'>{title}</h2>

        <form
          className={`'form popup__container popup__container_${formName}'`}
          name={formName}
          noValidate>
          {children}
          <button
            type='submit'
            className={`'button form__submit-button form__submit-button_place_${formName}'`}>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
