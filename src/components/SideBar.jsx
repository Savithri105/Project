import { Link } from "react-router-dom";

const Sidebar = ({ username }) => {
  return (
    <div className="w-64 bg-blue-800 text-white h-screen p-4 flex flex-col">
      <div className="mb-8 p-4 border-b border-blue-700">
        <h2 className="text-xl font-bold">Task Manager</h2>
        <p className="text-blue-200 text-sm">Welcome, {username}</p>
      </div>

      <nav className="flex-1 space-y-2">
        <Link
          to="/tasks"
          className="p-3 rounded-lg hover:bg-blue-700 transition flex items-center"
        >
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          Task Manager
        </Link>

        <Link
          to="/daily-routine"
          className="p-3 rounded-lg hover:bg-blue-700 transition flex items-center"
        >
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Daily Routine
        </Link>

        <Link
          to="/HabitForming"
          className="p-3 rounded-lg hover:bg-blue-700 transition flex items-center"
        >
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          Habit Forming
        </Link>
      </nav>

      <div className="mt-auto border-t border-blue-700 pt-4">
        <Link
          to="/pricing"
          className=" p-3 rounded-lg hover:bg-blue-700 transition flex items-center"
        >
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Pricing
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;