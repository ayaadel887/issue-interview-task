import "./App.css";

import { departments, EmployeData, typeIssue } from "./Data.js";
import IssueTicket from "./Pages/IssueTicket/IssueTicket";
function App() {
  return (
    <>
      <IssueTicket
        departments={departments}
        EmployeData={EmployeData}
        typeIssue={typeIssue}
      />
    </>
  );
}

export default App;
