import { useFormik } from 'formik';
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
  ModalSelect,
  ModalInput,
  ModalButtonAdd,
  ModalButtonCancel,
} from './ModalAddTransaction.styled';
import sprite from 'images/sprite.svg';
import Checkbox from 'components/Checkbox';

const ModalAddTransaction = ({ closeModal: setModal }) => {
    const formik = useFormik({
        initialValues: {
            typeTransaction: false,
            sum: '0.00',
            date: Date.now(),
            description: '',
            category: '',
        },
        validationSchema: Yup.object({
            typeTransaction: Yup.boolean().required(),
            sum: Yup.string().required(),
            date: Yup.string().required(),
            description: Yup.string(),
            category: Yup.string(),
        }),
        onSubmit: values => {
            // const { typeTransaction, sum, date, description, category } = values;
 
            setModal(false);
        },
  });
    const { values: { typeTransaction, sum, date, description, category }, handleChange, handleSubmit } = formik;

  const handleCancel = () => {
    setModal(false);
    };

  return (
    <>
      <ModalBtn
        onClick={() => {
          setModal(false);
        }}
      >
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
        {!typeTransaction &&
            <ModalSelect name="category" value={category} onChange={handleChange}>
                <option value="" disabled>
                    Choose category
                </option>
                <option value="food">Food</option>
                <option value="car">Car</option>
                <option value="relax">Relax</option>
            </ModalSelect>}
          <ModalInput
            name="sum"
            value={sum}
            type="text"
            onChange={handleChange}
          />
          <ModalInput
            name="date"
            value={date}
            type="text"
            onChange={handleChange}
          />
          <ModalInput
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
