import { Container, Button, Label } from "reactstrap";
import React from "react";
import { withFormik, Field, Form } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import './CreateAccount.css'


function CreateAccount({ errors, touched, values, }, props) {


  return (

    <Container className="super-cont">
      <header className="login-header">
        <h4 className="login-logo">How-To</h4>
      </header>

      <Container className="create-cont">

        <Container>
          <Form>
            <div className="email-cont">
              <div className='email-text'>
                {/* {touched.email && errors.email && <p>{errors.email}</p>}  */}
                <Label>Username</Label>
              </div>
              <div>
                <Field className="email-text" type="text" name="username" />
              </div>
            </div>

            <div className='password'>
              {touched.password && errors.password && <p>{errors.password}</p>}
              <Label>Password</Label>
            </div>
            <div>
              <Field type="password" name="password" />
            </div>

            <div className='verifyPassword'>
              <Label>Verify Password</Label>
            </div>
            <div>
              <Field type="password" name="verifyPassword" />
            </div>

            <div className="button-div">
              <Button className="login-button" type="submit">Submit</Button>
            </div>
          </Form>
        </Container>

        <Container>
          <img className="img-hanger" alt='' src="https://s3-alpha-sig.figma.com/img/e3e4/c997/7b42a1a7351c0d5ec11ba9703739e543?Expires=1572825600&Signature=KVxMA1MpqpQz8p2BnuGfi9dcsDbw2CBtR-fSZj32PZ0-0MnTH9jfJMCNUO4dySmyPit2Csk399d4ruT52mvCWiAUEh3WYVeUAtIxjV6I~lnt6MaIXaZkk0LLcxgtO5HdIwj7sIzsEmgeACXNC5QadoTzIZQUZNc2Qs5ywQACpW6rRDPPUpcYIHNCMWojg8woqbKRHM4Z0miCTQqosOLTSt9xaK9dKsiKMezkUz7i~gKTjROOh6rI2J6c6Jb8UlpKv6Tge3gCgcUgNtKGw7~GW-vnxlh4UDmjVrcjtrBlGArfIB~xJ07Qp9AHB0MIAaRwspCa6ml8OyQBY5LVeKBr5A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
        </Container>

      </Container>

    </Container>
  );
}

const FormikCreateAccount = withFormik({
  mapPropsToValues({ username, password, verifyPassword, history }) {

    return {
      username: username || "",
      password: password || "",
      verifyPassword: verifyPassword || "",
      history: history
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
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("user", JSON.stringify(res.data))
        values.history.push('/userpagenewsfeed')
      })
      .catch(err => console.log(err, values));
  },
})(CreateAccount);

export default FormikCreateAccount;