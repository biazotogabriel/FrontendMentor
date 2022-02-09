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
  const [showLinks, setShowLinks] = useState(0)
  const handleFocus = () => {
    setShowLinks((state) => (state === 0 ? 1 : 0))
  }

  const linksRef = useRef()
  const [fixXLinks, setfixXLinks] = useState(0)

  function adjustPositionXLinks() {
    const positionRight = linksRef.current.getBoundingClientRect().right + 25
    if (positionRight > window.innerWidth && positionRight > 0 && !fixXLinks)
      setfixXLinks(window.innerWidth - positionRight)
  }

  useEffect(() => {
    adjustPositionXLinks()
  })

  return (
    <Container tabIndex={0} onFocus={handleFocus} onBlur={handleFocus}>
      <RiShareForwardFill size={20} className='share' />

      <Links
        ref={linksRef}
        style={{
          opacity: showLinks,
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
            transform: `translate(${-fixXLinks + 8}px, 28px) rotate(45deg)`,
          }}
        />
      </Links>
    </Container>
  )
}
//
CardLinks.propTypes = {
  links: PropTypes.instanceOf(Array).isRequired,
}
