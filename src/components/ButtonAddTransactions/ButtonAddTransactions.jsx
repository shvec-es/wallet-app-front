import sprite from 'images/sprite.svg';
import { Button } from './ButtonAddTransactions.styled';

const ButtonAddTransactions = () => {
    return <Button>
        <svg width='20' height='20'>
            <use href={`${sprite}#plus-btn`} />
        </svg>
    </Button>
}

export default ButtonAddTransactions;