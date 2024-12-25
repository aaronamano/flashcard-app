import Flashcard from './Flashcard';

function FlashcardList({ flashcards, onDeleteCard }) {
  return (
    <div className="flashcard-list">
      {flashcards.map(card => (
        <Flashcard key={card.id} card={card} onDelete={onDeleteCard} />
      ))}
    </div>
  );
}

export default FlashcardList;
