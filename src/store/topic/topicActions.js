import api from '../../services/api';

export const getTopics = () => (dispatch) => {
  api.get('/topics').then((res) => {
    if (res.status === 200) {
      dispatch({
        type: 'GET_TOPICS',
        payload: res.data.topics,
      });
    }
  });
};
