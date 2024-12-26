import React, { useState } from 'react';
import Flashcard from './Flashcard';
import NewFlashcardForm from './NewFlashcardForm';

function Deck({ deck, onAddCard, onDeleteDeck, onDeleteCard, onEditDeckName }) {

  const [ isVisible, setIsVisible ] = useState(true);
  const [ isEditing, setIsEditing ] = useState(false);
  const [ editedName, setEditedName ] = useState(deck.name);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);


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

  const handlePrevious = () => {
    setCurrentCardIndex((prevIndex) => 
      prevIndex === 0 ? deck.cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => 
      prevIndex === deck.cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDeleteCurrentCard = () => {
    if (deck.cards.length > 0) {
      const currentCardId = deck.cards[currentCardIndex].id;
      onDeleteCard(deck.id, currentCardId);
      
      // Adjust currentCardIndex if necessary
      if (currentCardIndex === deck.cards.length - 1 && currentCardIndex > 0) {
        setCurrentCardIndex(currentCardIndex - 1);
      }
    }
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
            {isVisible ? 'Hide' : 'Show'}
          </button>
          <button onClick={handleDeleteDeck} className="delete-deck-btn">Delete Deck</button>
        </div>
      </div>
      {isVisible && (
        <div className="deck-content">
          <NewFlashcardForm onAddFlashcard={handleAddCard} />
          {deck.cards.length > 0 && (
            <div className="carousel">
              <button onClick={handlePrevious}>Previous</button>
              <Flashcard 
                card={deck.cards[currentCardIndex]} 
                onDelete={() => onDeleteCard(deck.id, deck.cards[currentCardIndex].id)}
              />
              <button onClick={handleNext}>Next</button>
              <p>{currentCardIndex + 1} / {deck.cards.length}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

      export default Deck;
