import React, { useEffect, useState } from 'react';
import axios from 'axios';

const baseURL = 'http://localhost:3001/tasks';

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTaskTitle, setEditedTaskTitle] = useState('');

  useEffect(() => {
    axios.get(baseURL)
      .then(res => setTasks(res.data))
      .catch(err => console.error('Error fetching tasks:', err));
  }, []);

  const addTask = () => {
    if (newTask.trim() === '') return;

    const task = { title: newTask, completed: false };

    axios.post(baseURL, task)
      .then(res => setTasks([...tasks, res.data]))
      .catch(err => console.error('Error adding task:', err));

    setNewTask('');
  };

  const toggleTaskStatus = (id, completed) => {
    axios.patch(`${baseURL}/${id}`, { completed: !completed })
      .then(() => {
        setTasks(tasks.map(task =>
          task.id === id ? { ...task, completed: !completed } : task
        ));
      })
      .catch(err => console.error('Error updating task:', err));
  };

  const deleteTask = (id) => {
    axios.delete(`${baseURL}/${id}`)
      .then(() => setTasks(tasks.filter(task => task.id !== id)))
      .catch(err => console.error('Error deleting task:', err));
  };

  const startEdit = (task) => {
    setEditingTaskId(task.id);
    setEditedTaskTitle(task.title);
  };

  const cancelEdit = () => {
    setEditingTaskId(null);
    setEditedTaskTitle('');
  };

  const saveEdit = (id) => {
    if (editedTaskTitle.trim() === '') return;
    axios.patch(`${baseURL}/${id}`, { title: editedTaskTitle })
      .then(() => {
        setTasks(tasks.map(task =>
          task.id === id ? { ...task, title: editedTaskTitle } : task
        ));
        cancelEdit();
      })
      .catch(err => console.error('Error editing task:', err));
  };

  const pendingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Task Manager</h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 rounded-lg border border-blue-300"
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
          />
          <button
            onClick={addTask}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Add
          </button>
        </div>

        <h2 className="text-xl font-semibold mb-2 text-blue-700">Pending</h2>
        <div className="space-y-2 mb-6">
          {pendingTasks.length === 0 ? (
            <p>No pending tasks.</p>
          ) : (
            pendingTasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                toggleTaskStatus={toggleTaskStatus}
                deleteTask={deleteTask}
                isEditing={editingTaskId === task.id}
                editedTitle={editedTaskTitle}
                setEditedTitle={setEditedTaskTitle}
                startEdit={() => startEdit(task)}
                cancelEdit={cancelEdit}
                saveEdit={() => saveEdit(task.id)}
              />
            ))
          )}
        </div>

        <h2 className="text-xl font-semibold mb-2 text-green-700">Completed</h2>
        <div className="space-y-2">
          {completedTasks.length === 0 ? (
            <p>No completed tasks.</p>
          ) : (
            completedTasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                toggleTaskStatus={toggleTaskStatus}
                deleteTask={deleteTask}
                isCompleted
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const TaskItem = ({
  task,
  toggleTaskStatus,
  deleteTask,
  isEditing = false,
  editedTitle = '',
  setEditedTitle = () => {},
  startEdit = () => {},
  cancelEdit = () => {},
  saveEdit = () => {},
  isCompleted = false
}) => {
  return (
    <div
      className={`p-4 rounded-lg flex items-center justify-between ${
        task.completed ? 'bg-green-100' : 'bg-white'
      } border`}
    >
      <div className="flex items-center gap-3 w-full">
        {/* Checkbox */}
        <button
          onClick={() => toggleTaskStatus(task.id, task.completed)}
          className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition duration-300 ${
            task.completed ? 'bg-green-600 border-green-600' : 'border-blue-500'
          }`}
        >
          {task.completed && (
            <svg
              className="w-3 h-3 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </button>

        {/* Task Text or Input */}
        <div className="flex-1">
          {isEditing ? (
            <input
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="border px-2 py-1 rounded w-full"
            />
          ) : (
            <span
              className={`text-sm ${
                task.completed ? 'line-through text-gray-500' : ''
              }`}
            >
              {task.title}
            </span>
          )}
        </div>

        {/* Actions */}
        {!task.completed && (
          isEditing ? (
            <div className="flex gap-1">
              <button onClick={saveEdit} className="text-green-500">✔</button>
              <button onClick={cancelEdit} className="text-gray-500">✖</button>
            </div>
          ) : (
            <button
              onClick={startEdit}
              className="text-blue-500 hover:text-blue-700"
            >
              ✎
            </button>
          )
        )}

        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-500 hover:text-red-700"
        >
          🗑
        </button>
      </div>
    </div>
  );
};

export default TaskPage;
