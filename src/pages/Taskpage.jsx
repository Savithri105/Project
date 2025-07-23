import React, { useEffect, useState } from "react";
import axios from "axios";
import { TextField, Button, Card, CardContent, IconButton, Typography } from "@mui/material";
import { Edit, Delete, CheckCircle, Cancel } from "@mui/icons-material";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const taskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
});

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [username, setUsername] = useState("");

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({
    resolver: zodResolver(taskSchema),
  });

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      setUsername(savedUsername);
    }

    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios.get("http://localhost:3001/tasks").then((res) => {
      setTasks(res.data);
    });
  };

  const onSubmit = (data) => {
    if (editId) {
      axios.put(`http://localhost:3001/tasks/${editId}`, data).then(() => {
        fetchTasks();
        setEditId(null);
        reset();
      });
    } else {
      const newTask = { ...data, completed: false };
      axios.post("http://localhost:3001/tasks", newTask).then(() => {
        fetchTasks();
        reset();
      });
    }
  };

  const handleEdit = (task) => {
    if (!task.completed) {
      setEditId(task.id);
      setValue("title", task.title);
      setValue("description", task.description);
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/tasks/${id}`).then(() => fetchTasks());
  };

  const handleToggleComplete = (task) => {
    axios.put(`http://localhost:3001/tasks/${task.id}`, {
      ...task,
      completed: !task.completed,
    }).then(() => fetchTasks());
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Task Manager</h2>
        <p className="text-sm">👤 {username}</p>
        <nav className="mt-10 space-y-4">
          <a href="/daily-routine" className="hover:underline block">Daily Routine</a>
   
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-50 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-800">Your Tasks</h1>
          <span className="text-blue-600 font-medium">Welcome, {username}</span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
          <TextField label="Title" fullWidth {...register("title")} error={!!errors.title} helperText={errors.title?.message} />
          <TextField label="Description" fullWidth {...register("description")} />
          <Button variant="contained" type="submit" color="primary">
            {editId ? "Update Task" : "Add Task"}
          </Button>
        </form>

        {/* Task Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {tasks.map((task) => (
            <Card key={task.id} className={`shadow-lg ${task.completed ? "bg-gray-200" : "bg-white"}`}>
              <CardContent>
                <Typography variant="h6" className={`font-semibold ${task.completed ? "line-through text-gray-500" : "text-gray-800"}`}>
                  {task.title}
                </Typography>
                <Typography variant="body2" className="mb-4 text-gray-600">
                  {task.description}
                </Typography>

                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    {!task.completed && (
                      <IconButton color="primary" onClick={() => handleEdit(task)}>
                        <Edit />
                      </IconButton>
                    )}
                    <IconButton color="error" onClick={() => handleDelete(task.id)}>
                      <Delete />
                    </IconButton>
                  </div>
                  <IconButton onClick={() => handleToggleComplete(task)}>
                    {task.completed ? <Cancel color="action" /> : <CheckCircle color="success" />}
                  </IconButton>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TaskPage;
