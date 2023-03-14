import { Form, Field, Button } from './TaskForm.styled';

export const TaskForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const newTask = e.target.elements.task.value;

    if (newTask.length === 0) {
      alert('You have to write something!');
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
    <Form onSubmit={handleSubmit}>
      <Field type="text" name="task" placeholder="Enter task text..." />
      <Button type="submit">Add task</Button>
    </Form>
  );
};
