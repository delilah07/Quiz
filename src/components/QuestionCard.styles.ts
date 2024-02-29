import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2a1d64;
  padding: 10px;
  max-width: 60vw;
  border-radius: 20px;
  border: 2px solid #0085a3;
  box-shadow: 0px 5px 10px rgba(0, 0, 0.1);
  text-align: center;

  .card__answers {
    width: 100%;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease-in-out;
  width: 100%;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(90deg, #56ffa4, #59bc86 )'
        : !correct && userClicked
        ? 'linear-gradient(90deg, #ff5656, #c16868 )'
        : '#fff'};
    border: 3px solid #fff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0.1);
    border-radius: 10px;
  }
`;
