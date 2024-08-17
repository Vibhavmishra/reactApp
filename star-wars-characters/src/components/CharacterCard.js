import React from 'react';
import './CharacterCard.css'; // Assuming you have a CSS file for card styling

const CharacterCard = ({ character, onClick }) => {
  return (
    <div className="character-card" onClick={() => onClick(character)}>
      <img src={`https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 10)}.jpg`} alt={character.name} />
      <h3>{character.name}</h3>
    </div>
  );
};

export default CharacterCard;
