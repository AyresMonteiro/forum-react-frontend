import React from 'react';

const Subtopic = ({ subtopic }) => {
  return (
    <div className="subtopic">
      <div className="title">{subtopic.title}</div>
      <div className="summary">
        <p>{subtopic.summary}</p>
      </div>
    </div>
  );
};

export default Subtopic;
