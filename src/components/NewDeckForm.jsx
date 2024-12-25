import React, { useState } from 'react';

function NewDeckForm({ onAddDeck }) {
  const [deckName, setDeckName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (deckName.trim()) {
      onAddDeck({ name: deckName });
      setDeckName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={deckName}
        onChange={(e) => setDeckName(e.target.value)}
        placeholder="Create Set Name"
        required
      />
      <button style={{ marginLeft: '5px' }} type="submit">Add Set</button>
    </form>
  );
}

export default NewDeckForm;
