import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import { logIn } from '../../redux/auth/auth-operations';
import * as Yup from 'yup';
import icons from 'images/sprite.svg';
import { useTranslation } from 'react-i18next';

const LoginForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string('Enter your email')
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string('Enter your password')
        .min(6, 'Password must be at least 6 characters long')
        .max(12)
        .required('Password is required'),
    }),

    onSubmit: (values, { resetForm }) => {
      const { email, password } = values;
      dispatch(logIn(email, password));

      console.log('Form data:', values);
      resetForm();
    },
  });
  return (
    <>
      <svg width="40" height="40">
        <use href={`${icons}#wallet`}></use>
      </svg>
      <h1>{t('app_name')}</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">{t('email')}</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : null}
        <label htmlFor="password">{t('pass')}</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          autoComplete="off"
        />
        {formik.touched.password && formik.errors.password ? (
          <p>{formik.errors.password}</p>
        ) : null}

        <button type="submit">{t('login')}</button>
        <NavLink to="/register">{t('register')}</NavLink>
      </form>
    </>
  );
};

export default LoginForm;
