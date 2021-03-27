import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTopics } from '../store/topic/topicActions';

function LandingPage() {
  const dispatch = useDispatch();
  const topics = useSelector((state) => state.topic.topics);

  useEffect(() => {
    dispatch(getTopics());
  }, []);

  useEffect(() => {
    console.log(topics);
  }, [topics]);

  return (
    <>
      <h1>Hello World React! (Again)</h1>

      {topics.length > 0 && topics.map((topic) => <h2>{topic.title}</h2>)}
    </>
  );
}

export default LandingPage;
