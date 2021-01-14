import React from 'react';
import Sidebar from '../components/Sidebar';
import NotesScreen from './NotesScreen';
// import NothingSelected from '../components/NothingSelected';

const JournalScreen = () => {
  return (
    <div className="journal__main-content">
      <Sidebar />

      <main>
        {/* <NothingSelected /> */}
        <NotesScreen />
      </main>
    </div>
  );
};

export default JournalScreen;
