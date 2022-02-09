import React, { useState, useEffect } from 'react'

import Card from '../../components/Card'
import queryCards from '../../cardsBase'
import { Container } from './styled'

export default function Main() {
  const [cards, setCards] = useState(queryCards)

  useEffect(() => {
    setCards(queryCards)
  }, [])

  return (
    <Container>
      <main>
        <nav>Change de state</nav>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </main>
    </Container>
  )
}
