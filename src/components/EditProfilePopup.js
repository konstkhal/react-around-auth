/** @format */
import PopupWithForm from './PopupWithForm';
import React from 'react';
import { UserContext } from '../contexts/CurrentUserContext';

export default function EditProfilePopup({
  isOpen,
  onClose,
  onUpdateUser,
}) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(UserContext);

  /**
   * Inside the EditProfilePopup add the name and description state variables
   * and bind them to the input fields, making them manageable.
   * Don't forget about the onChange() handlers.
   *
   * After loading the current user from the API
   * their data will be used in managed components.
   */

  React.useEffect(() => {
    setName(currentUser.name || '');
    setDescription(currentUser.about || '');
  }, [currentUser]);

  const handleNameChange = (event) =>
    setName(event.target.value);
  console.log(name);

  const handleRoleChange = (event) =>
    setDescription(event.target.value);
  console.log(description);

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdateUser({ name, about: description });
    onClose();
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      title='Edit profile'
      name='editProfile'
      onSubmit={handleSubmit}>
      <input
        id='name-input'
        onChange={handleNameChange}
        /* defaultValue='' */
        value={name}
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
        onChange={handleRoleChange}
        /* defaultValue='' */
        value={description}
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
    </PopupWithForm>
  );
}
