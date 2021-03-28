import React from 'react';
import Subtopic from '../Subtopic';

const Topic = ({ topic }) => {
  return (
    <div className="topic">
      <div className="title">{topic.title}</div>
      <div className="subtopics-container">
        {topic.subtopics.length > 0 &&
          topic.subtopics.map((subtopic) => <Subtopic subtopic={subtopic} />)}
      </div>
    </div>
  );
};

export default Topic;
