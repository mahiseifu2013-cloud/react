import { useState, useEffect } from "react";
import Nav from "./assets/components/to do nav";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    // Load dark mode preference from localStorage
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : true; // default to true
  });

  // Load tasks
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
    setNewTask("");
    setEditingTask(null);
  };

  const handleAddTask = () => {
    if (newTask.trim() === "") return;

    if (editingTask !== null) {
      const updatedTasks = tasks.map((task, index) =>
        index === editingTask ? newTask : task
      );
      setTasks(updatedTasks);
      setEditingTask(null);
    } else {
      setTasks([...tasks, newTask]);
    }

    setNewTask("");
    setIsFormVisible(false);
  };

  const handleEditTask = (index) => {
    setNewTask(tasks[index]);
    setEditingTask(index);
    setIsFormVisible(true);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? "bg-zinc-950 text-white" : "bg-gray-100 text-gray-900"
    }`}>
      <Nav
        onToggleForm={toggleForm}
        isFormVisible={isFormVisible}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <main className="mx-auto max-w-3xl px-6 py-12">

        {isFormVisible && (
          <div className={`mb-8 rounded-2xl border p-6 shadow-xl transition-colors duration-300 ${
            darkMode 
              ? "border-zinc-800 bg-zinc-900" 
              : "border-gray-200 bg-white"
          }`}>
            <h2 className="mb-4 text-2xl font-bold">
              {editingTask !== null ? "Edit Task" : "Add New Task"}
            </h2>

            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter task description..."
              className={`w-full rounded-xl border px-4 py-3 outline-none transition focus:ring-2 ${
                darkMode
                  ? "border-zinc-700 bg-zinc-950 text-white focus:border-blue-500 focus:ring-blue-500/20"
                  : "border-gray-300 bg-white text-gray-900 focus:border-blue-500 focus:ring-blue-500/20"
              }`}
            />

            <div className="mt-4 flex gap-3">
              <button
                onClick={handleAddTask}
                className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-500 active:translate-y-0"
              >
                {editingTask !== null ? "Update Task" : "Save Task"}
              </button>

              <button
                onClick={toggleForm}
                className={`rounded-xl px-5 py-3 font-semibold transition ${
                  darkMode
                    ? "bg-zinc-800 hover:bg-zinc-700 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                }`}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {tasks.length === 0 ? (
          <div className={`rounded-2xl border border-dashed p-12 text-center transition-colors duration-300 ${
            darkMode ? "border-zinc-700" : "border-gray-300"
          }`}>
            <p className={`text-lg ${darkMode ? "text-zinc-400" : "text-gray-500"}`}>
              No tasks yet.
            </p>

            <p className={`mt-2 text-sm ${darkMode ? "text-zinc-500" : "text-gray-400"}`}>
              Click "Add New Task" to get started!
            </p>
          </div>
        ) : (
          <ul className="space-y-3">
            {tasks.map((task, index) => (
              <li
                key={index}
                className={`flex items-center justify-between rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  darkMode
                    ? "border-zinc-800 bg-zinc-900 hover:border-zinc-700"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <span className="text-lg">
                  {task}
                </span>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditTask(index)}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                      darkMode
                        ? "bg-zinc-800 hover:bg-zinc-700 text-white"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                    }`}
                  >
                    ✏️ Edit
                  </button>

                  <button
                    onClick={() => handleDeleteTask(index)}
                    className="rounded-lg bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500 hover:text-white"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

      </main>
    </div>
  );
}

export default App;