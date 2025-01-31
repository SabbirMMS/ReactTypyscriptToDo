import AddToDo from "./components/AddToDo";
import Todos from "./components/Todos";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main>
      <h1>TODO REACT + TYPESCRIPT</h1>
      <h3>Sabbir MMS</h3>
      <Navbar />
      <AddToDo />
      <Todos />
    </main>
  );
};

export default App;
