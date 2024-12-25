import React from 'react';
import Deck from './Deck';

function DeckList({ decks, onAddCard, onDeleteDeck }) {
  return (
    <div className="deck-list">
      {decks.map(deck => (
        <Deck 
          key={deck.id} 
          deck={deck} 
          onAddCard={onAddCard} 
          onDeleteDeck={onDeleteDeck} 
        />
      ))}
    </div>
  );
}

export default DeckList;
