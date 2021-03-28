import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Topic from '../components/Topic';

import { getTopics } from '../store/topic/topicActions';

import '../assets/css/LandingPage.css';

function LandingPage() {
  const dispatch = useDispatch();
  const topics = useSelector((state) => state.topic.topics);

  useEffect(() => {
    dispatch(getTopics());
  }, []);

  return (
    <>
      <div className="main">
        <h1>
          <strong>CEFET</strong> Forum
        </h1>
      </div>

      <br />
      <br />

      <div className="content-container">
        <div className="topics-container">
          {topics.length > 0 && topics.map((topic) => <Topic topic={topic} />)}
        </div>
      </div>
    </>
  );
}

export default LandingPage;
