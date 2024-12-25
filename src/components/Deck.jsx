import React, { useState } from 'react';
import FlashcardList from './FlashcardList';
import NewFlashcardForm from './NewFlashcardForm';

function Deck({ deck, onAddCard, onDeleteDeck, onDeleteCard }) {

  const [ isVisible, setIsVisible ] = useState(true);

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

  return (
    <div className="deck">
      <div className="deck-header">
        <h2>{deck.name}</h2>
        <button onClick={toggleVisibility}>
          {isVisible ? 'Hide Cards' : 'Show Cards'}
        </button>
        <button onClick={handleDeleteDeck} className="delete-deck-btn">Delete Deck</button>
      </div>
      {isVisible && (
        <>
          <NewFlashcardForm onAddFlashcard={handleAddCard} />
          <FlashcardList flashcards={deck.cards} onDeleteCard={handleDeleteCard} />
        </>
      )}
    </div>
  );
}

export default Deck;
