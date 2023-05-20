import "./App.css";
import Department from "./component/Department/Department";
import People from "./component/People/People";
import { departments, EmployeData } from "./Data.js";
function App() {
  return (
    <>
      <section className="container">
        <Department departments={departments} />
        <People EmployeData={EmployeData} />
      </section>
    </>
  );
}

export default App;
