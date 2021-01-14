import React from 'react';
import JournalEntries from './JournalEntries';

const Sidebar = () => {
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-nav">
        <h3 className="journal__sidebar-nav-name">
          <i className="fas fa-moon"></i>
          <span>Eduardo</span>
        </h3>
        <button className="journal__sidebar-logout-btn">
          <i className="fas fa-sign-out-alt fa-2x"></i>
        </button>
      </div>

      <div className="journal__new-entry">
        <i className="fas fa-calendar-plus fa-5x"></i>
        <p>New Entry</p>
      </div>

      <JournalEntries />
    </aside>
  );
};

export default Sidebar;
