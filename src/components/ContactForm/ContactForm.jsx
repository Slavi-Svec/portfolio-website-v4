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
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_autoresponse"
          value="Thanks for getting in touch, I will get back to you ASAP"
        />
        <input
          type="hidden"
          name="_next"
          value="https://www.slavisvec.com/contact"
        />
        <input
          type="hidden"
          name="_subject"
          value="Hi, Someone has contacted you"
        />
        <input
          className="form-field"
          type="text"
          name="name"
          placeholder="Enter an name"
          required
        />
        <input
          className="form-field"
          type="text"
          name="message"
          placeholder="write your message here"
          required
        />
        <input
          className="form-field"
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />
        <button className="form-button" type="submit">
          Send
        </button>
      </form>
    </div>
  )
}

export default ContactForm
