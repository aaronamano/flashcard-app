import React, { useState } from 'react';
import FlashcardList from './FlashcardList';
import NewFlashcardForm from './NewFlashcardForm';

function Deck({ deck, onAddCard, onDeleteDeck, onDeleteCard, onEditDeckName }) {

  const [ isVisible, setIsVisible ] = useState(true);
  const [ isEditing, setIsEditing ] = useState(false);
  const [ editedName, setEditedName ] = useState(deck.name);

  const handleAddCard = (newCard) => {
    onAddCard(deck.id, newCard);
  };

  const handleDeleteDeck = () => {
    onDeleteDeck(deck.id);
  };

  const handleDeleteCard = (cardId) => {
    onDeleteCard(deck.id, cardId);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleNameChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    onEditDeckName(deck.id, editedName);
    setIsEditing(false);
  };

  return (
    <div className="deck">
      <div className="deck-header">
        <div className="deck-title">
          {isEditing ? (
            <form onSubmit={handleNameSubmit}>
              <input
                type="text"
                value={editedName}
                onChange={handleNameChange}
                autoFocus
              />
              <button type="submit">Save</button>
            </form>
          ) : (
            <>
              <h2>{deck.name}</h2>
              <button onClick={handleEditClick}>Edit Name</button>
            </>
          )}
        </div>
        <div className="deck-controls">
          <button onClick={toggleVisibility}>
            {isVisible ? 'Hide Cards' : 'Show Cards'}
          </button>
          <button onClick={handleDeleteDeck} className="delete-deck-btn">Delete Deck</button>
        </div>
      </div>
      {isVisible && (
        <div className="deck-content">
          <NewFlashcardForm onAddFlashcard={handleAddCard} />
          <FlashcardList flashcards={deck.cards} onDeleteCard={handleDeleteCard} />
        </div>
      )}
    </div>
  );
}

      export default Deck;
