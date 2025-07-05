import React, { useRef, useState, useEffect } from "react";
import Cards from "./Cards";
import { FaPlus } from "react-icons/fa6";

function Foreground() {
  const ref = useRef(null);
  const [task, setTask] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");

  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && task.trim()) {
      const newTask = {
        desc: task.trim(),
        close: true,
        tag: {
          isOpen: true,
          tagTitle: title.trim(),
          tagColor: "",
        },
      };
      setTasks((prev) => [...prev, newTask]);
      setTask("");
      setTitle("");
      setShowForm(false);
    }
  };

  const handleDelete = (indexToDelete) => {
    const updated = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updated);
  };

  return (
    <div className="relative z-10 min-h-screen w-full bg-transparent">
      <div
        ref={ref}
        className="w-full min-h-screen top-0 left-0 grid gap-6 p-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 "
      >
        {tasks.map((items, index) => (
          <Cards
            key={index}
            data={items}
            reference={ref}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>

      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
        <button
          onClick={() => setShowForm(true)}
          className="group flex items-center gap-2 cursor-pointer border rounded-md hover:bg-green-500 bg-green-500/50 px-4 py-2 hover:border-black"
        >
          <FaPlus className="text-zinc-200 text-3xl" />
          <span className="hidden sm:block tracking-tight text-zinc-200 text-2xl">
            Add Task
          </span>
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
          <form
            onSubmit={handleSubmit}
            className="bg-white ml-5 mr-5 p-6 rounded-xl shadow-xl w-full max-w-md"
          >
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Title "
              className="text-xl font-semibold mb-4 w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 "
            />
            <input
              type="text"
              name="task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter Task"
              className="text-xl font-semibold mb-4 w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 "
            />

            <div className="flex justify-center gap-2">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="text-xl cursor-pointer tracking-tight border-2 py-2 px-4 rounded-md hover:text-white border-zinc-900 hover:bg-zinc-800"
              >
                Close
              </button>
              <button
                type="submit"
                className="px-4 cursor-pointer py-2 border-2 hover:border-black rounded text-xl hover:text-white hover:bg-green-600"
              >
                Add Task
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Foreground;
