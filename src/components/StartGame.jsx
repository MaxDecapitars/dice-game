import styled from 'styled-components';
import { Button } from '../styled/Button';

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.webp" alt="Dice Game" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 70px 16px;
  max-width: 1180px;
  min-height: 100vh;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    flex-basis: 50%;

    & img {
      width: 300px;
    }

    & h1 {
      font-size: 48px;
      text-align: center;
    }
  }

  @media screen and (min-width: 930px) {
    flex-direction: row;

    div {
      & h1 {
        font-size: 96px;
        white-space: nowrap;
        align-self: flex-start;
      }

      & button {
        align-self: flex-start;
      }
    }
  }
`;
