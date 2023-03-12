import * as API from '../../services/api';
import { useState, useEffect } from 'react';
import { NotesList } from 'components/NotesList/NotesList';
import { NoteForm } from 'components/NoteForm/NoteForm';
export const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [notesLength, setNotesLength] = useState(0);

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

  useEffect(() => {
    setNotesLength(notes.length);
  }, [notes]);

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

  const handleComplete = async (id, note) => {
    try {
      await API.CompleteNote(id, note);
      console.log(notes);
      setNotes(
        notes => notes.filter(n => n)
        // notes.filter(n => {
        //   // if (n.id === id) {
        //   //   // n['completed'] = !n.completed;
        //   //   // console.log(n['id']);
        //   // }
        //   return n;
        // })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (id, note) => {
    try {
      await API.UpdateNote(id, note);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NoteForm onSubmit={handleSubmit} notesLength={notesLength} />
      <NotesList
        items={notes}
        onDelete={handleDelete}
        handleComplete={handleComplete}
        onSubmit={handleUpdate}
        notesLength={notesLength}
      />
    </>
  );
};
