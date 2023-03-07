export const NoteForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    const date = Date.now();
    e.preventDefault();
    const form = e.target;
    const newNote = {
      text: form.elements.note.value,
      completed: false,
      id: date,
    };

    onSubmit(newNote);
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="note" placeholder="Enter note text..." />
      <button type="submit">Add note</button>
    </form>
  );
};
