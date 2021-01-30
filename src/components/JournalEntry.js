import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../actions/notesActions';

const JournalEntry = ({ id, title, body, date, url }) => {
  const dispatch = useDispatch();

  const noteDate = moment(date);

  const activeNoteHandler = () => {
    dispatch(
      setActiveNote(id, {
        title,
        body,
        date,
        url,
      })
    );
  };

  return (
    <div className="journal__entry" onClick={activeNoteHandler}>
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}
      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        {/* 55 chars */}
        <p className="journal__entry-content">{body}</p>
      </div>
      <div className="journal__entry-date-box">
        <span>{noteDate.format('dddd')}</span>
        <h4>{noteDate.format('Do')}</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
