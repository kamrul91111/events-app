import React from "react";
import {getAllEvents} from "../../dummy-data";
import classes from "./events.module.css";

// components
import PageHeading from "./../../components/PageHeading/PageHeading";
import EventComponent from "./../../components/EventsComponent/EventComponent";

const Events = () => {
  const events = getAllEvents(); //grab all events from dummy data.

  return (
    <div>
      <PageHeading text="events" color="brown" />
      <div className={classes.eventsContainer}>
        {events.map(i => (
          <EventComponent item={i} />
        ))}
      </div>
    </div>
  );
};

export default Events;
