import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { startPictureUpload, startSaveNote } from '../actions/notesActions';

const NotesAppBar = ({ date }) => {
  const displayDate = moment(date);

  const { active } = useSelector(state => state.notes);
  const dispatch = useDispatch();

  const saveHandler = () => {
    dispatch(startSaveNote(active));
  };

  const pictureHandler = () => {
    document.querySelector('#fileSelector').click();
  };

  const fileHandler = e => {
    // console.log(e.target.files);
    const file = e.target.files[0];

    if (file) {
      dispatch(startPictureUpload(file));
    }
  };

  return (
    <div className="notes__appbar">
      <span>{displayDate.format('LL')}</span>

      <input
        id="fileSelector"
        type="file"
        style={{ display: 'none' }}
        onChange={fileHandler}
      />

      <div className="notes__appbar-btns">
        <button className="btn notes__picture-btn" onClick={pictureHandler}>
          {/* <i className="fas fa-image fa-2x"></i> */}
          <span>Picture</span>
        </button>
        <button className="btn notes__save-btn" onClick={saveHandler}>
          {/* <i className="fas fa-save fa-2x"></i> */}
          <span>Save</span>
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;
