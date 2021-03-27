import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import topic from './topic/topicReducer';

const combinedReducers = combineReducers({
  topic,
});

const store = createStore(combinedReducers, applyMiddleware(thunk));

export default store;
