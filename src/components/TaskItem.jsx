import { Checkbox, IconButton, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import client from '../api/client';

const TaskItem = ({ task, refreshTasks }) => {
  const toggleComplete = async () => {
    await client.patch(`/tasks/${task.id}`, { completed: !task.completed });
    refreshTasks();
  };

  const deleteTask = async () => {
    await client.delete(`/tasks/${task.id}`);
    refreshTasks();
  };

  return (
    <ListItem>
      <Checkbox checked={task.completed} onChange={toggleComplete} />
      <ListItemText primary={task.title} />
      <IconButton edge="end" onClick={deleteTask}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TaskItem;


