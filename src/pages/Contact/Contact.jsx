import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Image from '../../components/Image/Image'
import Text from '../../components/Text/Text'
import AvatarLogo2 from '../../images/AvatarLogo2.png'
import ContactForm from '../../components/ContactForm/ContactForm'
import './styles.css'

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <section className="work-section">
        <section className="page-description">
          <Text text="Contact" className="work-title" variant="h2" />
        </section>
      </section>
      <section className="page-description">
        <Image className="contact-logo" src={AvatarLogo2} />
        <Text text="I can help." className="about-help" variant="h2" />
        <Text
          text="Want to work together? I’d love to hear from you."
          className="about-work-together"
          variant="h3"
        />
        <Text
          text="I’m happy to collaborate on projects so if you require help on some upcoming work, or just want to say hi, than get in touch."
          className="about-contacting"
          variant="p"
        />
        <ContactForm />
      </section>
      <Footer />
    </>
  )
}

export default ContactPage
