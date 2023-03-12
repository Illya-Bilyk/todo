import { Form, Field, Button } from './NoteForm.styled';

export const NoteForm = ({ onSubmit, notesLength }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const newTask = e.target.elements.note.value;

    if (newTask.length === 0) {
      alert('You have to write something!');
      return;
    }

    const newNote = {
      text: newTask,
      completed: false,
      id: notesLength + 1,
    };

    onSubmit(newNote);
    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Field type="text" name="note" placeholder="Enter note text..." />
      <Button type="submit">Add note</Button>
    </Form>
  );
};
