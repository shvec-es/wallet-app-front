import {
  CheckboxWrapper,
  CheckboxInput,
  CheckboxLabel,
  CheckboxButtonPlus,
  CheckboxButtonMinus,
} from './Checkbox.styled';
import sprite from 'images/sprite.svg';

const Checkbox = ({ value, onChange: handleChange }) => {
  return (
    <CheckboxWrapper>
      <CheckboxInput
        name="typeTransaction"
        type="checkbox"
        checked={value}
        id={`type-transaction`}
        onChange={handleChange}
      />
      <CheckboxLabel htmlFor={`type-transaction`} aria-hidden="true">
        {value ? (
          <CheckboxButtonPlus aria-hidden="true">
            <svg width="20" height="20">
              <use href={`${sprite}#plus-btn`} />
            </svg>
          </CheckboxButtonPlus>
        ) : (
          <CheckboxButtonMinus aria-hidden="true">
            <svg width="20" height="2">
              <use href={`${sprite}#minus-btn`} />
            </svg>
          </CheckboxButtonMinus>
        )}
      </CheckboxLabel>
    </CheckboxWrapper>
  );
};

export default Checkbox;
