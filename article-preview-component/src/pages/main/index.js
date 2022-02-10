import React, { useState, useRef } from 'react'
import { MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md'

import Card from '../../components/Card'
import queryCards from '../../cardsBase'
import { Container } from './styled'

let actualCard = 0
export default function Main() {
  const [card, setCard] = useState(queryCards[actualCard])
  const mainRef = useRef()
  //  const actualCard = forwardRef()
  function delay(n) {
    return new Promise((resolve) => {
      setTimeout(resolve, n * 1000)
    })
  }

  const handleLeft = async () => {
    const delayTime = 0.4
    mainRef.current.style.animation = `card-left-out ${delayTime}s ease-out both`
    await delay(delayTime)
    actualCard = 1 - actualCard
    setCard(queryCards[actualCard])
    mainRef.current.style.animation = `card-right-in ${delayTime}s ease-in both`
  }

  const handleRight = async () => {
    const delayTime = 0.5
    mainRef.current.style.animation = `card-right-out ${delayTime}s ease-out both`
    await delay(delayTime)
    actualCard = 1 - actualCard
    setCard(queryCards[actualCard])
    mainRef.current.style.animation = `card-left-in ${delayTime}s ease-in both`
  }

  return (
    <Container>
      <nav>
        <MdArrowBackIosNew className='arrows' onClick={handleLeft} />
        <main ref={mainRef}>
          <Card card={card} />
        </main>
        <MdArrowForwardIos className='arrows' onClick={handleRight} />
      </nav>
    </Container>
  )
}
