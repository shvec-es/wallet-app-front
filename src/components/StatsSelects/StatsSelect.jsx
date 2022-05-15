import { useState } from 'react';

import {
  SelectsWrapper,
  OptionButton,
  DropdownWrapper,
  ToggleButton,
  DropdownOptions,
  ToggleIcon,
} from './StatsSelect.styled';

function StatsSelect({ options, buttonTitle }) {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const dropDownToggle = () => {
    setOpen(prevState => !prevState);
  };

  const onOptionClick = (value) => {
    setSelectedValue(value);
    dropDownToggle();
  };

  return (
    <DropdownWrapper>
      <ToggleButton onClick={dropDownToggle}>
        {selectedValue ? selectedValue : buttonTitle}
      </ToggleButton>
      {open && (
        <DropdownOptions>
          {options.map(option => (
            <OptionButton onClick={() => onOptionClick(option)} key={option}>{option}</OptionButton>
          ))}
        </DropdownOptions>
      )}
    </DropdownWrapper>
  );
}

export default StatsSelect;
