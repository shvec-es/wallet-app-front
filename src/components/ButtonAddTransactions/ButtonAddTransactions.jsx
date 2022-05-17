import { useState } from 'react';
import sprite from 'images/sprite.svg';
import { Button } from './ButtonAddTransactions.styled';
import ModalWindow from 'components/ModalWindow';
import ModalAddTransaction from 'components/ModalAddTransaction';
// import ButonPlus from 'components/ButtonPlus';

const ButtonAddTransactions = () => {
    const [isModalAddTransactionOpen, setIsModalAddTransactionOpen] = useState(false);

    return (
        <>
            {isModalAddTransactionOpen && (
                <ModalWindow closeModal={setIsModalAddTransactionOpen}>
                    <ModalAddTransaction closeModal={setIsModalAddTransactionOpen}/>
                </ModalWindow>)
            }
            {/* <ButonPlus setModal={setIsModalAddTransactionOpen}/> */}
            < Button onClick={() => {
                setIsModalAddTransactionOpen(true);
                }}>
                <svg width='20' height='20'>
                    <use href={`${sprite}#plus-btn`} />
                </svg>
            </Button>
        </>
        
    )
}

export default ButtonAddTransactions;