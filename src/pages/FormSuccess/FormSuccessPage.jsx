import React from 'react'
import Button from '../../components/Button/Button'
import Character from '../../images/form-logo-1.png'
// import Text from '../../components/Text/Text'
import Image from '../../components/Image/Image'
import './styles.css'

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
          className="success-buton"
          onClick={() => window.open('https://www.slavisvec.com/')}
        />
      </div>
    </section>
  )
}

export default FormSuccessPage
