import React, { useState } from "react";
// import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function CreateAccount({errors, touched}) {
  return (
    <Form>
      <div>
        {touched.email && errors.email && <p>{errors.email}</p>} 
          <label>
            Email
            <Field type="text" name="email" />
          </label>
      </div>

      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
          <label>
            Password
            <Field type="text" name="password" />
          </label>
      </div>

      <label>
        Verify Password
        <Field type="text" name="verifyPassword" />
      </label>

      <button>Submit</button>
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