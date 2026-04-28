import "./App.css";

function App() {
  return (
    <main className="container">
      <h1>Gestor de tareas</h1>

      <section className="form-section">
        <h2>Nueva tarea</h2>

        <form className="task-form">
          <div className="form-group">
            <label htmlFor="title">Tarea: </label>
            <input type="text" name="title" id="title" />
          </div>

          <div className="form-group">
            <label htmlFor="status">Estado: </label>
            <select name="status" id="status">
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
