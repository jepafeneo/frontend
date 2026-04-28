import { useState } from "react";
import "./App.css";

const initialForm = {
  title: "",
  status: "pending",
};

function App() {
  const [form, setForm] = useState(initialForm);
  const [tasks, setTasks] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const task = {
      id: crypto.randomUUID(),
      title: form.title,
      status: form.status,
    };

    // tasks.push(task) // No usar con estados
    setTasks([...tasks, task]);
    setForm(initialForm);
  };

  return (
    <main className="container">
      <h1>Gestor de tareas</h1>

      <section className="form-section">
        <h2>Nueva tarea</h2>

        <form onSubmit={handleSubmit} className="task-form">
          <div className="form-group">
            <label htmlFor="title">Tarea: </label>
            <input
              type="text"
              name="title"
              id="title"
              value={form.title}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="status">Estado: </label>
            <select
              name="status"
              id="status"
              value={form.status}
              onChange={handleChange}
            >
              <option value="pending">Pendiente</option>
              <option value="done">Terminada</option>
            </select>
          </div>

          <button type="submit">Crear tarea</button>
        </form>
      </section>
    </main>
  );
}

export default App;
