import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';

import * as Yup from 'yup';
import ValidationError from '../ValidationError/ValidationError';
import axiosConfig from "../../axios/axiosConfig";
import {toast} from "react-hot-toast";
import { Link, useNavigate } from 'react-router-dom'; 






const Register = () => {
  const navigate = useNavigate();
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(8).max(20).required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(8).max(20).required(),
    confirm_password: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

 async function handleRegisterForm(values){
  try{
    const res =  await axiosConfig({
      url: "/register",
      method:"POST",
      data: values,
    });
    toast.success("Success Register...");
    navigate('/login');
    
    
  
  }catch(err){
    console.log(err.response.data);
    console.log(err);
  }
    
    
  
  }

  const onSubmit = (values) => {
    handleRegisterForm(values);
  };

  return (
    <div className="login-form">
      <div className="login-form-header">
        <h2>Register</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {(formik) => (
            <>
              <Form>
                <div className="input-group">
                  <Field name="name"placeholder="Enter Your Name"/>
                  <ErrorMessage name="name"  component={ValidationError} />
                </div>
                <div className="input-group">
                  <Field name="email"placeholder="Enter Your Email"/>
                  <ErrorMessage name="email" component={ValidationError} />
                </div>
                <div className="input-group">
                  <Field type="password" name="password" placeholder=" Password"/>
                  <ErrorMessage component={ValidationError} name="password" />
                </div>
                <div className="input-group">
                  <Field type="password" name="confirm_password" placeholder="Confirm Password" />
                  <ErrorMessage component={ValidationError} name="confirm_password" />
                </div>
                <div className="form-btn">
                  <button type="submit">Register</button>
                  <label />
                  <Link className="linkkk" to="/login">
                    Have an Account
                  </Link>
                </div>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
