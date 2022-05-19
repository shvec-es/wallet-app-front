import { useState } from 'react';
import {
  SelectWrapper,
  SelectButton,
  SelectTitle,
  SelectItemText,
  SelectTitleText,
  SelectIcon,
  SelectList,
  SelectItem,
} from './SelectCategory.styled';
import sprite from 'images/sprite.svg';

const options = [
  'Basic expenses',
  'Food',
  'Car',
  'Self care',
  'Child care',
  'Household products',
  'Education',
];

const SelectCategory = ({ value, set }) => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const toggleList = () => {
    setOpen(prevState => !prevState);
  };

  const chooseItem = item => {
    setSelectedCategory(item);
    set(item);
    setOpen(false);
  };

  return (
    <SelectWrapper>
      <SelectButton type="button" onClick={toggleList}>
        {selectedCategory ? (
          <SelectItemText>{selectedCategory}</SelectItemText>
        ) : (
          <SelectTitle>
            <SelectTitleText>Choose category</SelectTitleText>
            <SelectIcon width="18" height="9">
              <use href={`${sprite}#check`} />
            </SelectIcon>
          </SelectTitle>
        )}
      </SelectButton>
      {open && (
        <SelectList>
          {options.map(item => (
            <SelectItem
              value={item}
              key={item}
              onClick={() => chooseItem(item)}
            >
              {item}
            </SelectItem>
          ))}
        </SelectList>
      )}
      {/* <input
        type="text"
        name="category"
        value={selectedCategory}
        onChange={()=>set(selectedCategory)}
        hidden
      /> */}
    </SelectWrapper>
  );
};

export default SelectCategory;
