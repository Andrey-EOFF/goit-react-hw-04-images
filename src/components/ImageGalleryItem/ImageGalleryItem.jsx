import React, { Component } from 'react';
import {
  ImageGalleryItemStyled,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { webformatURL, largeImageURL } = this.props;
    return (
      <>
        <ImageGalleryItemStyled>
          <ImageGalleryItemImage
            src={webformatURL}
            alt=""
            onClick={this.toggleModal}
          />
        </ImageGalleryItemStyled>
        {this.state.showModal && (
          <Modal
            image={largeImageURL}
            onClose={this.toggleModal}
            show={this.state.showModal}
          />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};


export default ImageGalleryItem;
