import React from "react";
import styles from "./events.module.css";

const EventComponent = ({item}) => {
  const {title, description, location, date, image} = item;

  return (
    <div className={styles.container}>
      <img src={image} alt={title} className={styles.imageStyle} />
      <div style={{margin: 15}}>
        <h3>{title}</h3>
        <p>{description}</p>
        <address>{location?.replace(", ", "\n")}</address>
        <p style={{fontSize: 12}}>{date.split("-").reverse().join("/")}</p>
      </div>
    </div>
  );
};

export default EventComponent;
