import { useState } from 'react';

const DailyRoutinePage = ({ user }) => {
  const [routines, setRoutines] = useState(
    JSON.parse(localStorage.getItem('routines')) || []
  );
  
  const [newRoutine, setNewRoutine] = useState('');

  const saveRoutines = (updatedRoutines) => {
    setRoutines(updatedRoutines);
    localStorage.setItem('routines', JSON.stringify(updatedRoutines));
  };

  const toggleRoutineStatus = (id) => {
    const updatedRoutines = routines.map(routine => 
      routine.id === id ? { ...routine, completed: !routine.completed } : routine
    );
    saveRoutines(updatedRoutines);
  };

  const addRoutine = () => {
    if (newRoutine.trim() === '') return;
    
    const routine = {
      id: Date.now(),
      title: newRoutine,
      completed: false,
      type: 'routine'
    };
    
    const updatedRoutines = [...routines, routine];
    saveRoutines(updatedRoutines);
    setNewRoutine('');
  };

  const deleteRoutine = (id) => {
    const updatedRoutines = routines.filter(routine => routine.id !== id);
    saveRoutines(updatedRoutines);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-blue-800">Daily Routine</h1>
        <p className="text-blue-600">Build your perfect day</p>
      </div>
      
      {/* Add Routine Form */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newRoutine}
          onChange={(e) => setNewRoutine(e.target.value)}
          placeholder="Add a new routine item..."
          className="flex-1 px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onKeyPress={(e) => e.key === 'Enter' && addRoutine()}
        />
        <button
          onClick={addRoutine}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add
        </button>
      </div>
      
      {/* Routine List */}
      <div className="space-y-3">
        {routines.length === 0 ? (
          <div className="text-center py-8 text-blue-600">
            No routine items yet. Add one above!
          </div>
        ) : (
          routines.map(routine => (
            <div 
              key={routine.id} 
              className={`p-4 rounded-lg shadow-sm border flex items-center justify-between ${
                routine.completed 
                  ? 'bg-blue-100 border-blue-200' 
                  : 'bg-white border-blue-100'
              }`}
            >
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => toggleRoutineStatus(routine.id)}
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    routine.completed
                      ? 'bg-blue-600 border-blue-600'
                      : 'border-blue-400'
                  }`}
                >
                  {routine.completed && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
                <span className={`${
                  routine.completed 
                    ? 'line-through text-blue-500' 
                    : 'text-blue-800'
                }`}>
                  {routine.title}
                </span>
              </div>
              
              <button
                onClick={() => deleteRoutine(routine.id)}
                className="text-blue-400 hover:text-blue-600"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DailyRoutinePage;