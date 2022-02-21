import React from "react";
import {getAllEvents} from "../../dummy-data";
import classes from "./events.module.css";
import { useRouter } from "next/router";
import Head from "next/head";

// components
import PageHeading from "./../../components/PageHeading/PageHeading";
import EventComponent from "./../../components/EventsComponent/EventComponent";
import EventsSearch from "../../components/EventsSearch/EventsSearch";

const Events = () => {
  const events = getAllEvents(); //grab all events from dummy data.
  const router = useRouter() 

  // grab year and month
  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }

  return (
    <div>
      <Head>
        <title>All Events</title>
        <meta title='description' content='All events of our company' />
      </Head>
      <PageHeading text="events" color="brown" />
      {/* filter component */}
      <EventsSearch  onSearch={findEventsHandler} />
      <div className={classes.eventsContainer}>
        {events.map(i => (
          <EventComponent item={i} />
        ))}
      </div>
    </div>
  );
};

export default Events;
