import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../actions/authActions';
import { startNewNote } from '../actions/notesActions';
import JournalEntries from './JournalEntries';

const Sidebar = () => {
  const dispatch = useDispatch();

  const { name } = useSelector(state => state.auth);

  const logoutHandler = () => {
    // dispatch logout
    dispatch(startLogout());
  };

  const newEntryHandler = () => {
    dispatch(startNewNote());
  };

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-nav">
        <h3 className="journal__sidebar-nav-name">
          <i className="fas fa-moon"></i>
          <span>{name}</span>
        </h3>
        <button
          className="btn journal__sidebar-logout-btn"
          onClick={logoutHandler}
        >
          Logout
        </button>
      </div>

      <button className="btn journal__new-entry" onClick={newEntryHandler}>
        <i className="fas fa-calendar-plus fa-5x"></i>
        <p>New Entry</p>
      </button>

      <JournalEntries />
    </aside>
  );
};

export default Sidebar;
