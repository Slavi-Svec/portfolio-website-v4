import React from 'react'

const Button = ({ heading, className, onClick }) => (
  <button className={className} onClick={onClick}>
    {heading}
  </button>
)

export default Button
