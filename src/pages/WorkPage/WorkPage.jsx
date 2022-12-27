import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import FooterDescription from "../../components/FooterDescription/FooterDescription";
import Image from "../../components/Image/Image";
import Text from "../../components/Text/Text";
import AvatarLogo3 from "../../images/AvatarLogo3.png";
import Pen from "./pen.png";
import laptopTemplate from "../../images/laptop-AAwebsite.png";
import ImacTemplate from "../../images/Imac-website.png";
import PhoneTemplate from "../../images/crypto-mac-20.png";
import ProjectFour from "../../images/mac4.png";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./styles.css";

const WorkPage = () => {
  return (
    <>
      <Navbar />
      <section className="work-section">
        <section className="page-description">
          <Text text="Work" className="work-title" variant="h2" />
          <Image className="pen-logo" src={Pen} />
        </section>
      </section>
      <section className="page-description">
        <Image className="work-logo" src={AvatarLogo3} />
        <ProjectCard
          className="project-card-variant-one"
          src={laptopTemplate}
          href={"https://aanewtown.org/"}
          title="AA Newtown Website"
          description=""
        />
        <ProjectCard
          className="project-card-variant-two"
          src={ImacTemplate}
          href={"https://www.newtownsoberfest.org/"}
          title="Newtown Soberfest 2021 Website"
          description=""
        />
        <ProjectCard
          className="project-card-variant-three"
          src={PhoneTemplate}
          href={"https://www.cryptotracker.link/"}
          title="CryptoTracker.link"
          description=""
        />
        <ProjectCard
          className="project-card-variant-four"
          src={ProjectFour}
          href={"https://www.professorfrugalologist.com/"}
          title="Professor Frugalologist"
          description=""
        />
        <FooterDescription />
      </section>
      <Footer />
    </>
  );
};

export default WorkPage;
