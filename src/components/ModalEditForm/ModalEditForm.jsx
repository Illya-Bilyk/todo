import { useState } from 'react';
import { Form, Field, Button } from '../NoteForm/NoteForm.styled';

export const ModalEditForm = ({ onSubmit, textValue, item, onClose }) => {
  const [text, setText] = useState(textValue);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const newTask = e.target.elements.note.value;

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
    <Form onSubmit={handleSubmit}>
      <Field
        type="text"
        name="note"
        placeholder="Enter note text..."
        onChange={e => setText(e.currentTarget.value)}
        value={text}
      />
      <Button type="submit">Edit note</Button>
    </Form>
  );
};
