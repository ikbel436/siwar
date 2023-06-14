import React from 'react';
import './pop.css';

const Pop = ({ onClose }) => {
  return (
    <div className='popup-overlay'>
      <div className='popup-content'>
        <h3>Ajout réussi !</h3>
        <p>Le nouveau chauffeur a été ajouté avec succès.</p>
        <button className='close-button' onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default Pop;
