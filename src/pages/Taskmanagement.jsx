import React from 'react';
import { Link } from 'react-router-dom';

const TaskManagement = () => {
  const features = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2838/2838694.png", 
      title: "Task Organization",
      description: "Categorize tasks with tags, priorities, and due dates for effortless management"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3595/3595455.png", 
      title: "Smart Scheduling",
      description: "Auto-schedule tasks based on your availability and energy levels"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2462/2462719.png", 
      title: "Team Collaboration",
      description: "Delegate tasks and track progress with your team in real-time"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center py-20 px-8 gap-16 max-w-7xl mx-auto">
        {/* Left Text Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-8 px-4 md:px-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Your brain's for ideas, not remembering 2,974 to-dos
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Capture all those tasks in our Task Manager and feel an instant sense of clarity and control.
            Our AI-powered system helps you focus on what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/signup"
              className="inline-block bg-teal-400 hover:bg-teal-700 text-white px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start for free
            </Link>
            <Link
              to="/demo"
              className="inline-block border-2 border-gray-300 hover:border-blue-400 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg text-lg transition-all duration-300"
            >
              Watch demo
            </Link>
          </div>
        </div>

        {/* Right Image Section - Modern task management dashboard */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/organized-concept-illustration_114360-1023.jpg"
            alt="Modern task management dashboard"
            className="w-full max-w-[500px] md:max-w-[600px] object-contain rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Value Props Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              {
                title: "Simple",
                description: "Easy to use, no clutter—just focus on your tasks.",
                color: "text-blue-600"
              },
              {
                title: "Straightforward",
                description: "Clear layout and intuitive controls make it seamless.",
                color: "text-blue-600"
              },
              {
                title: "Super Powerful",
                description: "Packed with features to organize, plan, and execute.",
                color: "text-blue-600"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className={`text-3xl font-semibold mb-4 ${item.color}`}>{item.title}</h3>
                <p className="text-gray-600 text-xl">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Everything You Need to Master Your Tasks
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                  <img 
                    src={feature.icon} 
                    alt={feature.title} 
                    className="w-10 h-10" 
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://cdn-icons-png.flaticon.com/512/2838/2838735.png"; // Blue fallback icon
                    }}
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Productivity Stats Section */}
      <div className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              {
                value: "87%",
                label: "Increase in productivity"
              },
              {
                value: "3.5x",
                label: "More tasks completed"
              },
              {
                value: "2.1h",
                label: "Daily time saved"
              },
              {
                value: "94%",
                label: "User satisfaction"
              }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">{stat.value}</div>
                <div className="text-lg text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 mt-20">
        <div className="max-w-4xl mx-auto text-center px-8 py-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to take control of your tasks?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals who've transformed their productivity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
               className="inline-block border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Get Started Free
            </Link>
           
          </div>
        </div>
      </div>
          <footer className="bg-gray-100 text-gray-700 py-10 px-4 md:px-20 mt-10">
  <div className="grid md:grid-cols-4 gap-8">
    {/* Column 1: Logo and Description */}
    <div>
      <h2 className="text-xl font-bold text-blue-600">TaskManager</h2>
      <p className="text-sm mt-2">
        Simple, streamlined, and powerful—TaskManager helps individuals and teams stay on top of their work with clarity and confidence.
      </p>
    </div>
    {/*Column 2: Quick Links*/}
    <div>
      <h3 className="text-md font-semibold mb-2">Quick Links</h3>
      <ul className="space-y-1 text-sm">
        <li><a href="/" className="hover:text-blue-600">Home</a></li>
        <li><a href="/pricing" className="hover:text-blue-600">Pricing</a></li>
        <li><a href="/overview" className="hover:text-blue-600">Overview</a></li>
        <li><a href="/signup" className="hover:text-blue-600">Get Started</a></li>
      </ul>
    </div>
    {/*Column 3: Company*/}
    <div>
      <h3 className="text-md font-semibold mb-2">Company</h3>
      <ul className="space-y-1 text-sm">
        <li><a href="/about" className="hover:text-blue-600">About Us</a></li>
        <li><a href="/careers" className="hover:text-blue-600">Careers</a></li>
        <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
        <li><a href="/privacy" className="hover:text-blue-600">Privacy Policy</a></li>
      </ul>
    </div>
    {/*Column 4: Newsletter*/}
    <div>
      <h3 className="text-md font-semibold mb-2">Stay Updated</h3>
      <p className="text-sm mb-2">Subscribe to receive product updates, tips, and productivity hacks.</p>
      <form className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-3 py-2 border border-gray-300 rounded-md text-sm"
        />
        <button className="bg-blue-600 text-white text-sm py-2 rounded-md hover:bg-blue-700">
          Subscribe
        </button>
      </form>
    </div>
  </div>

  <div className="text-center text-xs text-gray-500 mt-10 border-t pt-4">
    &copy; {new Date().getFullYear()} TaskManager. All rights reserved.
  </div>
</footer>
    </div>
  );
};

export default TaskManagement;