import "./App.css";

function App() {
  return (
    <main className="container">
      <h1>Gestor de tareas</h1>

      <section className="form-section">
        <h2>Nueva tarea</h2>

        <form className="task-form">
          <div className="form-group">
            <label htmlFor="title">Titulo</label>
            <input type="text" name="title" id="title" />
          </div>
        </form>
      </section>
    </main>
  );
}

export default App;
