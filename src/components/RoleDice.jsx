import styled from 'styled-components';

const RoleDice = ({ currentDice, roleDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.webp`} alt={`dice ${currentDice}`} />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};
export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    width: 100%;
    display: flex;
    justify-content: center;
    cursor: pointer;

    & img {
      width: 100%;
      max-width: 300px;
    }
  }

  p {
    text-align: center;
    font-size: 24px;
  }
`;
