import sprite from 'images/sprite.svg';
import { Button } from './ButtonPlus.styled';

const ButonPlus = ({ setModal }) => {
  return (
    <Button
      onClick={() => {
        setModal(true);
      }}
    >
      <svg width="20" height="20">
        <use href={`${sprite}#plus-btn`} />
      </svg>
    </Button>
  );
};

export default ButonPlus;
