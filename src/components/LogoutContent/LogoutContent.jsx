import { TotalAmount } from 'components/StatsTable/StatsTable.styled';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logOut } from '../../redux/auth/auth-operations';
import { getIsError } from '../../redux/auth/auth-selectors';
import { useTranslation } from 'react-i18next';
import {
  ModalContainer,
  CloseBtn,
  Title,
  BtnContainer,
  ConfirmBtn,
  CancelBtn,
} from './LogoutContent.styled';

const LogoutModal = ({ setOpenModal }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isError = useSelector(getIsError);
  const handleClick = () => {
    if (isError) {
      toast.error('Something went wrong! Please, try again');
    }
    dispatch(logOut());
    setOpenModal(false);
  };
  return (
    <ModalContainer>
      <ToastContainer />
      <CloseBtn
        type="button"
        onClick={() => {
          setOpenModal(false);
        }}
      >
        X
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
