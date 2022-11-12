import React from "react";
import Button from "../../components/Button/Button";
import Character from "../../images/form-logo-1.png";
import Image from "../../components/Image/Image";
import "./styles.css";

const FormSuccessPage = () => {
  return (
    <section className="form-success-body">
      <div className="form-success-container">
        <div className="success-message">
          Hi, thanks for getting in contact, I will respond to you ASAP.
        </div>
        <Image className="success-character" src={Character} />
        <Button
          heading="Return Home"
          className="success-button"
          onClick={() => window.open("https://www.slavisvec.com/", "_self")}
        />
      </div>
    </section>
  );
};

export default FormSuccessPage;
