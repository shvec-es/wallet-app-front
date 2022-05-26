import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { useTranslation } from 'react-i18next';
import icons from 'images/sprite.svg';
import {
  ModalContainer,
  CloseBtn,
  CloseIcon,
  Title,
  BtnContainer,
  ConfirmBtn,
  CancelBtn,
} from './LogoutContent.styled';

const LogoutModal = ({ setOpenModal }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleClick = () => {
    dispatch(logOut());
    setOpenModal(false);
  };

  return (
    <ModalContainer>
      <CloseBtn
        type="button"
        onClick={() => {
          setOpenModal(false);
        }}
      >
        <CloseIcon>
          <use href={`${icons}#close`} />
        </CloseIcon>
      </CloseBtn>

      <Title>{t('logout_sure')}?</Title>

      <BtnContainer>
        <ConfirmBtn type="button" onClick={handleClick}>
          {t('ok')}
        </ConfirmBtn>
        <CancelBtn
          type="button"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          {t('cancel')}
        </CancelBtn>
      </BtnContainer>
    </ModalContainer>
  );
};

export default LogoutModal;
