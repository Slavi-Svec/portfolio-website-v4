import React from 'react'
import Image from '../../components/Image/Image'
import Text from '../../components/Text/Text'
import AvatarLogo3 from '../../images/AvatarLogo3.png'
import laptopTemplate from '../../images/laptop-AAwebsite.png'
import ImacTemplate from '../../images/Imac-website.png'
import PhoneTemplate from '../../images/crypto-mac-20.png'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import './styles.css'

const WorkPage = () => {
  return (
    <>
      <section className="work-section">
        <section className="page-description">
          <Text text="Work" className="work-title" variant="h2" />
        </section>
      </section>
      <section className="page-description">
        <Image className="work-logo" src={AvatarLogo3} />
        <ProjectCard
          className="project-card-variant-one"
          src={laptopTemplate}
          href={'https://aanewtown.org/'}
          title="AA Newtown Website"
          description=""
        />
        <ProjectCard
          className="project-card-variant-two"
          src={ImacTemplate}
          href={'https://aanewtown.org/'}
          title="Newtown Soberfest 2021 Website"
          description=""
        />
        <ProjectCard
          className="project-card-variant-three"
          src={PhoneTemplate}
          href={'https://aanewtown.org/'}
          title="CryptoTracker.link"
          description=""
        />

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
      </section>
    </>
  )
}

export default WorkPage
