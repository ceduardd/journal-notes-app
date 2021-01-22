import React from 'react';

const NotesAppBar = () => {
  return (
    <div className="notes__appbar">
      <span>13 de enero de 2021</span>

      <div className="notes__appbar-btns">
        <button className="btn notes__picture-btn">
          {/* <i className="fas fa-image fa-2x"></i> */}
          <span>Picture</span>
        </button>
        <button className="btn notes__save-btn">
          {/* <i className="fas fa-save fa-2x"></i> */}
          <span>Save</span>
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;
