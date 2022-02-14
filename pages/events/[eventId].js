import React from "react";
import classes from "./events.module.css";
import {useRouter} from "next/router";
import {getEventById} from "../../dummy-data";

// components
import PageHeading from "./../../components/PageHeading/PageHeading";

const EventDetails = () => {
  const router = useRouter();

  // grab event id
  const eventId = router.query.eventId;

  // grab event
  const event = getEventById(eventId); //use helper function

  // destructure event
  // const {image, title, description} = event;

  // if event exists, show deets, else display error
  if (event) {
    return (
      <div>
        <PageHeading text={event.title} color="lavender" />
        <div className={classes.thumbnailContainer}>
          <img
            src={event?.image}
            alt={event?.title}
            className={classes.thumbnail}
          />
        </div>
        <div className={classes.details}>
          <p>{event?.description}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.errorContainer}>
        <h3>No such event exists!</h3>
      </div>
    );
  }
};

export default EventDetails;
