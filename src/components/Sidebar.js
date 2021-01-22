import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../actions/authActions';
import JournalEntries from './JournalEntries';

const Sidebar = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    // dispatch logout
    dispatch(startLogout());
  };

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-nav">
        <h3 className="journal__sidebar-nav-name">
          <i className="fas fa-moon"></i>
          <span>Eduardo</span>
        </h3>
        <button
          className="btn journal__sidebar-logout-btn"
          onClick={logoutHandler}
        >
          Logout
        </button>
      </div>

      <button className="btn journal__new-entry">
        <i className="fas fa-calendar-plus fa-5x"></i>
        <p>New Entry</p>
      </button>

      <JournalEntries />
    </aside>
  );
};

export default Sidebar;
