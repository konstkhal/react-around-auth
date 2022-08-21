/** @format */
import PopupWithForm from './PopupWithForm';
import React from 'react';

export default function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
}) {
  const imageInput = React.createRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdateAvatar(imageInput.current.value);
    imageInput.current.value = '';
    onClose();
  };

  /**
   * From my current App.js
   */
  /* <PopupWithForm
title='Change Profile Picture'
name='avatarChange'
isOpen={isEditAvatarPopupOpen}
onClose={closeAllPopups}
buttonText='Change'>
<input
  id='url-avatar'
  defaultValue=''
  type='url'
  className='form__input form__input_type_avatar-link'
  placeholder='Image link'
  name='name'
  required
/>
<span
  id='url-avatar-error'
  className='form__input-error'
/>
</PopupWithForm> */

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      title='Change Profile Picture'
      name='avatarChange'
      isOpen={isOpen}
      onClose={onClose}
      buttonText='Save'>
      <input
        ref={imageInput}
        id='url-avatar'
        type='url'
        className='form__input form__input_type_avatar-link'
        placeholder='Image link'
        name='name'
        required
        minLength='1'
      />
      <span
        id='url-avatar-error'
        className='form__input-error'
      />
    </PopupWithForm>
  );
}
