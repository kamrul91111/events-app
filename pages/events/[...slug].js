import React from 'react'
import { useRouter } from 'next/router'
import { getFilteredEvents } from './../../dummy-data'
import PageHeading from './../../components/PageHeading/PageHeading'
import EventComponent from './../../components/EventsComponent/EventComponent'

const FilterEvents = () => {
  const router = useRouter()

  const filterData = router.query.slug
  const filteredYear = filterData[0]
  const filteredMonth = filterData[1]

  // grab filteredEvents from dummy data
  const filteredEvents = getFilteredEvents({
    year: Number(filteredYear),
    month: Number(filteredMonth)
  })

  // if no data, or not numbers in params and success case
  if (!filterData) {
    return <p>No data found</p>
  } else if (isNaN(filteredYear) || isNaN(filteredMonth)) {
    return <p>Invalid URL</p>
  } else {
    return (
      <div>
        <PageHeading text='Events' color='gainsboro' />
        {filteredEvents.map(f => (
          <EventComponent item={f} />
        ))}
      </div>
    )
  }
}

export default FilterEvents
