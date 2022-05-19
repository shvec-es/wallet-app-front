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

const SelectCategory = ({ value, set }) => {
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
          {t('transaction_options', { returnObjects: true }).map(item => (
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
