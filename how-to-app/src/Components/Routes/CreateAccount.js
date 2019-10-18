import React, { useState } from 'React';

const CreateAccount = props => {

  const [create, setCreate] = useState({
    email: "",
    password: "",
    verifyPassword: ""
  });

  console.log(props)

  return (
    <form>
      <input type='text' />
    </form>
  );

}

export default CreateAccount;