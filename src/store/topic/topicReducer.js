const initialState = {
  topics: [],
};

function topicReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_TOPICS':
      return { ...state, topics: action.payload };
    default:
      return state;
  }
}

export default topicReducer;
