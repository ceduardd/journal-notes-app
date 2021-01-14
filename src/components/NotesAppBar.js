import React from 'react';

const NotesAppBar = () => {
  return (
    <div className="notes__appbar">
      <span>13 de enero de 2021</span>

      <div className="notes__appbar-btns">
        <button className="notes__picture-btn">
          <i className="fas fa-image fa-2x"></i>
          <span className="notes__btn-label">Picture</span>
        </button>
        <button className="notes__save-btn">
          <i className="fas fa-save fa-2x"></i>
          <span className="notes__btn-label">Save</span>
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;
