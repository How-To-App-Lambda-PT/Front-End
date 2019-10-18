import React from 'react'
import { Form, Segment } from 'semantic-ui-react'
import axios from 'axios'
import { useFormInput } from '../hooks';

const Login = props => {

  const initialValues = {
    username: '',
    password: ''
  }
  const [values, changeHandler] = useFormInput(initialValues)

  const submitHandler = () => {
    axios
      .post(`https://bw-how-to.herokuapp.com/login`, values)
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token)
        props.history.push('/user')
      })
      .catch(err => console.log('Login: POST:', err))
  }

  return (
    <Segment>
      <Segment>
        <Form onSubmit={submitHandler}>
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

export default Login