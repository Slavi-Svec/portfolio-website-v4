import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import FooterDescription from "../../components/FooterDescription/FooterDescription";
import Image from "../../components/Image/Image";
import Text from "../../components/Text/Text";
import heroImage from "../../images/city-hero-image.jpg";
import heroImageDark from "../../images/city-night.png";
import AvatarLogo from "../../images/AvatarLogo-1.png";
import AvatarLogoTwo from "../../images/AvatarLogo2.png";
import "./styles.css";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-container">
        <Text text="Im Slavi" className="about-title" variant="h2" />
        <Text
          text="a Web developer."
          className="about-profession"
          variant="h3"
        />
        <span className="emojis">🌒</span>
        <Image className="hero-image" src={heroImage} />
      </section>
      <section className="about-description">
        <Image className="about-description-logo" src={AvatarLogo} />
        <Text
          text="Hi, Im slavi"
          variant="h3"
          className="about-paragraph-title-intro"
        />
        <Text
          className="about-bio"
          text="I'm a web developer based in Sydney, Australia.
              Lover of all things Javascript, focusing on Front End Web Development."
          variant="p"
        />
        <section className="about-Work-details"></section>
        <Text text="What i can do" variant="h3" className="about-paragraph" />
        <Text
          text="I enjoy turning difficult problems into simple and intuitive solutions,
                            creating interesting and beautiful interfaces across web and mobile applications."
          className="about-info"
          variant="p"
        />
        <Text
          text=" My main focus is mobile-friendly responsive websites in ReactJS,
                     but  I'm always willing and eager to learn new skills and technologies for coding
                            stunning webpages."
          className="about-info"
          variant="p"
        />
        <Image className="about-description-logo" src={AvatarLogoTwo} />
        <Text
          text="And when I'm not coding..."
          variant="h3"
          className="about-paragraph-title"
        />
        <Text
          text="Always ready for an adventure traveling to many different types of destinations.
                               I Enjoy writing, fitness, drawing, blogging and into cryptocurrency."
          className="about-info"
          variant="p"
        />
        <FooterDescription />
      </section>
      <Footer />
    </>
  );
};

export default About;
