import React, { useState } from "react";
import styles from "./People.module.css";
const People = ({ EmployeData }) => {
  const [selectPeople, setSelectPeople] = useState(null);
  const handlerSelectPeople = (id) => {
    setSelectPeople(id);
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.heder}>Direct it to whome ?</h2>
      <div className={styles.content}>
        {EmployeData.map((person) => (
          <div
            key={person.id}
            className={
              selectPeople === person.id
                ? styles.selectPeople
                : styles.imageContainer
            }
            onClick={() => handlerSelectPeople(person.id)}
          >
            <img src={person.source} alt="" className={styles.image} />
            <p className={styles.title}>{person.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;
