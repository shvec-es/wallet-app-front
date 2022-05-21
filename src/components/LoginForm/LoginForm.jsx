import React from 'react';

import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import { logIn } from '../../redux/auth/auth-operations';
import { getIsError } from 'redux/auth/auth-selectors';


import { Logo } from 'components';
import {
  FormWrapper,
  FormBg,
  Label,
  Input,
  Form,
  InputIcon,
  SignInBtn,
  SignUpBtn,
  ErrorText,
} from './LoginForm.styled';
import * as Yup from 'yup';
import icons from 'images/sprite.svg';
import { useTranslation } from 'react-i18next';

const LoginForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isError = useSelector(getIsError)


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string(t('email string'))
        .email(t('email error'))
        .required(t('Email is required')),
      password: Yup.string('Enter your password')
        .min(6, 'Password must be at least 6 characters long')
        .max(12)
        .required('Password is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      const { email, password } = values;
  
      
            // if (isError !== null) {
            //    console.log(isError);
            //       toast.error('Something went wrong! Please, try again')
            // }
          dispatch(logIn({ email, password }));
      resetForm();
    },
  });
  return (
    <FormWrapper>
 
      <FormBg>
        <Logo />
        <Form onSubmit={formik.handleSubmit}>
          <Label >
            <InputIcon width="24" height="24">
              <use href={`${icons}#email`}></use>
            </InputIcon>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t('email')}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />

            {formik.touched.email && formik.errors.email ? (
              <ErrorText>{formik.errors.email}</ErrorText>
            ) : null}
          </Label>

          <Label>
            <InputIcon width="24" height="24">
              <use href={`${icons}#lock`}></use>
            </InputIcon>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder={t('pass')}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              autoComplete="off"
            />
            {formik.touched.password && formik.errors.password ? (
              <ErrorText>{formik.errors.password}!</ErrorText>
            ) : null}
          </Label>

          <SignInBtn type="submit">{t('login')}</SignInBtn>
          <SignUpBtn>
            <NavLink to="/register">{t('register')}</NavLink>
          </SignUpBtn>
        </Form>
      </FormBg>
    </FormWrapper>
  );
};

export default LoginForm;
