import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
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
  ModalInput,
  ModalInputComment,
  ModalButtonAdd,
  ModalButtonCancel,
  ErrorMesage,
} from './ModalAddTransaction.styled';
import sprite from 'images/sprite.svg';
import Checkbox from 'components/Checkbox';
import SelectCategory from 'components/SelectCategory';
import DateTime from 'helpers/DateTime';
import { operations } from 'redux/transactions/transactions-operations';
import { useTranslation } from 'react-i18next';

const ModalAddTransaction = ({ closeModal: setModal }) => {
  const [categ, setCateg] = useState('');
  const [dt, setDt] = useState(moment().format('DD.MM.YYYYY'));
  const dispatch = useDispatch();
  const { t } = useTranslation();

    const formik = useFormik({
        initialValues: {
            typeTransaction: false,
            sum: '',
            date: dt,
            description: '',
            category: categ,
        },
        validationSchema: Yup.object({
            typeTransaction: Yup.boolean().required(),
            sum: Yup.string().matches(/^\d+(\.\d\d)?$/, t('transaction_string')).required(t('sum_require')),
            date: Yup.string().required(t('date_require')),
            description: Yup.string(),
            category: Yup.string(),
        }),
        onSubmit: values => {
          values = { ...values, category: categ, date: dt, sum: +sum }
          dispatch(operations.addTransaction(values));
            console.log(values);
            setModal(false);
        },
  });

  const {
    values: { typeTransaction, sum, date, description, category },
    handleChange,
    handleSubmit,
  } = formik;

  const handleCancel = () => {
    setModal(false);
  };

  return (
    <>
      <ModalBtn type='button' onClick={handleCancel}>
        <svg width="16" height="16">
          <use href={`${sprite}#close`} />
        </svg>
      </ModalBtn>
      <ModalContainer>
        <ModalTitle>{t('transaction_add')}</ModalTitle>
        <ModalForm onSubmit={handleSubmit}>
        <CheckboxContainer>
            {typeTransaction ? <CheckboxTextPlus>{t('income')}</CheckboxTextPlus> : <CheckboxText>{t('income')}</CheckboxText>}
            <Checkbox value={typeTransaction} onChange={ handleChange}/>
            {typeTransaction ? <CheckboxText>{t('expense')}</CheckboxText> : <CheckboxTextMinus>{t('expense')}</CheckboxTextMinus>}
        </CheckboxContainer>
          {!typeTransaction && <SelectCategory value={category} values={formik.values} set={setCateg}><input
        type="text"
        name="category"
        value={categ}
        onChange={handleChange}
        hidden
      /></SelectCategory>}
          <ModalInputWrapper>
            <ModalInput
            name="sum"
            value={sum}
            type="number"
            onChange={handleChange}
            placeholder='0.00'
          />
          {formik.touched.sum && formik.errors.sum ? (
          <ErrorMesage>{formik.errors.sum}</ErrorMesage>
            ) : null}
            <DateTime date={date} setDt={setDt}/>
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
