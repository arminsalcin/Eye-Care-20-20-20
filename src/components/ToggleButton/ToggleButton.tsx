import React from 'react';
import {
  ButtonContainer,
  CheckBoxTitle,
  CheckBox,
  CheckBoxLabel,
} from './styleToggleButton';

interface IToggleButtonProps {
  isOn?: boolean | undefined;
  handleToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const ToggleButton: React.FC<IToggleButtonProps> = ({
  isOn,
  handleToggle,
  label,
}) => {
  return (
    <ButtonContainer>
      <CheckBox
        id="checkbox"
        type="checkbox"
        checked={isOn}
        onChange={handleToggle}
      />
      <CheckBoxLabel htmlFor="checkbox" />
      <CheckBoxTitle>{label}</CheckBoxTitle>
    </ButtonContainer>
  );
};

export default ToggleButton;
