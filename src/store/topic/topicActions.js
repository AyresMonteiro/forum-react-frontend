import api from '../../services/api';

export const getTopics = () => (dispatch) => {
  console.log('teste');
  api.get('/topics').then((res) => {
    if (res.status === 200) {
      console.log(res);
      dispatch({
        type: 'GET_TOPICS',
        payload: res.data.topics,
      });
    }
  });
};
