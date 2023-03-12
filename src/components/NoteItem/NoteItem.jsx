import { Modal } from 'components/Modal/Modal';
import { ModalEditForm } from 'components/ModalEditForm/ModalEditForm';
import { useModal } from 'hooks/useModal';
import { Wrapper, Text, Btn, Checkbox } from './NoteItem.styled';

export const NoteItem = ({
  item,
  onDelete,
  handleComplete,
  onSubmit,
  notesLength,
}) => {
  const { isModalOpen, openModal, closeModal } = useModal();

  const handleChange = () => {
    item['completed'] = !item.completed;
    handleComplete(item.id, item);
  };

  const { text, completed, id } = item;

  return (
    <>
      <Wrapper>
        <Checkbox type="checkbox" checked={completed} onChange={handleChange} />
        <Text>{text}</Text>
        <Btn
          type="button"
          onClick={() => {
            openModal();
          }}
        >
          Edit
        </Btn>
        <Btn
          type="button"
          onClick={() => {
            onDelete(id);
          }}
        >
          X
        </Btn>
      </Wrapper>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ModalEditForm
            textValue={text}
            onSubmit={onSubmit}
            item={item}
            onClose={closeModal}
          />
        </Modal>
      )}
    </>
  );
};
