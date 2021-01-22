import React from 'react';

const JournalEntry = () => {
  return (
    <div className="journal__entry">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://www.tom-archer.com/wp-content/uploads/2018/06/milford-sound-night-fine-art-photography-new-zealand.jpg)',
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo día</p>
        {/* 55 chars */}
        <p className="journal__entry-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing ...
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
