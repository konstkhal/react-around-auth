/** @format */

import React from 'react';
import { UserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';

export default function App() {
  const [currentUser, setCurrentUser] = React.useState({}); //nameUser, avatarUser,aboutUser

  const handleAddPlaceSubmit = ({ name, link }) => {
    api
      .createCard({ name, link })
      .then((card) => setCards([card, ...cards]))
      .catch((err) => console.log(err));
  };

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
    api
      .init()
      .then(([cardData, userData]) => {
        setCards(cardData);
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

        <AddPlacePopup
          onAddPlaceSubmit={handleAddPlaceSubmit}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          title='New place'
          name='namePlace'
        />

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
