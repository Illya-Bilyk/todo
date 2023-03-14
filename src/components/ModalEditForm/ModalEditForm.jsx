import { useState } from 'react';
import { Form, Field, Button } from '../TaskForm/TaskForm.styled';
import { Title } from './ModalEditForm.styled';

export const ModalEditForm = ({ onSubmit, textValue, item, onClose }) => {
  const [text, setText] = useState(textValue);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const newTask = e.target.elements.task.value;

    if (newTask.length === 0) {
      alert('You have to write something!');
      return;
    }

    item['text'] = newTask;

    onSubmit(item.id, item);
    onClose();

    form.reset();
  };
  return (
    <>
      <Title>Change your task:</Title>
      <Form onSubmit={handleSubmit}>
        <Field
          type="text"
          name="task"
          placeholder="Enter task text..."
          onChange={e => setText(e.currentTarget.value)}
          value={text}
        />

        <Button type="submit">Edit task</Button>
      </Form>
    </>
  );
};
