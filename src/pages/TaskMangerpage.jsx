import { useState } from 'react';

const TaskManagerPage = ({ user }) => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );
  
  const [newTask, setNewTask] = useState('');

  const saveTasks = (updatedTasks) => {
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const toggleTaskStatus = (id) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasks(updatedTasks);
  };

  const addTask = () => {
    if (newTask.trim() === '') return;
    
    const task = {
      id: Date.now(),
      title: newTask,
      completed: false,
      type: 'task'
    };
    
    const updatedTasks = [...tasks, task];
    saveTasks(updatedTasks);
    setNewTask('');
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    saveTasks(updatedTasks);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-blue-800">Task Manager</h1>
        <p className="text-blue-600">Organize your work efficiently</p>
      </div>
      
      
    </div>
  );
};

export default TaskManagerPage;