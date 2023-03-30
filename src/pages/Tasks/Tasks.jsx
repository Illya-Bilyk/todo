import * as API from '../../services/api';
import { useState, useEffect } from 'react';
import { TasksList } from 'components/TasksList/TasksList';
import { TaskForm } from 'components/TaskForm/TaskForm';
export const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await API.getTasks();
      setTasks(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async id => {
    try {
      const response = await API.deleteTask(id);
      setTasks(tasks => tasks.filter(task => task.id !== response.id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async task => {
    try {
      const response = await API.addTask(task);
      setTasks(tasks => [...tasks, response]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (id, task) => {
    try {
      await API.UpdateTask(id, task);
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TaskForm onSubmit={handleSubmit} />

      <TasksList
        items={tasks}
        onDelete={handleDelete}
        handleComplete={handleUpdate}
        onSubmit={handleUpdate}
      />
    </>
  );
};
