import "./App.css";

import { departments, EmployeData, typeIssue, companyImg } from "./Data.js";
import IssueTicket from "./Pages/IssueTicket/IssueTicket";
function App() {
  return (
    <>
      <IssueTicket
        departments={departments}
        EmployeData={EmployeData}
        typeIssue={typeIssue}
        company={companyImg}
      />
    </>
  );
}

export default App;
