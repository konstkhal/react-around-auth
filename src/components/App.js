/** @format */

//import logo from "./logo.svg";
//import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div className="App page">
      <Header />

      <main className="content">
        <section className="profile">
          <div className="profile__photo-container">
            <div className="profile__cover-overlay"></div>
            <img
              src="<%=require('./images/image.png')%>"
              className="profile__photo"
              alt="Alt placeholder"
            />
            <button
              type="button"
              className="button profile__link-change profile__link-change_place_image"
            >
              <img
                src="<%=require('./images/pen.svg')%>"
                className="profile__image-change profile__image-change_place_image"
                alt="Alt placeholder"
              />
            </button>
          </div>

          <div className="profile__info">
            <h1 className="profile__name">Jacques Cousteau</h1>

            <button
              type="button"
              className="button profile__link-change profile__link-change_place_profile"
            >
              <img
                src="<%=require('./images/pen.svg')%>"
                className="profile__image-change"
                alt="Alt placeholder"
              />
            </button>

            <p className="profile__role">Explorer</p>
          </div>

          <button type="button" className="button profile__link-add">
            <img
              src="<%=require('./images/Vector-1.svg')%>"
              className="profile__image-add"
              alt="Alt placeholder"
            />
          </button>
        </section>

        <section className="photo-grid">
          <ul className="photo-grid__list"></ul>
        </section>
      </main>
      <footer className="footer">
        <p className="footer__paragraph">© 2022 Around The U.S.</p>
      </footer>

      {/* <!-- ----------------------------------------------------------------------- -->
    <!--                       Popup Image Preview window                        -->
    <!-- ----------------------------------------------------------------------- -->
 */}
      <div className="popup popup_type_preview">
        <div className="popup__window popup__window_type_preview">
          <button
            type="button"
            className="popup__close-button popup__close-button_place_preview"
            aria-label="close"
          ></button>
          <img src=" " alt="preview image" className="popup__preview-image" />
          <p className="popup__description"></p>
        </div>
      </div>

      {/* <!-- ----------------------------------------------------------------------- -->
    <!--                            Popup Edit profile window                    -->
    <!-- ----------------------------------------------------------------------- --> */}
      <div className="popup popup_type_edit-profile">
        <div className="popup__window">
          <button
            type="button"
            className="button popup__close-button popup__close-button_place-profile"
            aria-label="close"
          ></button>
          <h2 className="popup__title">Edit profile</h2>
          <form
            className="form popup__container popup__container_place-profile"
            name="profileEditForm"
            novalidate
          >
            <input
              id="name-input"
              value="Input name"
              type="text"
              placeholder=""
              className="form__input form__input_type_name"
              name="profileFormNameInput"
              minlength="2"
              maxlength="40"
              required
            />
            <span id="name-input-error" className="form__input-error"></span>
            <input
              id="role-input"
              value="Input role"
              type="text"
              className="form__input form__input_type_role"
              name="profileFormRoleInput"
              minlength="2"
              maxlength="200"
              required
            />
            <span id="role-input-error" className="form__input-error"></span>
            <button type="submit" className="button form__submit-button">
              Save
            </button>
          </form>
        </div>
      </div>

      {/*     <!-- ----------------------------------------------------------------------- -->
    <!--                         Popup edit card window                          -->
    <!-- ----------------------------------------------------------------------- --> */}
      <div className="popup popup_type_new-card">
        <div className="popup__window">
          <button
            type="button"
            className="popup__close-button popup__close-button_place_card"
            aria-label="close"
          ></button>
          <h2 className="popup__title">New place</h2>
          <form
            className="form popup__container popup__container_place-card"
            name="newCardForm"
            novalidate
          >
            <input
              id="name-place"
              value=""
              type="text"
              className="form__input form__input_type_image-title"
              placeholder="Title"
              name="namePlace"
              minlength="1"
              maxlength="30"
              required
            />
            <span id="name-place-error" className="form__input-error"></span>
            <input
              id="url-place"
              value=" "
              type="url"
              className="form__input form__input_type_image-link"
              placeholder="Image link"
              name="linkPlace"
              required
            />
            <span id="url-place-error" className="form__input-error"></span>
            <button
              type="submit"
              className="button form__submit-button form__submit-button_place_new-card"
            >
              Create
            </button>
          </form>
        </div>
      </div>

      {/*     <!--------------------------------------------------------------------------->
    <!--             Popup delete card confirm window                          -->
    <!---------------------------------------------------------------------------> */}
      <div className="popup popup_type_confirm-delete-card">
        <div className="popup__window">
          <button
            type="button"
            className="popup__close-button popup__close-button_confirm-delete-card"
            aria-label="close"
          ></button>
          <h2 className="popup__title">Are you sure?</h2>
          <form
            className="form popup__container popup__container_confirm-delete-card"
            name="confirmDeleteCard"
            novalidate
          >
            <button
              type="submit"
              className="button form__submit-button form__submit-button_place_confirm-delete-card"
            >
              Yes
            </button>
          </form>
        </div>
      </div>

      {/*     <!--------------------------------------------------------------------------->
    <!--                   Popup avatar change window                          -->
    <!---------------------------------------------------------------------------> */}
      <div className="popup popup_type_avatar-change">
        <div className="popup__window">
          <button
            type="button"
            className="popup__close-button popup__close-button_avatar-change"
            aria-label="close"
          ></button>
          <h2 className="popup__title">Change profile picture</h2>
          <form
            className="form popup__container popup__container_avatar-change"
            name="confirmDeleteCard"
            novalidate
          >
            <input
              id="url-avatar"
              value=" "
              type="url"
              className="form__input form__input_type_avatar-link"
              placeholder="Image link"
              name="name"
              required
            />
            <span id="url-avatar-error" className="form__input-error"></span>
            <button
              type="submit"
              className="button form__submit-button form__submit-button_place_avatar-change"
            >
              Save
            </button>
          </form>
        </div>
      </div>

      {/*     <!-- ----------------------------------------------------------------------- -->
    <!--                            Template for card.                           -->
    <!--↓ ---------------------------------------------------------------------↓ --> */}
      <template id="card-template">
        <li className="photo-grid__item">
          <button
            type="button"
            className="button photo-grid__delete-button"
            aria-label="delete"
          ></button>
          <img src=" " alt="" className="photo-grid__image" />
          <div className="photo-grid__container">
            <h2 className="photo-grid__title"></h2>
            <div className="photo-grid__like-container">
              <button
                type="button"
                className="button photo-grid__like-button"
                aria-label="like"
              ></button>
              <span className="photo-grid__likes-counter"></span>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
