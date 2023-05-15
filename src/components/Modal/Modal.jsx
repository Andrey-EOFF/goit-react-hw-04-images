import React, { Component } from 'react';
import { ModalOverlay, ModalShow } from './Modal.styled';
import PropTypes from 'prop-types';

class Modal extends Component {
  state = {
    show: false,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { show } = this.props;
    return (
      <ModalOverlay
        className={show ? 'overlay show' : 'overlay'}
        onClick={this.handleBackdropClick}
      >
        <ModalShow className="modal">
          <img src={this.props.image} alt="" />
        </ModalShow>
      </ModalOverlay>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
