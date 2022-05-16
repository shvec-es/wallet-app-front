import { useState } from 'react';
import sprite from 'images/sprite.svg';

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

  const dropDownClose = () => {
    setOpen(false);
  }

  const onOptionClick = (value) => {
    setSelectedValue(value);
    dropDownToggle();
  };

  const onOutsideClick = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      dropDownClose();
    }
  }

  return (
    <DropdownWrapper onBlur={onOutsideClick}>
      <ToggleButton onClick={dropDownToggle}>
        {selectedValue ? selectedValue : buttonTitle}
        <ToggleIcon>
          <use href={`${sprite}#check`}/>
        </ToggleIcon>
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
