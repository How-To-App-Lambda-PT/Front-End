import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { withFormik, Field } from "formik";
import * as Yup from "yup";
import Header from '../Header';
import './CreateAccount.css';

function CreateAccount({errors, touched}) {
  return (

    <Form>
      <div className='email'>
        {touched.email && errors.email && <p>{errors.email}</p>} 
          <Label>Email</Label>
            <Field type="text" name="email" />
      </div>

      <div className='password'>
        {touched.password && errors.password && <p>{errors.password}</p>}
          <Label>Password</Label>
            <Field type="text" name="password" />
      </div>

      <div className='verifyPassword'>
        <Label>Verify Password</Label>
          <Field type="text" name="verifyPassword" />
      </div>
   
      <div className='submit'>
        <Button>Submit</Button>
      </div>
    </Form>
  ); 
}

const FormikCreateAccount = withFormik({
  mapPropsToValues({ email, password, verifyPassword }) {
    return {
      email: email || "",
      password: password || "",
      verifyPassword: verifyPassword || ""
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(6)
      .required()
  }),

  handleSubmit(values) {
    console.log(values);
  }
})(CreateAccount);

export default FormikCreateAccount;