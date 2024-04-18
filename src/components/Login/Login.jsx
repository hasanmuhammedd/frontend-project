import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik'; 
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';
import axiosConfig from '../../axios/axiosConfig';
import { Link, useNavigate } from 'react-router-dom'; 
import ValidationError from '../ValidationError/ValidationError';
import { UserAuth } from '../../Utils/UserAuth';
import { useContext } from 'react';
const Login = () => {
  const navigate = useNavigate();
  const { setToken } = useContext(UserAuth);

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required('Please Enter Email'),
    password: Yup.string().min(8).max(20).required('Please Enter Password'),
  });

  async function handleLoginForm(values) {
    try {
      const res = await axiosConfig({
        url: '/login',
        method: 'Post',
        data: values,
      });
      const { data } = res; // Destructure data from response
      toast.success('Success Login...');
      navigate('/Home');
      setToken(true);
      localStorage.setItem("user_token", data.accessToken);
      localStorage.setItem("isAdmin", JSON.stringify(data.user.isAdmin));
      console.log(data.accessToken);
      console.log(data.user.isAdmin);
    } catch (err) {
      console.log(err.response.data);
      toast.error('Check Email or Password...');
    }
  }

  const onSubmit = (values) => {
    handleLoginForm(values);
  };

  return (
    <div className="login-form">
      <div className="login-form-header">
        <h2>Login</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {(formik) => (
            <>
              {console.log(formik)}
              <Form>
                <div className="input-group">
                  <Field name="email" placeholder="Enter Your Email" />
                  <ErrorMessage name="email" component={ValidationError} />
                </div>
                <div className="input-group">
                  <Field type="password" name="password" placeholder=" Password" />
                  <ErrorMessage name="password" component={ValidationError} />
                </div>
                <div className="form-btn">
                  <button type="submit">Login</button>
                  <label /> <Link className="linkkk" to="/register">Create New Account</Link>
                </div>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
