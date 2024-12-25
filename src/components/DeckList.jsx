import React from 'react';
import Deck from './Deck';

function DeckList({ decks, onAddCard }) {
  return (
    <div className="deck-list">
      {decks.map(deck => (
        <Deck key={deck.id} deck={deck} onAddCard={onAddCard} />
      ))}
    </div>
  );
}

export default DeckList;
