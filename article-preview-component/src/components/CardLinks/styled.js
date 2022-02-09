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
  background-color: ${colors.lightGrayishBlue};
  color: ${colors.desaturatedDarkBlue};
  border-radius: 50%;
  width: 34px;
  height: 34px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  &:focus {
    outline: none;
    background-color: ${colors.desaturatedDarkBlue};
    color: white;
    filter: brightness(1);
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
    z-index: 1;
    position: absolute;
    left: 50%;
    transform: translate(8px, 28px) rotate(45deg);
    width: 20px;
    height: 20px;
    background-color: ${colors.veryDarkGrayishBlue};
  }
`
