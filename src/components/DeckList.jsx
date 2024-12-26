import React from 'react';
import Deck from './Deck';

function DeckList({ decks, onAddCard, onDeleteDeck, onDeleteCard, onEditDeckName }) {
  return (
    <div className="deck-list">
      {decks.map(deck => (
        <Deck 
          key={deck.id} 
          deck={deck} 
          onAddCard={onAddCard} 
          onDeleteDeck={onDeleteDeck}
          onDeleteCard={onDeleteCard}
          onEditDeckName={onEditDeckName}
        />
      ))}
    </div>
  );
}

export default DeckList;
