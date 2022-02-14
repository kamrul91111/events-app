import EventComponent from "../components/EventsComponent/EventComponent";
import styles from "../styles/Home.module.css";
import {getFeaturedEvents} from "./../dummy-data";

const Home = () => {
  //this function returns all events with a featured flag
  const featuredEvents = getFeaturedEvents();

  return (
    <div className={styles.container}>
      <h2 style={{textAlign: "center"}}>Exciting Events</h2>
      <div className={styles.itemContainer}>
        {featuredEvents.map(f => (
          <EventComponent key={f.id} item={f} />
        ))}
      </div>
    </div>
  );
};

export default Home;
