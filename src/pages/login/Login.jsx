import React, { useState } from 'react';

import { FormContainer, Container } from './styles';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import sendRequest from '../../utils/fetch';

function Login() {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);

  function checkIfRequiredFieldIsFilled(field, fieldName, labelName, errorsCopy) {
    if(!field) {
      errorsCopy[fieldName] = `${labelName} is required`;
    }
  }

  function checkIfThereAreErrors(errorsObject) {
    return Object.keys(errorsObject).some(field => errorsObject[field].length > 0);
  }

  function validateFields() {
    let errorsCopy = {...errors};
    checkIfRequiredFieldIsFilled(email, "email", "E-mail", errorsCopy);
    checkIfRequiredFieldIsFilled(password, "password", "Password", errorsCopy);
    setErrors(errorsCopy);

    return checkIfThereAreErrors(errorsCopy);
  }

  function stopLoading() {
    setLoading(false);
  }

  function handleSubmit() {
    setLoading(true);
    let hasErrors = validateFields();
    if(!hasErrors) {
      let body = {
        email,
        password
      }
      sendRequest("login", "POST", body, null, null,  stopLoading);
    }
  }

  return (
    <Container>

      <FormContainer>
          <Input 
            required={true} 
            label={"E-mail"} 
            type={"email"} 
            tagName={"user-email"}
            value={email}
            onChange={setEmail}
            errorMessage={errors.email}
            />
          <Input 
            required={true} 
            label={"Password"} 
            type={"password"} 
            tagName={"user-password"}
            value={password}
            onChange={setPassword}
            errorMessage={errors.password}
          />
          <Button title={"Sign in"} onClick={handleSubmit} loading={loading}/>
      </FormContainer>
    </Container>
  );
}

export default Login;