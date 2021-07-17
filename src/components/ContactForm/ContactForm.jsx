import React from 'react'
import './styles.css'

const ContactForm = () => {
  return (
    <div className="form-container">
      <form
        className="form-submit"
        action="https://formsubmit.co/slavi.svec@gmail.com"
        method="POST"
      >
        <input
          type="hidden"
          name="_next"
          value="http://localhost:3002/contact"
        />
        <input
          type="hidden"
          name="_subject"
          value="Hi, Someone has contacted you"
        />
        <input type="text" name="name" placeholder="Enter an name" required />
        <input
          type="text"
          name="message"
          placeholder="write your message here"
          required
        />
        <input type="email" name="email" placeholder="Email Address" required />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default ContactForm
