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
import { useTranslation } from 'react-i18next';

const SelectCategory = ({ options, set }) => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const { t } = useTranslation();
    
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
            <SelectTitleText>{t('transaction_choose')}</SelectTitleText>
            <SelectIcon width="18" height="9">
              <use href={`${sprite}#check`} />
            </SelectIcon>
          </SelectTitle>
        )}
      </SelectButton>
      {open && (
        <SelectList>
          {options.map(({ name }) =>
            <SelectItem
              value={name}
              key={name}
              onClick={() => chooseItem(name)}
            >
              {name}
            </SelectItem>
          )}
        </SelectList>)}
    </SelectWrapper>
  );
};

export default SelectCategory;
