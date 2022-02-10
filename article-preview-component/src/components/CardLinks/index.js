import React, { useEffect, useRef, useState } from 'react'
import { RiShareForwardFill } from 'react-icons/ri'
import {
  ImFacebook2,
  ImTwitter,
  ImPinterest,
  ImInstagram,
} from 'react-icons/im'
import PropTypes from 'prop-types'
import { Container, Links } from './styled'

export default function CardLinks({ links }) {
  const [showLinks, setShowLinks] = useState('none')
  // const handleFocus = () => {

  // }

  const linksRef = useRef()
  const [fixXLinks, setfixXLinks] = useState(0)

  function adjustPositionXLinks() {
    const positionRight = linksRef.current.getBoundingClientRect().right + 25
    if (
      positionRight > window.innerWidth &&
      positionRight > 0 &&
      !fixXLinks &&
      window.innerWidth > 700
    )
      setfixXLinks(window.innerWidth - positionRight)
    if (fixXLinks && window.innerWidth <= 700) setfixXLinks(0)
  }

  useEffect(() => {
    adjustPositionXLinks()
  })

  const handleFocus = () => {
    linksRef.current.style.animation = 'in 500ms both'
    setShowLinks('flex')
  }

  const handleBlur = () => {
    linksRef.current.style.animation = 'out 500ms both'
    setShowLinks('none')
  }

  return (
    <Container tabIndex={0} onFocus={handleFocus} onBlur={handleBlur}>
      <RiShareForwardFill size={20} className='share' />

      <Links
        ref={linksRef}
        style={{
          display: showLinks,
          left: `${fixXLinks}px`,
        }}
      >
        <div>SHARE</div>
        {links.map((link) => {
          if (link.indexOf('facebook') > -1)
            return <ImFacebook2 key='facebook' className='link' />
          if (link.indexOf('twitter') > -1)
            return <ImTwitter key='tuitter' className='link' />
          if (link.indexOf('pinterest') > -1)
            return <ImPinterest key='pinterest' className='link' />
          if (link.indexOf('instagram') > -1)
            return <ImInstagram key='instagram' className='link' />
          return null
        })}
        <div
          className='rect'
          style={{
            transform: `translate(${-fixXLinks - 10}px, 28px) rotate(45deg)`,
          }}
        />
      </Links>
    </Container>
  )
}

CardLinks.propTypes = {
  links: PropTypes.instanceOf(Array).isRequired,
}
