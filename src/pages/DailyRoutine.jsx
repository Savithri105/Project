import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Card,
  CardContent,
  IconButton,
  MenuItem,
  Typography,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const DailyRoutine = () => {
  const [routines, setRoutines] = useState([]);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    startTime: "",
    endTime: "",
    startPeriod: "AM",
    endPeriod: "AM",
  });
  const [filter, setFilter] = useState("All");

  const fetchRoutines = () => {
    axios.get("http://localhost:3001/routines").then((res) => {
      const sorted = res.data.sort((a, b) => convertTo24Hour(a.startTime, a.startPeriod) - convertTo24Hour(b.startTime, b.startPeriod));
      setRoutines(sorted);
    });
  };

  useEffect(() => {
    fetchRoutines();
  }, []);

  const convertTo24Hour = (time, period) => {
    let [hour, minute] = time.split(":");
    hour = parseInt(hour);
    if (period === "PM" && hour !== 12) hour += 12;
    if (period === "AM" && hour === 12) hour = 0;
    return hour * 60 + parseInt(minute);
  };

  const filteredRoutines = routines.filter((r) => {
    const hour = convertTo24Hour(r.startTime, r.startPeriod) / 60;
    if (filter === "Morning") return hour >= 5 && hour < 12;
    if (filter === "Evening") return hour >= 17 && hour <= 22;
    return true;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...formData };

    if (editId) {
      axios.put(`http://localhost:3001/routines/${editId}`, data).then(() => {
        fetchRoutines();
        resetForm();
      });
    } else {
      axios.post("http://localhost:3001/routines", data).then(() => {
        fetchRoutines();
        resetForm();
      });
    }
  };

  const resetForm = () => {
    setEditId(null);
    setFormData({ title: "", startTime: "", endTime: "", startPeriod: "AM", endPeriod: "AM" });
  };

  const handleEdit = (r) => {
    setEditId(r.id);
    setFormData({
      title: r.title,
      startTime: r.startTime,
      endTime: r.endTime,
      startPeriod: r.startPeriod,
      endPeriod: r.endPeriod,
    });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/routines/${id}`).then(() => fetchRoutines());
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-4 text-blue-800">🕒 Daily Routine</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <TextField
          label="Routine Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />

        <div className="flex items-center gap-2">
          <TextField
            label="Start Time"
            type="time"
            value={formData.startTime}
            onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
            required
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel>AM/PM</InputLabel>
            <Select
              value={formData.startPeriod}
              onChange={(e) => setFormData({ ...formData, startPeriod: e.target.value })}
              required
            >
              <MenuItem value="AM">AM</MenuItem>
              <MenuItem value="PM">PM</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="flex items-center gap-2">
          <TextField
            label="End Time"
            type="time"
            value={formData.endTime}
            onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
            required
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel>AM/PM</InputLabel>
            <Select
              value={formData.endPeriod}
              onChange={(e) => setFormData({ ...formData, endPeriod: e.target.value })}
              required
            >
              <MenuItem value="AM">AM</MenuItem>
              <MenuItem value="PM">PM</MenuItem>
            </Select>
          </FormControl>
        </div>

        <Button type="submit" variant="contained" color="primary">
          {editId ? "Update" : "Add"} Routine
        </Button>
      </form>

      <div className="mb-4">
        <Button onClick={() => setFilter("All")}>All</Button>
        <Button onClick={() => setFilter("Morning")}>Morning</Button>
        <Button onClick={() => setFilter("Evening")}>Evening</Button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {filteredRoutines.map((r) => (
          <Card key={r.id} className="shadow-md">
            <CardContent>
              <Typography variant="h6" className="font-semibold text-blue-900">
                {r.title}
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                {r.startTime} {r.startPeriod} - {r.endTime} {r.endPeriod}
              </Typography>
              <div className="mt-2 flex gap-2">
                <IconButton color="primary" onClick={() => handleEdit(r)}>
                  <Edit />
                </IconButton>
                <IconButton color="error" onClick={() => handleDelete(r.id)}>
                  <Delete />
                </IconButton>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DailyRoutine;
