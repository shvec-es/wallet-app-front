import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import Indicator from './indicator';
import icons from 'images/sprite.svg';
import {
  Button,
  Input,
  Label,
  Icon,
  Wrap,
  Form,
  Title,
  ErrMessage,
  ButtonLink,
} from './RegistrationPage.styled';

const RegistrationForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  };
  const onSubmit = ({ email, password, name }, { resetForm }) => {
    console.log(email, password, name);
    dispatch(authOperations.register({ email, password, name }));
    resetForm();
  };

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')

      .max(12, 'Password should be of maximum 12 characters length')
      .required('Password is required')
      .matches(
        /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/,
        'Password must be min 6 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase',
      ),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
    name: yup
      .string('Enter your name')
      .min(1, 'Name should be of minimum 1 characters length')
      .max(12, 'Name should be of maximum 12 characters length'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur
    >
      {({ values, handleSubmit, handleChange, errors }) => (
        <Form>
          <Wrap>
            <svg width="40" height="40">
              <use href={`${icons}#wallet`}></use>
            </svg>
            <Title>{t('app_name')}</Title>
          </Wrap>
          <div>
            <Label htmlFor="email">
              <Icon width="20" height="20">
                <use href={`${icons}#email`}></use>
              </Icon>
              <Input
                type="email"
                id="email"
                placeholder={t('email')}
                value={values.email}
                onChange={handleChange}
              />
              <ErrMessage>{errors.email}</ErrMessage>
            </Label>
          </div>

          <div>
            <Label htmlFor="password">
              <Icon width="20" height="20">
                <use href={`${icons}#lock`}></use>
              </Icon>
              <Input
                type="password"
                id="password"
                placeholder={t('pass')}
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              <ErrMessage>{errors.password}</ErrMessage>
            </Label>
          </div>
          <div>
            <Label htmlFor="confirmPassword">
              <Icon width="20" height="20" fill="currentColor">
                <use href={`${icons}#lock`}></use>
              </Icon>
              <Input
                name="confirmPassword"
                type="password"
                id="confirmPassword"
                placeholder={t('pass_confirm')}
                value={values.confirmPassword}
                onChange={handleChange}
              />
              <ErrMessage>{errors.confirmPassword}</ErrMessage>
              <Indicator value={values.password}></Indicator>
            </Label>
          </div>

          <div>
            <Label htmlFor="name">
              <Icon width="20" height="20" fill="currentColor">
                <use href={`${icons}#account`}></use>
              </Icon>
              <Input
                name="name"
                type="name"
                id="name"
                placeholder={t('name')}
                value={values.name}
                onChange={handleChange}
              />
              <ErrMessage>{errors.name}</ErrMessage>
            </Label>
          </div>
          <div>
            <Button type="submit" onClick={handleSubmit}>
              {t('sign up')}
            </Button>
            <ButtonLink>
              <Link to="/login">{t('sign in')}</Link>
            </ButtonLink>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default RegistrationForm;
