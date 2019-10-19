import React, { useState } from 'react';

const CreateAccount = props => {

  const [create, setCreate] = useState({
    email: "",
    password: "",
    verifyPassword: ""
  });

  console.log(props)

  return (
    <form className="createAccount">
      <input type='text' />
    </form>
  );

}

export default CreateAccount;