import axios from 'axios';

axios.defaults.baseURL = 'https://64044efc80d9c5c7bac50591.mockapi.io';

export const getTasks = async () => {
  const response = await axios.get('/todo/tasks');

  return response.data;
};

export const deleteTask = async id => {
  const response = await axios.delete(`/todo/tasks/${id}`);

  return response.data;
};

export const addTask = async newTask => {
  const response = await axios.post('/todo/tasks', newTask);

  return response.data;
};

export const UpdateTask = async (id, updatedTask) => {
  const response = await axios.put(`/todo/tasks/${id}`, updatedTask);
  return response.data;
};
