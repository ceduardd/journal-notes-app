import React from 'react';
import JournalEntry from './JournalEntry';

const JournalEntries = () => {
  const values = [1, 2, 3];

  return (
    <div className="journal__entries">
      {values.map(value => (
        <JournalEntry key={value} />
      ))}
    </div>
  );
};

export default JournalEntries;
