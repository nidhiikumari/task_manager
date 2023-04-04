import React from 'react';
import css from './styles/css';

const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div style={css.popup}>
      <div style={css.popupContent}>
        <button style={css.closeBtn} onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}

export default Popup;
