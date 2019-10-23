import React, { useState } from "react";
// import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { withFormik, Form, Field } from 'formik';

function CreateAccount() {
// const CreateAccount = props => {
//   const [account, setAccount] = useState({
//     email: "",
//     password: "",
//     verifyPassword: ""
//   });

//   const onInputChange = event => {
//     setAccount({
//       ...account,
//       [event.target.name]: event.target.value
//     });
//   };

  

  return (
    <Form>
      <label>
        Email:
          <Field type='text' name='username' />
      </label>
      {/* <FormGroup>
        <label for="Email">Email</label>
        <Field
          type="text"
          name="email"
          id="email"
        />
      </FormGroup>
      <FormGroup>
        <label for="Password">Password</label>
        <Field
          type="password"
          name="password"
          id="password"
        />
      </FormGroup>
      <FormGroup>
        <label for="verifyPassword">Verify Password</label>
        <Field
          type="password"
          name="verifypassword"
          id="vPassword"
        />
      </FormGroup> */}

      <button>Submit</button>
    </Form>
  );
};

const FormikCreateAccount = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  handleSubmit(values) {
    console.log(values);
  }
})(CreateAccount);

export default CreateAccount;