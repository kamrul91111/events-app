import styles from '../styles/Home.module.css'
import { getFeaturedEvents } from './../dummy-data'
import Link from "next/link";

// components
import PageHeading from '../components/PageHeading/PageHeading'
import EventComponent from '../components/EventsComponent/EventComponent'

const Home = () => {
  //this function returns all events with a featured flag
  const featuredEvents = getFeaturedEvents()

  return (
    <div className={styles.container}>
      <PageHeading text='Exciting Events' color='limegreen' />
      <div className={styles.itemContainer}>
        {featuredEvents.map(f => (
          <EventComponent key={f.id} item={f} />
        ))}
      </div>
      {/* banner */}
      <div className={styles.banner}>
        <h2>Grab Sweet Merch</h2>
        <Link href='/products'>
          <button className={styles.button}>Visit Merch Store</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
