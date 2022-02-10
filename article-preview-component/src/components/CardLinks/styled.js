import styled from 'styled-components'
import * as colors from '../../config/colors'

export const Container = styled.div`
  transition: all 300ms;
  flex-grow: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 0;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  &:focus .share{
    outline: none;
    background-color: ${colors.veryDarkGrayishBlue};
    color: white;
    filter: brightness(1);
  }

  .share {
    transition: all 300ms;
    width: 34px;
    height: 34px;
    padding: 5px;
    background-color: ${colors.lightGrayishBlue};
    color: ${colors.desaturatedDarkBlue};
    border-radius: 50%;

  }
  @media (max-width: 700px) {
    &:focus .share{
      background-color: ${colors.veryDarkGrayishBlue};
      color: white;
    }
    .share {
      z-index: 1;
      &:focus {
    }
  }
`

export const Links = styled.div`
  transition: all 300ms;
  position: absolute;
  left: 0;
  opacity: 0;
  display: flex;
  align-items: center;
  column-gap: 17px;
  background-color: ${colors.veryDarkGrayishBlue};
  padding: 17px 40px;
  color: ${colors.grayishBlue};
  letter-spacing: 5px;
  border-radius: 10px;
  box-shadow: 0 5px 10px -3px rgba(0, 0, 0, 0.5);
  transform: translate(-50%, -85px);

  @keyframes in {
    from {
      display; none;
      opacity: 0;
    }
    to {
      display; flex;
      opacity: 1;
    }
  }
  @keyframes out {
    from {
      display; flex;
      opacity: 1;
    }
    to {
      opacity: 0;
      display; none;
    }
  }

  & > .link {
    transition: all 300ms;
    cursor: pointer;
    color: ${colors.grayishBlue};
    width: auto;
    height: 22px;
    &:hover {
      color: white;
    }
  }

  & > .rect {
    content: '';
    z-index: 2;
    position: absolute;
    left: 50%;
    width: 20px;
    height: 20px;
    background-color: ${colors.veryDarkGrayishBlue};
  }
  @media (max-width: 700px) {
    width: calc(100vw - 26px);
    transform: translate(calc(-100% + 48px), 0);
    box-shadow: none;
    border-radius: 0;
    height: 70px;
    .rect {
      display: none;
    }
  }
`
