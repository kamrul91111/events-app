import React, { useRef } from 'react'

const login = () => {
  const emailRef = useRef()
  const feedbackRef = useRef()

  const handler = e => {
    e.preventDefault() //prevent default loading

    // grab input values
    const email = emailRef.current.value
    const feedback = feedbackRef.current.value

    const reqBody = {
      email: email,
      feedback: feedback
    }

    // send data to feedback api
    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  return (
    <div>
      <h3>Login Here</h3>
      <form onSubmit={handler}>
        <div>
          <label>Email</label>
          <input type='email' id='email' ref={emailRef} />
        </div>
        <div>
          <label>Feedback</label>
          <textarea rows='5' id='feedback' ref={feedbackRef} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default login
