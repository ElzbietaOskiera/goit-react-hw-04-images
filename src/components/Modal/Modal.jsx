import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';

export const Modal = ({ onChange, onClose, largeImageURL}) => {
  useEffect(() => {
    window.addEventListener('keydown', onChange);

    return () => {
      window.removeEventListener('keydown', onChange);
    };
  }, [onChange]);

    return (
      <Overlay onClick={onClose}>
        <ModalWindow>
          <img src={largeImageURL} alt="" />
        </ModalWindow>
      </Overlay>
    );
  }


Modal.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
