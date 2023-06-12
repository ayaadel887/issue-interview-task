import React, { useState } from "react";
import styles from "./People.module.css";
const People = ({ EmployeData }) => {
  const [selectPeople, setSelectPeople] = useState(null);
  const handlerSelectPeople = (id) => {
    setSelectPeople(id);
  };
  return (
    <>
      <section className={styles.PeopleSection} id="testimonials">
        <div className={styles.container}>
          <div className={styles.boxes}>
            {EmployeData.map((person) => (
              <div
                className={
                  selectPeople === person.id ? styles.selectPeople : styles.box
                }
                onClick={() => handlerSelectPeople(person.id)}
                key={person.id}
              >
                <img src={person.source} alt="" /> <h3>{person.name}</h3>
                <span>Front-end Developer</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default People;
{
  /* <div className={styles.container}>
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
      </div> */
}
