import React from "react";
import styles from "./IssueTicket.module.css";
import IssueType from "../../component/IssueType/IssueType";
import Department from "../../component/Department/Department";
import People from "../../component/People/People";
import Form from "../../component/Form/Form";
import Company from "../../component/Company/Company";

const IssueTicket = ({ departments, EmployeData, typeIssue, company }) => {
  return (
    <section className={styles.container}>
      <h1>Issue</h1>
      <IssueType typeIssue={typeIssue} />
      <Department departments={departments} />
      <Company company={company} />
      <People EmployeData={EmployeData} />
      <Form />
    </section>
  );
};

export default IssueTicket;
