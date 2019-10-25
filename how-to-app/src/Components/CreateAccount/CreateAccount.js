import { Container, Button, FormGroup, Label } from "reactstrap";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { withFormik, Field, Form } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import './CreateAccount.css'
import { axiosWithAuth } from "../../utils/axiosWithAuth";
// import '../../App.css';

function CreateAccount({errors, touched, values,}, props) {
  return (

    <Container className="super-cont">
      <header className="login-header">
       <h4 className="login-logo">How-To</h4>
      </header>

      <Container className="login-cont">

        <Form>
          <div className='email'>
            {/* {touched.email && errors.email && <p>{errors.email}</p>}  */}
              <Label>Username</Label>
                <Field type="text" name="username" />
          </div>

          <div className='password'>
            {touched.password && errors.password && <p>{errors.password}</p>}
              <Label>Password</Label>
                <Field type="password" name="password" />
          </div>

          <div className='verifyPassword'>
            <Label>Verify Password</Label>
              <Field type="password" name="verifyPassword" />
          </div>
      
          <div className='submit'>
            <Link to='../Dashboard-page/Dashboard.js'>
              <Button type='submit'>Submit</Button> 
            </Link>             
          </div>
        </Form>

      </Container>

    </Container>
  ); 
}

const FormikCreateAccount = withFormik({
  mapPropsToValues({ username, password, verifyPassword, values, props }) {
    console.log(values);
    return {
      username: username || "",
      password: password || "",
      verifyPassword: verifyPassword || ""
      // history: props.history
    };
  },

  validationSchema: Yup.object().shape({
    // email: Yup.string()
    //   .email()
    //   .required(),
    password: Yup.string()
      .min(6)
      .required()
  }),

  handleSubmit: (values) => {
    const body = {
      "username": values.username,
      "password": values.password, 
      "type": "creator"
    }
    axios
      .post("https://bw-how-to.herokuapp.com/register", body)
      .then(res => {
        console.log(res, values)
        // const jwtToken = res.data.token,
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("user", res.data.id)
        // props.history.push("/userpagenewsfeed")
      })
      .catch(err => console.log(err, values));
  },
})(CreateAccount);

export default FormikCreateAccount;