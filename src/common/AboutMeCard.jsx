import React from 'react'

function AboutMeCard({ src, h3, p }) {
  return (
    <a target="_blank">
                <img className="hover" src={src} alt={`${h3} logo`} />
                <h3>{h3}</h3>
                <p>{p}</p>
            </a>
  )
}

export default AboutMeCard