import { useEffect } from 'react';
import { ModalOverlay, ModalShow } from './Modal.styled';
import PropTypes from 'prop-types';

const Modal = ({ show, image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <ModalOverlay
      className={show ? 'overlay show' : 'overlay'}
      onClick={handleBackdropClick}
    >
      <ModalShow className="modal">
        <img src={image} alt="" />
      </ModalShow>
    </ModalOverlay>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
