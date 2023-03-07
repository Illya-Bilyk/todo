import { Wrapper, Text, Btn, Checkbox } from './NoteItemStyled';

export const NoteItem = ({ item, onDelete }) => {
  const handleChange = () => {};

  const { text, completed, id } = item;

  return (
    <Wrapper>
      <Checkbox type="checkbox" checked={completed} onChange={handleChange} />
      <Text>{text}</Text>
      <Btn
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        X
      </Btn>
    </Wrapper>
  );
};
