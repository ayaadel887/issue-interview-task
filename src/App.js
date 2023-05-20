import "./App.css";
import { departments, EmployeData, typeIssue, companyImg } from "./Data.js";
import IssueTicket from "./Pages/IssueTicket/IssueTicket";
function App() {
  return (
    <>
      <div className="App">
        <IssueTicket
          departments={departments}
          EmployeData={EmployeData}
          typeIssue={typeIssue}
          company={companyImg}
        />
      </div>
    </>
  );
}

export default App;
