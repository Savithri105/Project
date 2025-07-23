import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import { Edit, Delete, Save, Close } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const routineSchema = z.object({
  activity: z.string().min(1, "Activity is required"),
  startTime: z.string().min(1, "Start time is required"),
  endTime: z.string().min(1, "End time is required"),
});

const DailyRoutine = () => {
  const [routines, setRoutines] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [username, setUsername] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(routineSchema),
  });

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) setUsername(savedUsername);
    fetchRoutines();
  }, []);

  const fetchRoutines = () => {
    axios.get("http://localhost:3001/routines").then((res) => {
      setRoutines(res.data);
    });
  };

  const onSubmit = (data) => {
    if (editingId !== null) {
      // Update existing routine
      axios
        .put(`http://localhost:3001/routines/${editingId}`, data)
        .then(() => {
          fetchRoutines();
          reset();
          setEditingId(null);
        });
    } else {
      // Add new routine
      axios.post("http://localhost:3001/routines", data).then(() => {
        fetchRoutines();
        reset();
      });
    }
  };

  const handleEdit = (routine) => {
    setEditingId(routine.id);
    setValue("activity", routine.activity);
    setValue("startTime", routine.startTime);
    setValue("endTime", routine.endTime);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/routines/${id}`).then(() => {
      fetchRoutines();
    });
  };

  const cancelEdit = () => {
    reset();
    setEditingId(null);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Task Manager</h2>
        <p className="text-sm">👤 {username}</p>
        <nav className="mt-10 space-y-4">
          <a href="/tasks" className="hover:underline block">Your Tasks</a>
          <a href="/daily-routine" className="hover:underline block font-semibold">Daily Routine</a>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 bg-gray-50 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-800">Daily Routine</h1>
          <span className="text-blue-600 font-medium">Welcome, {username}</span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
          <TextField
            label="Activity"
            fullWidth
            {...register("activity")}
            error={!!errors.activity}
            helperText={errors.activity?.message}
            
          />
          <TextField
            label="Start Time"
            fullWidth
            {...register("startTime")}
            error={!!errors.startTime}
            helperText={errors.startTime?.message}
          />
          <TextField
            label="End Time"
            fullWidth
            {...register("endTime")}
            error={!!errors.endTime}
            helperText={errors.endTime?.message}
          />
          <div className="flex gap-4">
            <Button type="submit" variant="contained" color="primary">
              {editingId ? "Update" : "Add Routine"}
            </Button>
            {editingId && (
              <Button
                variant="outlined"
                color="secondary"
                onClick={cancelEdit}
                startIcon={<Close />}
              >
                Cancel
              </Button>
            )}
          </div>
        </form>

        {/* Routine Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {routines.map((routine) => (
            <Card key={routine.id} className="bg-white shadow-md relative">
              <CardContent>
                <Typography variant="h6" className="font-semibold text-gray-800">
                  {routine.activity}
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  {routine.startTime} - {routine.endTime}
                </Typography>

                <div className="absolute top-2 right-2 flex gap-2">
                  <IconButton
                    size="small"
                    color="primary"
                    onClick={() => handleEdit(routine)}
                  >
                    <Edit fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => handleDelete(routine.id)}
                  >
                    <Delete fontSize="small" />
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

export default DailyRoutine;
