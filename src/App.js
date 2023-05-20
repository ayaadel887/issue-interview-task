import "./App.css";
import Department from "./component/Department/Department";
import IssueType from "./component/IssueType/IssueType";
import People from "./component/People/People";

import { departments, EmployeData, typeIssue } from "./Data.js";
function App() {
  return (
    <>
      <section className="container">
        {" "}
        <IssueType typeIssue={typeIssue} />
        <Department departments={departments} />
        <People EmployeData={EmployeData} />
      </section>
    </>
  );
}

export default App;
