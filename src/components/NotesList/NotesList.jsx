import { NoteItem } from '../NoteItem/NoteItem';
import { ListItem, List } from './NotesListStyled';

export const NotesList = ({ items, onDelete }) => {
  return (
    <>
      <h2>Notes:</h2>
      <List>
        {items.map(note => {
          return (
            <ListItem key={note.id}>
              <NoteItem item={note} onDelete={onDelete} />
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
