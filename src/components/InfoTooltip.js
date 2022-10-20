import accept from '../images/accept.png';
import decline from '../images/decline.png';

export default function InfoTooltip
({
  onPopupClick,
  isOpen,
  onClose,
  isSuccessful,
})
  {

  return (
    <div onClick={onPopupClick} className={`popup popup_type_info ${isOpen ? 'popup_active' : ''}`}>
      <div className="popup__window popup__window_type_info">
        <button type="button" className="popup__close-button" aria-label="close" onClick={onClose}></button>
        <img
          className="popup__auth-image"
          alt={isSuccessful ? 'Registration succefull - Check sign in black color' : 'Registration failed - cross sign in red color'}
          src={isSuccessful ? accept : decline}
        ></img>
        <h2 className="popup__title">{isSuccessful ? 'Success! You have now been registered.' : 'Oops, something went wrong! Please try again.'}</h2>
      </div>
    </div>
  );
}