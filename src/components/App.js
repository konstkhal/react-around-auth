/** @format */

import React from 'react';
//import logo from "./logo.svg";
//import "./App.css";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

export default function App() {
  const [
    isEditProfilePopupOpen,
    setIsEditProfilePopupOpen,
  ] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] =
    React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [
    isConfirmDeletePopupOpen,
    setIsConfirmDeletePopupOpen,
  ] = React.useState(false);

  const [selectedCard, setSelectedCard] =
    React.useState(undefined);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmDeletePopupOpen(false);
    setSelectedCard(undefined);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className='App page'>
      <Header />
      <Main>
        onEditProfileClick = {handleEditProfileClick}
        onAddPlaceClick = {handleAddPlaceClick}
        onEditAvatarClick = {handleEditAvatarClick}
        onDeleteCardClick =
        {() => setIsConfirmDeletePopupOpen(true)}
        onCardClick = {handleCardClick};
      </Main>
      <Footer />

      <PopupWithForm
        title='Edit profile'
        name='editProfile'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <input
          id='name-input'
          defaultValue='Input name'
          type='text'
          placeholder=''
          className='form__input form__input_type_name'
          name='profilenameInput'
          minLength='2'
          maxLength='40'
          required
        />
        <span
          id='name-input-error'
          className='form__input-error'></span>
        <input
          id='role-input'
          defaultValue='Input role'
          type='text'
          className='form__input form__input_type_role'
          name='profileFormRoleInput'
          minLength='2'
          maxLength='200'
          required
        />
        <span
          id='role-input-error'
          className='form__input-error'></span>
      </PopupWithForm>

      <PopupWithForm
        title='Are you sure?'
        name='confirmDeleteCard'
        buttonText='Yes'
        isOpen={isConfirmDeletePopupOpen}
        onClose={closeAllPopups}></PopupWithForm>

      <PopupWithForm
        title='New place'
        name='namePlace'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText='Create'>
        <input
          id='name-place'
          defaultValue=''
          type='text'
          className='form__input form__input_type_image-title'
          placeholder='Title'
          name='namePlace'
          minLength='1'
          maxLength='30'
          required
        />
        <span
          id='name-place-error'
          className='form__input-error'></span>
        <input
          id='url-place'
          defaultValue=''
          type='url'
          className='form__input form__input_type_image-link'
          placeholder='Image link'
          name='linkPlace'
          required
        />
        <span
          id='url-place-error'
          className='form__input-error'></span>
      </PopupWithForm>

      <PopupWithForm
        title='Change Profile Picture'
        name='avatarChange'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText='Change'>
        <input
          id='url-avatar'
          defaultValue=' '
          type='url'
          className='form__input form__input_type_avatar-link'
          placeholder='Image link'
          name='name'
          required
        />
        <span
          id='url-avatar-error'
          className='form__input-error'></span>
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}
