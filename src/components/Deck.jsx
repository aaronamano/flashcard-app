import React from 'react';
import FlashcardList from './FlashcardList';
import NewFlashcardForm from './NewFlashcardForm';

function Deck({ deck, onAddCard, onDeleteDeck }) {
  const handleAddCard = (newCard) => {
    onAddCard(deck.id, newCard);
  };

  const handleDeleteDeck = () => {
    onDeleteDeck(deck.id);
  };

  return (
    <div className="deck">
      <div className="deck-header">
        <h2>{deck.name}</h2>
        <button onClick={handleDeleteDeck} className="delete-deck-btn">Delete Deck</button>
      </div>
      <NewFlashcardForm onAddFlashcard={handleAddCard} />
      <FlashcardList flashcards={deck.cards} />
    </div>
  );
}

export default Deck;
