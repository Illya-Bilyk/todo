import * as API from '../../services/api';
import { useState, useEffect } from 'react';
import { NotesList } from 'components/NotesList/NotesList';
import { NoteForm } from 'components/NoteForm/NoteForm';
export const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const Notes = await API.getNotes();
        setNotes(Notes);
      } catch (error) {
        console.log(error);
      }
    }
    fetchNotes();
  }, []);

  const handleDelete = async id => {
    try {
      await API.deleteNote(id);
      setNotes(notes => notes.filter(note => note.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async note => {
    try {
      await API.addNote(note);
      setNotes(notes => [...notes, note]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NoteForm onSubmit={handleSubmit} />
      <NotesList items={notes} onDelete={handleDelete} />
    </>
  );
};
