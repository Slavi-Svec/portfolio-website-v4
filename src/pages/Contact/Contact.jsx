import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import FooterDescription from "../../components/FooterDescription/FooterDescription";
import Image from "../../components/Image/Image";
import Text from "../../components/Text/Text";
import AvatarLogo2 from "../../images/AvatarLogo2.png";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./styles.css";

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
        <FooterDescription />
        <ContactForm />
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
