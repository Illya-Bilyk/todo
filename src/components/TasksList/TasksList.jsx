import { TaskItem } from '../TaskItem/TaskItem';
import { ListItem, List } from './TasksList.styled';

export const TasksList = ({ items, ...otherProps }) => {
  return (
    <>
      <h2>Tasks:</h2>
      <List>
        {items.map(task => {
          return (
            <ListItem key={task.id}>
              <TaskItem item={task} {...otherProps} />
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
