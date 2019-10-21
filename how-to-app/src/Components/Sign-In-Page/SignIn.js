import React, { useContext } from "react";
import { Segment } from "semantic-ui-react";
import axios from "axios";
import { useFormInput } from "../../utils/hooks";
import { UserContext } from "../../contexts/index";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import Error from "./Error";

const SignIn = props => {
  const [user, setUsers] = useContext(UserContext);

  const initialValues = { username: "", password: "" };
  const [values, changeHandler] = useFormInput(initialValues);

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .max(255)
      .required("Please enter your username"),
    password: Yup.string()
      .min(8, "Password is too short, must be at least 8 characters")
      .required("Please enter a password")
  });

  // const submitHandler = ;

  return (
    <Segment>
      <h1>Sign In</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={({ setStatus, setSubmitting, resetForm }) => {
          axios
            .post(`https://bw-how-to.herokuapp.com/login`, values)
            .then(res => {
              console.log(res.data);
              console.log(values);
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("id", res.data.id);
              setUsers([...user, values]);
              setStatus(res.data);
              setSubmitting(false);
              resetForm();
              props.history.push("/dashboard");
            })
            .catch(err => console.log("Login: POST:", err));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleSubmit,
          handleChange,
          isSubmitting
        }) => (
          <Form onSubmit={handleSubmit}>
            <label>
              Username
              <Field
                type="text"
                onBlur={handleBlur}
                name="username"
                values={values.username}
                onChange={handleChange}
                className={
                  touched.username && errors.username ? "has-error" : null
                }
              />
              <Error touched={touched.username} message={errors.username} />
            </label>
            <label>
              Password
              <Field
                type="password"
                onBlur={handleBlur}
                name="password"
                values={values.password}
                onChange={handleChange}
                className={
                  touched.password && errors.password ? "has-error" : null
                }
              />
              <Error touched={touched.password} message={errors.password} />
            </label>
            <button type="submit" disabled={isSubmitting}>
              Log In
            </button>
          </Form>
        )}
      </Formik>
    </Segment>
  );
};

export default SignIn;
