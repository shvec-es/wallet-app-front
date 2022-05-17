import React from 'react';

import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useFormik } from 'formik';
import { logIn } from '../../redux/auth/auth-operations'
import {FormWrapper, FormBg,AppTitleWrapper, AppTitle, Label, Input, Form, InputIcon,SignInBtn, SignUpBtn, ErrorText } from './LoginForm.styled';
import * as Yup from 'yup';
import icons from 'images/sprite.svg';

const LoginForm = () => {
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
    // handleChange: (e) => { 
    //   const { email, password } = e.target;
    //   formik.setFieldValue('email', email);
    //   formik.setFieldValue('password', password);
    // },

      onSubmit: (values, { resetForm }) => {
          const { email, password } = values;
            dispatch(logIn({email, password}));
          
      console.log('Form data:', values);
      resetForm();
    },
  });
  return (
   
    <FormWrapper>
     {/* <FormBg> */}
        {/* <AppTitleWrapper>
           <svg width="40" height="40">
        <use href={`${icons}#wallet`}></use>
      </svg>
      <AppTitle>Wallet</AppTitle>
        </AppTitleWrapper>
      */}
      <Form onSubmit={formik.handleSubmit}>
          <Label >
              <InputIcon width="24" height="24">
        <use href={`${icons}#email`}></use>
      </InputIcon>
               <Input
                    
          name="email"
            type="email"
              placeholder='E-mail'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
            value={formik.values.email}/>
        </Label>
       
            
     
     
  
          
       
        {formik.touched.email && formik.errors.email ? (
          <ErrorText>{formik.errors.email}</ErrorText>
        ) : null}
          <Label >
              <InputIcon width="24" height="24">
        <use href={`${icons}#lock`}></use>
      </InputIcon>
             <Input
         
          name="password"
            type="password"
            placeholder='Password'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          autoComplete="off"
        />
        </Label>
       
        {formik.touched.password && formik.errors.password ? (
          <ErrorText>{formik.errors.password}!</ErrorText>
        ) : null}

          <SignInBtn type="submit">Sign in</SignInBtn>
          <SignUpBtn>
            
          <NavLink to="/register">
            Sign Up
          </NavLink>
     </SignUpBtn>

    
        
   
        </Form>
       {/* </FormBg> */}
    </FormWrapper>
  );
};


export default LoginForm;
