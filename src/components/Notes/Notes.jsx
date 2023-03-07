import * as API from '../../services/api';
import { useState, useEffect } from 'react';
export const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const Notes = await API.getTodos();
        setNotes(Notes);
      } catch (error) {
        console.log(error);
      }
    }
    fetchNotes();
  }, []);

  return (
    <>
      <h2>Notes:</h2>
      {notes.map(({ id, note, completed }) => {
        return (
          <div key={id}>
            <p>Text: {note}</p>
            <p>Completed: {toString(completed)}</p>
          </div>
        );
      })}
    </>
  );
};
