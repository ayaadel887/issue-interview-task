import React from "react";
import styles from "./IssueTicket.module.css";
import IssueType from "../../component/IssueType/IssueType";
import Department from "../../component/Department/Department";
import People from "../../component/People/People";
import Form from "../../component/Form/Form";

const IssueTicket = ({ departments, EmployeData, typeIssue }) => {
  return (
    <section className={styles.container}>
      <h1>Issue</h1>
      <section className="container">
        <IssueType typeIssue={typeIssue} />
        <Department departments={departments} />
        <People EmployeData={EmployeData} />
        <Form />
      </section>
    </section>
  );
};

export default IssueTicket;
