/** @format */

import React, { useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';

import { api } from '../utils/api';
import { UserContext } from '../contexts/CurrentUserContext';

export default function App() {
  const [currentUser, setCurrentUser] = React.useState({}); //nameUser, avatarUser,aboutUser
  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser({
          name: userData.name,
          avatar: userData.avatar,
          about: userData.about,
          _id: userData._id,
        });
      })
      .catch((err) => console.log(err));
  }, []);

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

  const handleEditProfileClick = () =>
    setIsEditProfilePopupOpen(true);

  const handleAddPlaceClick = () =>
    setIsAddPlacePopupOpen(true);

  const handleEditAvatarClick = () =>
    setIsEditAvatarPopupOpen(true);

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmDeletePopupOpen(false);
    setSelectedCard(undefined);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleUpdateUser = ({ name, about }) => {
    api
      .setUserInfo({ name, about })
      .then((user) => setCurrentUser(user))
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider value={currentUser}>
      <div className='App page'>
        <Header />

        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          // onDeleteCardClick={handleCardDelete}
          onCardClick={handleCardClick}
        />

        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        {/* <PopupWithForm
          title='Edit profile'
          name='editProfile'
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}>
          <input
            id='name-input'
            defaultValue=''
            placeholder='Input name'
            type='text'
            className='form__input form__input_type_name'
            name='profilenameInput'
            minLength='2'
            maxLength='40'
            required
          />
          <span
            id='name-input-error'
            className='form__input-error'
          />
          <input
            id='role-input'
            defaultValue=''
            type='text'
            className='form__input form__input_type_role'
            name='profileFormRoleInput'
            minLength='2'
            maxLength='200'
            placeholder='Input role'
            required
          />
          <span
            id='role-input-error'
            className='form__input-error'
          />
        </PopupWithForm> */}

        <PopupWithForm
          title='Are you sure?'
          name='confirmDeleteCard'
          buttonText='Yes'
          isOpen={isConfirmDeletePopupOpen}
          onClose={closeAllPopups}
        />

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
            className='form__input-error'
          />
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
            className='form__input-error'
          />
        </PopupWithForm>

        <PopupWithForm
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
        </PopupWithForm>

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </UserContext.Provider>
  );
}
