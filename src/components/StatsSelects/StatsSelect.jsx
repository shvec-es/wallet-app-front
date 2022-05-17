import { useState } from 'react';

import {
  OptionButton,
  DropdownWrapper,
  ToggleButton,
  DropdownOptions,
} from './StatsSelect.styled';

function StatsSelect({options, buttonTitle}) {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const dropDownToggle = () => {
    setOpen(prevState => !prevState);
  }

  return (
      <DropdownWrapper>
        <ToggleButton onClick={dropDownToggle}>{selectedValue? selectedValue : buttonTitle}</ToggleButton>
      {open && <DropdownOptions>
        {options.map(option => <OptionButton>{option}</OptionButton>)}
          
        </DropdownOptions>}
      </DropdownWrapper>
  );
}

export default StatsSelect;
