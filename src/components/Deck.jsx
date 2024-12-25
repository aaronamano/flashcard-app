import React from 'react';
import FlashcardList from './FlashcardList';
import NewFlashcardForm from './NewFlashcardForm';

function Deck({ deck, onAddCard }) {
  const handleAddCard = (newCard) => {
    onAddCard(deck.id, newCard);
  };

  return (
    <div className="deck">
      <h2>{deck.name}</h2>
      <NewFlashcardForm onAddFlashcard={handleAddCard} />
      <FlashcardList flashcards={deck.cards} />
    </div>
  );
}

export default Deck;
