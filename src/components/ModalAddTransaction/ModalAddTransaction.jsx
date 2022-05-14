import { ModalContainer, ModalBtn, ModalTitle } from "./ModalAddTransaction.styled";
import sprite from 'images/sprite.svg';

const ModalAddTransaction = ({closeModal: setModal}) => {
    return <>
        < ModalBtn onClick={() => {
                setModal(false);
                }}>
                <svg width='16' height='16'>
                    <use href={`${sprite}#close`} />
                </svg>
        </ModalBtn>
        <ModalContainer>
        <ModalTitle>Add transaction</ModalTitle>
    </ModalContainer>
    </>
}

export default ModalAddTransaction;