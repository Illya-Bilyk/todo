import axios from 'axios';

axios.defaults.baseURL = 'https://64044efc80d9c5c7bac50591.mockapi.io';

export const getTodos = async () => {
  const response = await axios.get('/todo/notes');
  console.log(response.data);

  return response.data;
};
