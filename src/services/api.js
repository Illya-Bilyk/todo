import axios from 'axios';

axios.defaults.baseURL = 'https://64044efc80d9c5c7bac50591.mockapi.io';

export const getNotes = async () => {
  const response = await axios.get('/todo/notes');

  return response.data;
};

export const deleteNote = async id => {
  const response = await axios.delete(`/todo/notes/${id}`);

  return response.data;
};

export const addNote = async newNote => {
  const response = await axios.post('/todo/notes', newNote);

  return response.data;
};

export const CompleteNote = async (id, updatedNote) => {
  const response = await axios.put(`/todo/notes/${id}`, updatedNote);
  return response.data;
};

export const UpdateNote = async (id, updatedNote) => {
  const response = await axios.put(`/todo/notes/${id}`, updatedNote);
  return response.data;
};
