import React, { useRef } from 'react'
import classes from './eventssearch.module.css'

const EventsSearch = props => {
  const yearInputRef = useRef()
  const monthInputRef = useRef()

  const submissionHandler = e => {
    // prevents default submission, which causes state loss
    e.preventDefault()

    //grab the selected values
    const selectedYear = yearInputRef.current.value
    const selectedMonth = monthInputRef.current.value

    // pass these values
    props.onSearch(selectedYear, selectedMonth)
  }

  return (
    <form className={classes.container} onSubmit={submissionHandler}>
      {/* years */}
      <div>
        <label htmlFor='year'>Year</label>
        <select id='year' ref={yearInputRef}>
          <option value='2021'>2021</option>
          <option value='2022'>2022</option>
        </select>
      </div>
      {/* months */}
      <div style={{ width: '50%' }}>
        <label htmlFor='month'>Month</label>
        <select id='month' ref={monthInputRef}>
          <option value='1'>January</option>
          <option value='2'>February</option>
          <option value='3'>March</option>
          <option value='4'>April</option>
          <option value='5'>May</option>
          <option value='6'>June</option>
          <option value='7'>July</option>
          <option value='8'>August</option>
          <option value='9'>September</option>
          <option value='10'>October</option>
          <option value='11'>November</option>
          <option value='12'>December</option>
        </select>
      </div>
      {/* button */}
      <button>Search</button>
    </form>
  )
}

export default EventsSearch
