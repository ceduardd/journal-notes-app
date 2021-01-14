import React from 'react';
import NotesAppBar from '../components/NotesAppBar';

const NotesScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
        />
        <textarea
          placeholder="What happened today!"
          className="notes__textarea"
        ></textarea>

        <div className="notes__image">
          <img
            src="https://cdn.mos.cms.futurecdn.net/4VSDrgu8NzMeCr4SgPSf3L.jpg"
            alt="imagen"
          />
        </div>
      </div>
    </div>
  );
};

export default NotesScreen;
