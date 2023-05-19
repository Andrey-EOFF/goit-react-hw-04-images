import { useState } from 'react';
import {
  ImageGalleryItemStyled,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <>
      <ImageGalleryItemStyled>
        <ImageGalleryItemImage
          src={webformatURL}
          alt=""
          onClick={toggleModal}
        />
      </ImageGalleryItemStyled>
      {showModal && (
        <Modal image={largeImageURL} onClose={toggleModal} show={showModal} />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
