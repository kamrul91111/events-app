import React from "react";
import {getAllEvents} from "../../dummy-data";
import classes from "./events.module.css";

// components
import PageHeading from "./../../components/PageHeading/PageHeading";
import EventComponent from "./../../components/EventsComponent/EventComponent";
import EventsSearch from "../../components/EventsSearch/EventsSearch";

const Events = () => {
  const events = getAllEvents(); //grab all events from dummy data.

  return (
    <div>
      <PageHeading text="events" color="brown" />
      {/* filter component */}
      <EventsSearch />
      <div className={classes.eventsContainer}>
        {events.map(i => (
          <EventComponent item={i} />
        ))}
      </div>
    </div>
  );
};

export default Events;
