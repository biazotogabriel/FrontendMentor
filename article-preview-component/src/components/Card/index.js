import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styled'
import CardLinks from '../CardLinks'

export default function Card({ card }) {
  return (
    <Container>
      <div
        className='image-container'
        style={{ backgroundImage: `url(${card.image})` }}
      />
      <div className='info-container'>
        <h2>{card.title}</h2>
        <p>{card.text}</p>
        <div>
          <img src={card.author.image} alt='profile' />
          <div className='name-date-container'>
            <span className='name'>{card.author.name}</span>
            <span className='date'>{card.date}</span>
          </div>
          <CardLinks links={card.author.links} />
        </div>
      </div>
    </Container>
  )
}

Card.propTypes = {
  card: PropTypes.instanceOf(Object).isRequired,
}
