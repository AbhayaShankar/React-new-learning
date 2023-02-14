import "./App.css";
import Create from "./components/create/create";
import Read from "./components/read/read";

function App() {
  return (
    <div className="main">
      <div>
        <h3>React CRUD Operations</h3>
      </div>
      <div>
        <Create />
      </div>

      <div style={{ marginTop: 30 }}>
        <Read />
      </div>
    </div>
  );
}

export default App;
