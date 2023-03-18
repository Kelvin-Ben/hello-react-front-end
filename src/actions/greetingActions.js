import axios from 'axios';

export const getRandomGreeting = () => async (dispatch) => {
  const res = await axios.get('http://localhost:3000/api/v1/greetings');
  dispatch({
    type: 'GET_RANDOM_GREETING',
    payload: res.data.message,
  });
};

export default getRandomGreeting;
