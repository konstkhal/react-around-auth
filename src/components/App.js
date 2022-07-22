/** @format */

import React from 'react';
//import logo from "./logo.svg";
//import "./App.css";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [
    isEditProfilePopupOpen,
    setIsEditProfilePopupOpen,
  ] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] =
    React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState();

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
        onCardClick = {handleCardClick};
      </Main>
      <Footer />
      {/* <!-- ----------------------------------------------------------------------- -->
    <!--                       Popup Image Preview window                        -->
    <!-- ----------------------------------------------------------------------- -->
 */}
      <div className='popup popup_type_preview'>
        <div className='popup__window popup__window_type_preview'>
          <button
            type='button'
            className='popup__close-button popup__close-button_place_preview'
            aria-label='close'></button>
          <img
            src=' '
            alt='preview of '
            className='popup__preview-image'
          />
          <p className='popup__description'></p>
        </div>
      </div>

      {/* <!-- ----------------------------------------------------------------------- -->
    <!--                            Popup Edit profile window                    -->
    <!-- ----------------------------------------------------------------------- --> */}
      <PopupWithForm
        title='Edit profile'
        name='edit-profile'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <input
          id='name-input'
          defaultValue='Input name'
          type='text'
          placeholder=''
          className='form__input form__input_type_name'
          name='profileFormNameInput'
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

      {/*     <!-- ----------------------------------------------------------------------- -->
    <!--                         Popup edit card window                          -->
    <!-- ----------------------------------------------------------------------- --> */}
      <div className='popup popup_type_new-card'>
        <div className='popup__window'>
          <button
            type='button'
            className='popup__close-button popup__close-button_place_card'
            aria-label='close'></button>
          <h2 className='popup__title'>New place</h2>
          <form
            className='form popup__container popup__container_place-card'
            name='newCardForm'
            noValidate>
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
              defaultValue=' '
              type='url'
              className='form__input form__input_type_image-link'
              placeholder='Image link'
              name='linkPlace'
              required
            />
            <span
              id='url-place-error'
              className='form__input-error'></span>
            <button
              type='submit'
              className='button form__submit-button form__submit-button_place_new-card'>
              Create
            </button>
          </form>
        </div>
      </div>

      {/*     <!--------------------------------------------------------------------------->
    <!--             Popup delete card confirm window                          -->
    <!---------------------------------------------------------------------------> */}
      <div className='popup popup_type_confirm-delete-card'>
        <div className='popup__window'>
          <button
            type='button'
            className='popup__close-button popup__close-button_confirm-delete-card'
            aria-label='close'></button>
          <h2 className='popup__title'>Are you sure?</h2>
          <form
            className='form popup__container popup__container_confirm-delete-card'
            name='confirmDeleteCard'
            noValidate>
            <button
              type='submit'
              className='button form__submit-button form__submit-button_place_confirm-delete-card'>
              Yes
            </button>
          </form>
        </div>
      </div>

      {/*     <!--------------------------------------------------------------------------->
    <!--                   Popup avatar change window                          -->
    <!---------------------------------------------------------------------------> */}
      <div className='popup popup_type_avatar-change'>
        <div className='popup__window'>
          <button
            type='button'
            className='popup__close-button popup__close-button_avatar-change'
            aria-label='close'></button>
          <h2 className='popup__title'>
            Change profile picture
          </h2>
          <form
            className='form popup__container popup__container_avatar-change'
            name='confirmDeleteCard'
            noValidate>
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
            <button
              type='submit'
              className='button form__submit-button form__submit-button_place_avatar-change'>
              Save
            </button>
          </form>
        </div>
      </div>

      {/*     <!-- ----------------------------------------------------------------------- -->
    <!--                            Template for card.                           -->
    <!--↓ ---------------------------------------------------------------------↓ --> */}
      <template id='card-template'>
        <li className='photo-grid__item'>
          <button
            type='button'
            className='button photo-grid__delete-button'
            aria-label='delete'></button>
          <img
            src=' '
            alt=''
            className='photo-grid__image'
          />
          <div className='photo-grid__container'>
            <h2 className='photo-grid__title'></h2>
            <div className='photo-grid__like-container'>
              <button
                type='button'
                className='button photo-grid__like-button'
                aria-label='like'></button>
              <span className='photo-grid__likes-counter'></span>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
