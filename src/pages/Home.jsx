import { useEffect, useState } from 'react';
import client from '../api/client';
import TaskForm from './Taskpage';
import TaskItem from '../components/TaskItem';
import { Container, List, Typography } from '@mui/material';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await client.get('/tasks');
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Task List</Typography>
      <TaskForm refreshTasks={fetchTasks} />
      <List>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} refreshTasks={fetchTasks} />
        ))}
      </List>
    </Container>
  );
};

export default Home;
