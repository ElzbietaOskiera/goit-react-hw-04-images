import PropTypes from 'prop-types';
import { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.onChange);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.onChange);
  }

  render() {
    const { onClose, largeImageURL } = this.props;
    return (
      <Overlay onClick={onClose}>
        <ModalWindow>
          <img src={largeImageURL} alt="" />
        </ModalWindow>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
