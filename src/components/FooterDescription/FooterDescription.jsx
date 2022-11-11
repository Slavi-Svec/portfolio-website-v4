import React from "react";
import "./styles.css";
import Text from "../Text/Text";

const FooterDescription = () => (
  <>
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
  </>
);

export default FooterDescription;
