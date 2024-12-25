import Flashcard from './Flashcard';

function FlashcardList({ flashcards, onDeleteFlashcard }) {
  return (
    <div className="flashcard-list">
      {flashcards.map(card => (
        <Flashcard key={card.id} card={card} onDelete={onDeleteFlashcard} />
      ))}
    </div>
  );
}

export default FlashcardList;
