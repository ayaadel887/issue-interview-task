import React, { useState } from "react";
import styles from "./IssueType.module.css";

const IssueType = ({ typeIssue }) => {
  const [selectIssue, setSelectIssue] = useState(null);
  const handlerSelectIssue = (id) => {
    setSelectIssue(id);
  };
  return (
    <div>
      {typeIssue.map((iss) => (
        <button
          className={selectIssue === iss.id ? styles.selectIssue : styles.bttn}
          key={iss.id}
          onClick={() => handlerSelectIssue(iss.id)}
        >
          {iss.type}
        </button>
      ))}
    </div>
  );
};

export default IssueType;
