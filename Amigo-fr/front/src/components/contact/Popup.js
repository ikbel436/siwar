import React from 'react';
import './Popup.css';

const Popup = ({ onClose }) => {
  return (
    <div className='popup-overlay'>
      <div className='popup-content'>
        <h3>Ajout réussi !</h3>
        <p>Message est envoyé.</p>
        <button className='close-button' onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default Popup;
