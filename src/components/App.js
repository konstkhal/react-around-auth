/** @format */

import React, { useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

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

  const [cards, setCards] = React.useState([]);

  function handleCardLike(card, isLiked) {
    // Check one more time if this card was already liked
    // Send a request to the API and getting the updated card data

    api
      .handleLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((stateCards) =>
          stateCards.map((currentCard) =>
            currentCard._id === card._id
              ? newCard
              : currentCard
          )
        );
      });
  }

  function handleCardDelete(cardId) {
    console.log(cardId);
    api
      .deleteCard(cardId)
      .then(() => {
        setCards((cards) =>
          cards.filter(
            (cardLeft) => cardLeft._id !== cardId
          )
        );
      })
      .catch((err) => console.log(err));
  }

  /* const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] =
    React.useState('');
  const [userAvatar, setUserAvatar] = React.useState(''); */

  React.useEffect(() => {
    /*  api
      .getUserInfo()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => console.log(err)); */
    api
      .getInitialCards()
      .then((cardData) => {
        setCards(cardData);
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

  const handleUpdateAvatar = (url) => {
    api
      .setAvatarLink(url)
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
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />

        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

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

        <EditAvatarPopup
          onUpdateAvatar={handleUpdateAvatar}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </UserContext.Provider>
  );
}
