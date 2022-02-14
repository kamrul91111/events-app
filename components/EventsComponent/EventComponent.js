import Link from "next/link";
import React from "react";
import styles from "./events.module.css";

const EventComponent = ({item}) => {
  const {title, description, location, date, image, id} = item;

  return (
    <div className={styles.container}>
      <img src={image} alt={title} className={styles.imageStyle} />
      <div style={{margin: 15}}>
        <h3>{title}</h3>
        <p>{description}</p>
        <address>{location?.replace(", ", "\n")}</address>
        <p style={{fontSize: 12}}>{date.split("-").reverse().join("/")}</p>
        <Link href={`/events/${id}`}>
          <button className={styles.button}>Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default EventComponent;
