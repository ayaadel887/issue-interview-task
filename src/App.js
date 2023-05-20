import "./App.css";
import Department from "./component/Department/Department";
import { departments } from "./Data.js";

function App() {
  return (
    <>
      <Department departments={departments} />
    </>
  );
}

export default App;
