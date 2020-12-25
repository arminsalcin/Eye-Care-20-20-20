import styled from 'styled-components';

const ButtonContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
`;
const CheckBoxTitle = styled.p`
  position: absolute;
  bottom: -30px;
  font-size: 1em;
  font-weight: 200;
  margin: auto;
  text-align: center;
  left: 0;
  right: 0;
`;

const CheckBoxLabel = styled.label`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 175px;
  height: 85px;
  border-radius: 100px;
  background: transparent;
  border: solid 2px white;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    margin: 8px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked + ${CheckBoxLabel} {
    background: #fff;
    mix-blend-mode: hard-light;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 64px;
      height: 64px;
      margin-left: 100px;
      transition: 0.2s;
      background-color: grey;
    }
  }
`;

export { ButtonContainer, CheckBoxTitle, CheckBox, CheckBoxLabel };
