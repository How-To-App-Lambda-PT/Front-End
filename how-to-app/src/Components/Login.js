import React from 'react'
import { Form, Segment } from 'semantic-ui-react'
import axios from 'axios'
import { useFormInput } from '../hooks';

const Login = props => {

  const initialValues = {
    username: '',
    password: ''
  }
  const [values, changeHandler] = useFormInput()

  const submitHandler = () => {
    axios
      .post(`https://bw-how-to.herokuapp.com/login`, values)
      .then()
  }

  return (
    <Segment>
      <Segment>
        <Form>
          <Form.Input
            fluid
            label='Username'
            name='username'
            placeholder='Usename'
            values={values.username}
            onChange={changeHandler}
          />
          <Form.Input
            fluid
            label='Password'
            name='password'
            placeholder='Password'
            values={values.password}
            onChange={changeHandler}
          />
          <Form.Button>Log In</Form.Button>
        </Form>
      </Segment>
    </Segment>
  )
}