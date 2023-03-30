import { Form, Field, Button } from './TaskForm.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const TaskForm = ({ onSubmit }) => {
  const errorNotification = () => toast.error('You have to write something!');

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const newTask = e.target.elements.task.value;

    if (newTask.length === 0) {
      errorNotification();
      return;
    }

    const newItem = {
      text: newTask,
      completed: false,
    };

    onSubmit(newItem);
    form.reset();
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Field type="text" name="task" placeholder="Enter task text..." />
        <Button type="submit">Add task</Button>
      </Form>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
