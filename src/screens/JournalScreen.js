import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../components/Sidebar';
import NotesScreen from './NotesScreen';
import NothingSelected from '../components/NothingSelected';

const JournalScreen = () => {
  const { active } = useSelector(state => state.notes);

  return (
    <div className="journal__main-content">
      <Sidebar />

      <main>{active ? <NotesScreen /> : <NothingSelected />}</main>
    </div>
  );
};

export default JournalScreen;
