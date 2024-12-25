import { useState } from 'react';

function Flashcard({ card, onDelete }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(card.id);
  };

  return (
    <div 
      className={`flashcard ${isFlipped ? 'flipped' : ''}`} 
      onClick={handleClick}
    >
      <div className="front">
        {card.question}
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
      </div>
      <div className="back">
        {card.answer}
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Flashcard;
