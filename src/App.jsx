import { useState, useEffect } from 'react';
import FlashcardList from './components/FlashcardList';
import NewFlashcardForm from './components/NewFlashcardForm';
import DeckList from './components/DeckList';
import NewDeckForm from './components/NewDeckForm';

function App() {
  const [flashcards, setFlashcards] = useState(() => {
    const savedFlashcards = localStorage.getItem('flashcards');
    return savedFlashcards ? JSON.parse(savedFlashcards) : [
      { id: 1, question: 'What is React?', answer: 'A JavaScript library for building user interfaces' },
      { id: 2, question: 'What is Vite?', answer: 'A build tool that aims to provide a faster and leaner development experience for modern web projects' },
    ];
  });

  useEffect(() => {
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
  }, [flashcards]);


  const addFlashcard = (newCard) => {
    setFlashcards(prevCards => [
      ...prevCards,
      { ...newCard, id: Date.now() } // Use timestamp as a simple unique id
    ]);
  };

  const deleteFlashcard = (id) => {
    setFlashcards(prevCards => prevCards.filter(card => card.id !== id));
  };

  const [decks, setDecks] = useState(() => {
    const savedDecks = localStorage.getItem('flashcardDecks');
    return savedDecks ? JSON.parse(savedDecks) : [];
  });

  useEffect(() => {
    localStorage.setItem('flashcardDecks', JSON.stringify(decks));
  }, [decks]);

  const addDeck = (newDeck) => {
    setDecks(prevDecks => [...prevDecks, { ...newDeck, id: Date.now(), cards: [] }]);
  };

  const addCardToDeck = (deckId, newCard) => {
    setDecks(prevDecks => prevDecks.map(deck => 
      deck.id === deckId ? { ...deck, cards: [...deck.cards, { ...newCard, id: Date.now() }] } : deck
    ));
  };

  return (
    <div className="app">
      <h1>Flashcard App</h1>
      <NewFlashcardForm onAddFlashcard={addFlashcard} />
      <FlashcardList flashcards={flashcards} onDeleteFlashcard={deleteFlashcard} />

      <h1>Flashcard Collections</h1>
      <NewDeckForm onAddDeck={addDeck} />
      <DeckList decks={decks} onAddCard={addCardToDeck} />
    </div>
  );
}

export default App;
