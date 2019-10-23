import React, { useContext } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/index";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import Error from "./Error";
import { Container, Col, FormGroup, Label, Button } from "reactstrap";

const SignIn = props => {

  const [_, setUsers] = useContext(UserContext);

  const initialValues = { username: "", password: "" };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .max(255)
      .required("Please enter your username"),
    password: Yup.string()
      .min(8, "Password is too short, must be at least 8 characters")
      .required("Please enter a password")
  });


  return (
    <Container className="super-cont">
      <header className="login-header">
        <h4 className="login-logo">How-To</h4>
      </header>
      <Container className="login-cont">
        <div className="sub-cont">
          <h1 className="login-text">Sign In</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              axios
                .post(`https://bw-how-to.herokuapp.com/login`, values)
                .then(res => {
                  console.log(res.data);
                  console.log("POST", values);
                  localStorage.setItem("token", res.data.token);
                  localStorage.setItem("id", res.data.id);
                  setUsers(res.data);
                  setSubmitting(false);
                  resetForm();
                  props.history.push("/dashboard");
                })
                .catch(err => console.log("Login: POST:", values, err));
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
              <Form className="login-form" onSubmit={handleSubmit}>
                <Col>
                  <FormGroup className="user-group">
                    <Label className="user-label" htmlFor="username">
                      Username
                    </Label>
                    <Field
                      type="text"
                      onBlur={handleBlur}
                      name="username"
                      values={values.username}
                      onChange={handleChange}
                      className="login-field"
                    />
                    <Error
                      touched={touched.username}
                      message={errors.username}
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup className="pass-group">
                    <Label className="user-label" htmlFor="password">
                      Password
                    </Label>
                    <Field
                      type="password"
                      onBlur={handleBlur}
                      name="password"
                      values={values.password}
                      onChange={handleChange}
                      className="login-field"
                    />
                    <Error
                      touched={touched.password}
                      message={errors.password}
                    />
                  </FormGroup>
                </Col>
                <div className="button-div">
                  <Button
                    className="login-button"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </Container>
  );
};

export default SignIn;
