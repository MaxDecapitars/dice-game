import styled from 'styled-components';

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
  }

  p {
    margin: 0 auto;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
  }

  @media screen and (min-width: 400px) {
    .flex {
      flex-wrap: nowrap;
    }

    p {
      margin: 0;
    }
  }

  .error {
    color: red;
  }
`;

const Box = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  background-color: ${({ isSelected }) => (isSelected ? 'black' : 'white')};
  color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
  cursor: default;

  @media screen and (min-width: 600px) {
    height: 72px;
    width: 72px;
    font-size: 24px;
    font-weight: 700;
  }
`;

const arrNumber = [1, 2, 3, 4, 5, 6];

const NumberSelector = ({ error, setError, selectedNumber, setSelectedNumber }) => {
  const numberSelectorHandler = (number) => {
    setSelectedNumber(number);
    setError('');
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((number, i) => (
          <Box
            isSelected={number === selectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(number)}>
            {number}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;
