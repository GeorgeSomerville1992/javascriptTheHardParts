import React from 'react';
import useInput from '../hooks/useInput';
import { Input, Button } from 'antd';

const Login = () => {
  const email = useInput("", { persist: "email" });
  const password = useInput("", { persist: "password" });
  const clearFields = () => {
    // email.clear()
    // password.clear()
    email.reset()
    password.reset()
  };

  return (
    <div>
      <h3> Login component </h3>
      <Input type="text" value={email.value} onChange={email.onChange}  initialValue="insert something here" />
      <Input type="password" value={password.value} onChange={password.onChange} initialValue="insert something here" />
      <Button onClick={clearFields}> Reset </Button>
    </div>
  )
}

export default Login;
