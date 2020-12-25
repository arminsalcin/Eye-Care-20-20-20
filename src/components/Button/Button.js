import styled from 'styled-components';

const Button = styled.button`
  width: 85px;
  height: 85px;
  background: transparent;
  border-radius: 100%;
  text-decoration: none;
  outline: none;
  border: solid 2px white;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.2, 1.2);
    -webkit-transform: scale(1.2, 1.2);
    -moz-transform: scale(1.2, 1.2);
  }
`;

export default Button;
