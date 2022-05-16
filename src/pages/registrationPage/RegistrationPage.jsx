import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
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
} from './RegistrationPage.styled';

const registrationPage = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  };
  const onSubmit = ({ email, password, name }, { resetForm }) => {
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
            <Title style={{ display: 'block' }}>Wallet</Title>
          </Wrap>
          <div>
            <Label htmlFor="email">
              <Icon width="20" height="20">
                <use href={`${icons}#email`}></use>
              </Icon>
              <Input
                type="email"
                id="email"
                placeholder="E-mail"
                value={values.email}
                onChange={handleChange}
              />
              <div style={{ color: 'red' }}>{errors.email}</div>
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
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              <div style={{ color: 'red' }}>{errors.password}</div>
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
                placeholder="Confirm password"
                value={values.confirmPassword}
                onChange={handleChange}
              />
              <div style={{ color: 'red' }}>{errors.confirmPassword}</div>
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
                placeholder="Your name"
                value={values.name}
                onChange={handleChange}
              />
              <div style={{ color: 'red' }}>{errors.name}</div>
            </Label>
          </div>
          <div>
            <Button type="submit" onClick={handleSubmit}>
              Registration
            </Button>
            <Button primary type="submit">
              LogIn
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default registrationPage;
