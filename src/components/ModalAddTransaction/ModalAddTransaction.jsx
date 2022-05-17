import { useFormik } from 'formik';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
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
  ErrorMesage
} from './ModalAddTransaction.styled';
import sprite from 'images/sprite.svg';
import Checkbox from 'components/Checkbox';
import SelectCategory from 'components/SelectCategory';

const ModalAddTransaction = ({ closeModal: setModal }) => {
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
            sum: Yup.string().matches(/^\d+(\.\d\d)?$/, 'Format is not correct').required('Sum is required'),
            date: Yup.string().required('Please choose a date'),
            description: Yup.string(),
            category: Yup.string(),
        }),
        onSubmit: values => {
            // const { typeTransaction, sum, date, description, category } = values;
            console.log(values);
            setModal(false);
        },
  });
    const { values: { typeTransaction, sum, date, description, category }, handleChange, handleSubmit } = formik;

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
        <ModalTitle>Add transaction</ModalTitle>
        <ModalForm onSubmit={handleSubmit}>
        <CheckboxContainer>
            {typeTransaction ? <CheckboxTextPlus>Income</CheckboxTextPlus> : <CheckboxText>Income</CheckboxText>}
            <Checkbox value={typeTransaction} onChange={ handleChange}/>
            {typeTransaction ? <CheckboxText>Expense</CheckboxText> : <CheckboxTextMinus>Expense</CheckboxTextMinus>}
        </CheckboxContainer>
          {!typeTransaction && <SelectCategory value={category} onChange={handleChange}/>}
          <ModalInputWrapper>
            <ModalInput
            name="sum"
            value={sum}
            type="text"
            onChange={handleChange}
            placeholder='0.00'
          />
          {formik.touched.sum && formik.errors.sum ? (
          <ErrorMesage>{formik.errors.sum}</ErrorMesage>
            ) : null}
          <Datetime renderInput={renderInput} timeFormat={false}/>  
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
