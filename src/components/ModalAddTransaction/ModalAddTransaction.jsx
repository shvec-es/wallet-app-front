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
  ErrorMesage
} from './ModalAddTransaction.styled';
import sprite from 'images/sprite.svg';
import Checkbox from 'components/Checkbox';
import SelectCategory from 'components/SelectCategory';
import DateTime from 'helpers/DateTime';
import { operations } from 'redux/transactions/transactions-operations';

const ModalAddTransaction = ({ closeModal: setModal }) => {
  const [categ, setCateg] = useState('');
  const [dt, setDt] = useState(moment().format('DD.MM.YYYYY'));
  const dispatch = useDispatch();

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
            sum: Yup.string().matches(/^\d+(\.\d\d)?$/, 'Format is not correct').required('Sum is required'),
            date: Yup.string().required('Please choose a date'),
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
  const { values: { typeTransaction, sum, date, description, category }, handleChange, handleSubmit } = formik;
  
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
        <ModalTitle>Add transaction</ModalTitle>
        <ModalForm onSubmit={handleSubmit}>
        <CheckboxContainer>
            {typeTransaction ? <CheckboxTextPlus>Income</CheckboxTextPlus> : <CheckboxText>Income</CheckboxText>}
            <Checkbox value={typeTransaction} onChange={ handleChange}/>
            {typeTransaction ? <CheckboxText>Expense</CheckboxText> : <CheckboxTextMinus>Expense</CheckboxTextMinus>}
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
              autocomplete='off'
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
            placeholder="Add comment"
            onChange={handleChange}
          />
          <ModalButtonAdd type="submit">Add</ModalButtonAdd>
          <ModalButtonCancel type="button" onClick={handleCancel}>
            Cancel
          </ModalButtonCancel>
        </ModalForm>
      </ModalContainer>
    </>
  );
};

export default ModalAddTransaction;
