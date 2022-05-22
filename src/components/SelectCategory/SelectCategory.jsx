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
  const { t, i18n } = useTranslation();
  const currentLng = i18n.language.slice(0, 2);  

  const toggleList = () => {
    setOpen(prevState => !prevState);
  };

  const chooseItem = item => {
    if (currentLng === 'en') {
      setSelectedCategory(item.name)
    } else {
      setSelectedCategory(item.nameUA);
    }
    set(item.name);
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
          {options.map((item) =>
            <SelectItem
              value={item.name}
              key={item.name}
              onClick={() => chooseItem(item)}
            >
              {currentLng === 'en' ? item.name : item.nameUA}
            </SelectItem>
          )}
        </SelectList>)}
    </SelectWrapper>
  );
};

export default SelectCategory;
