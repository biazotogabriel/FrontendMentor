import styled from 'styled-components'
import * as colors from '../../config/colors'

export const Container = styled.div`
  margin: 20px;
  display: flex;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  .image-container {
    border-radius: 10px 0 0 10px;
    min-width: 38%;
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: center left;
  }

  .info-container {
    border-radius: 0 10px 10px 0;
    padding: 30px 40px;
    background-color: white;

    & > h2 {
      color: ${colors.veryDarkGrayishBlue};
      font-size: 1.6rem;
      font-weight: 700;
      text-align: left;
    }

    & > p {
      margin-top: 14px;
      color: ${colors.desaturatedDarkBlue};
      font-size: 1rem;
      text-align: justify;
      line-height: 1.5rem;
    }

    & > div {
      margin-top: 18px;
      display: flex;
      column-gap: 15px;
      justify-content: space-between;
      align-items: center;

      & > img {
        width: 40px;
        border-radius: 50%;
      }
      & > .name-date-container {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        row-gap: 1px;
        .name {
          color: ${colors.veryDarkGrayishBlue};
          font-weight: 700;
          font-size: 1.1rem;
        }
        .date {
          color: ${colors.grayishBlue};
          font-weight: 500;
          font-size: 1rem;
        }
      }
    }
  }
  @media (max-width: 700px) {
    flex-direction: column;
    .image-container {
      min-height: 230px;
      background-size: cover;
      background-position: top center;
      border-radius: 10px 10px 0 0;
    }
    .info-container {
      overflow: hidden;
      padding: 35px;
      padding-bottom: 15px;
      border-radius: 0 0 10px 10px;

      & > h2 {
        font-size: 1.3rem;
      }

      & > p {
        margin-bottom: 30px;
      }
    }
  }
`
