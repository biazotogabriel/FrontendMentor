import styled from 'styled-components'
import * as colors from '../../config/colors'

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  main {
    max-width: 775px;

    @keyframes card-left-out {
      from {
        transform: translateX(0) scale(1);
      }
      to {
        transform: translateX(-100vw) scale(0.3);
      }
    }

    @keyframes card-left-in {
      from {
        transform: translateX(-100vw) scale(0.3);
      }
      to {
        transform: translateX(0) scale(1);
      }
    }

    @keyframes card-right-out {
      from {
        transform: translateX(0) scale(1);
      }
      to {
        transform: translateX(+100vw) scale(0.3);
      }
    }

    @keyframes card-right-in {
      from {
        transform: translateX(+100vw) scale(0.3);
      }
      to {
        transform: translateX(0) scale(1);
      }
    }
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    .arrows {
      transition: all 300ms;
      color: ${colors.veryDarkGrayishBlue};
      background-color: ${colors.grayishBlue};
      border-radius: 50%;
      padding: 6px;
      min-width: 30px;
      height: 30px;
      position: relative;
      z-index: 1;
      margin: 0 4px;
      cursor: pointer;
      &:active {
        opacity: 0.5;
      }
      &:hover {
        filter: brightness(1.1);
      }
    }
  }
  @media (max-width: 700px) {
    align-items: flex-start;
    overflow-y: auto;
    nav {
      margin-top: 30px;
      .arrows {
        position: fixed;
        top: 0;
        margin: 0;
        width: 50%;
        border-radius: 0;

        &:nth-child(3) {
          transform: translateX(+50%);
        }

        &:nth-child(1) {
          transform: translateX(-50%);
        }
      }
    }
  }
`
