import { useFormik } from 'formik';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
// import moment from 'moment';
import * as Yup from 'yup';
import {
  ModalContainer,
  ModalBtn,
  ModalTitle,
  ModalForm,
  CheckboxContainer,
  CheckboxText,
  CheckboxTextPlus,
  CheckboxTextMinus,
  ModalInputWrapper,
  DateInput,
  ModalInput,
  DateIcon,
  ModalInputComment,
  ModalButtonAdd,
  ModalButtonCancel,
  ErrorMesage,
} from './ModalAddTransaction.styled';
import sprite from 'images/sprite.svg';
import Checkbox from 'components/Checkbox';
import SelectCategory from 'components/SelectCategory';
import { useTranslation } from 'react-i18next';

const ModalAddTransaction = ({ closeModal: setModal }) => {
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      typeTransaction: false,
      sum: '',
      date: '',
      description: '',
      category: '',
    },
    validationSchema: Yup.object({
      typeTransaction: Yup.boolean().required(),
      sum: Yup.string()
        .matches(/^\d+(\.\d\d)?$/, t('transaction_string'))
        .required(t('sum_require')),
      date: Yup.string().required(t('date_require')),
      description: Yup.string(),
      category: Yup.string(),
    }),
    onSubmit: values => {
      // const { typeTransaction, sum, date, description, category } = values;
      console.log(values);
      setModal(false);
    },
  });
  const {
    values: { typeTransaction, sum, date, description, category },
    handleChange,
    handleSubmit,
  } = formik;

  const renderInput = (props, openCalendar, closeCalendar) => {
    return (
      <DateInput>
        <ModalInput
          {...props}
          // name="date"
          // value={props.value}
          // type="text"
          // onChange={handleChange}
          // placeholder={moment().format('DD.MM.YYYY')}
        />
        <DateIcon onClick={openCalendar}>
          <svg width="24" height="24">
            <use href={`${sprite}#date`} />
          </svg>
        </DateIcon>
      </DateInput>
    );
  };
  const handleCancel = () => {
    setModal(false);
  };

  return (
    <>
      <ModalBtn onClick={handleCancel}>
        <svg width="16" height="16">
          <use href={`${sprite}#close`} />
        </svg>
      </ModalBtn>
      <ModalContainer>
        <ModalTitle>{t('transaction_add')}</ModalTitle>
        <ModalForm onSubmit={handleSubmit}>
          <CheckboxContainer>
            {typeTransaction ? (
              <CheckboxTextPlus>{t('income')}</CheckboxTextPlus>
            ) : (
              <CheckboxText>{t('income')}</CheckboxText>
            )}
            <Checkbox value={typeTransaction} onChange={handleChange} />
            {typeTransaction ? (
              <CheckboxText>{t('expense')}</CheckboxText>
            ) : (
              <CheckboxTextMinus>{t('expense')}</CheckboxTextMinus>
            )}
          </CheckboxContainer>
          {!typeTransaction && (
            <SelectCategory value={category} onChange={handleChange} />
          )}
          <ModalInputWrapper>
            <ModalInput
              name="sum"
              value={sum}
              type="text"
              onChange={handleChange}
              placeholder="0.00"
            />
            {formik.touched.sum && formik.errors.sum ? (
              <ErrorMesage>{formik.errors.sum}</ErrorMesage>
            ) : null}
            <Datetime renderInput={renderInput} timeFormat={false} />
            {formik.touched.date && formik.errors.date ? (
              <ErrorMesage>{formik.errors.date}</ErrorMesage>
            ) : null}
          </ModalInputWrapper>

          <ModalInputComment
            name="description"
            value={description}
            type="text"
            placeholder={t('description')}
            onChange={handleChange}
          />
          <ModalButtonAdd type="submit">{t('add')}</ModalButtonAdd>
          <ModalButtonCancel type="button" onClick={handleCancel}>
            {t('cancel')}
          </ModalButtonCancel>
        </ModalForm>
      </ModalContainer>
    </>
  );
};

export default ModalAddTransaction;
