import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import Indicator from './indicator';
import icons from 'images/sprite.svg';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

/**
 * LoginFormikComponents Component
 */
const Button = styled.button`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  display: inline-block;
  color: #4a56e2;
  width: 280px;
  height: 50px;
  padding: 13px 20px;
  border: 1px solid #4a56e2;
  border-radius: 20px;
  display: block;
  cursor: pointer;
  background: #fff;
  margin-bottom: ${props => (props.primary ? '0' : '20px')};
  :hover {
    color: #fff;
    background: var(--color-secondary);
  }
`;
const Input = styled.input`
  box-sizing: border-box;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  padding-left: 40px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #e0e0e0;
`;
const Label = styled.label`
  position: relative;
  width: 280px;
  height: 32px;
  color: #bdbdbd;
  margin-bottom: 40px;
`;

const Icon = styled('svg')`
  position: absolute;
  left: 10px;
  top: 4px;
`;
const Wrap = styled('div')`
  display: flex;
  width: 120px;
  height: 30px;
  align-items: center;
  justify-content: space-between;
  margin: 0 80px 60px 80px;
`;
const Forma = styled('div')`
  box-sizing: border-box;
  width: 320px;
  height: 568px;
  padding: 32px 20px 36px 20px;
`;
const Title = styled('h1')`
  font-size: 22.5px;
  line-height: 33.75px;
`;
const RegistrationPage = () => {
  const { t } = useTranslation();
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  };
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  //   const validationSchema = yup.object({
  //     email: yup
  //       .string()
  //       .email('Please enter a valid email address')
  //       .required('Email field is required'),
  //     password: yup.string().required('Password field is required'),
  //   });
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
        <Forma>
          <Wrap>
            <svg style={{ display: 'block' }} width="40" height="40">
              <use href={`${icons}#wallet`}></use>
            </svg>
            <Title style={{ display: 'block' }}>{t('app_name')}</Title>
          </Wrap>
          <div>
            <Label htmlFor="email" style={{ display: 'block' }}>
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
              <div style={{ color: 'red' }}>{errors.email}</div>
            </Label>
          </div>

          <div>
            <Label htmlFor="password" style={{ display: 'block' }}>
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
              <div style={{ color: 'red' }}>{errors.password}</div>
            </Label>
          </div>
          <div>
            <Label htmlFor="confirmPassword" style={{ display: 'block' }}>
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
              <div style={{ color: 'red' }}>{errors.confirmPassword}</div>
              <Indicator value={values.password}></Indicator>
            </Label>
          </div>

          <div>
            <Label htmlFor="name" style={{ display: 'block' }}>
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
              <div style={{ color: 'red' }}>{errors.name}</div>
            </Label>
          </div>
          <div>
            <Button
              type="submit"
              onClick={handleSubmit}
              style={{ display: 'block' }}
            >
              {t('register')}
            </Button>
            <Button primary type="submit" style={{ display: 'block' }}>
              {t('login')}
            </Button>
          </div>
        </Forma>
      )}
    </Formik>
  );
};
export default RegistrationPage;
