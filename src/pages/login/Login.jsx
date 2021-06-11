import React, { useState, useEffect } from 'react';

import { FormContainer, Container } from './styles';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import sendRequest from '../../utils/fetch';
import { useHistory } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const history = useHistory();

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

  function goToUsersList() {
    history.push("/users");
  }

  function stopLoading() {
    setLoading(false);
  }

  function handleSubmit() {
    let hasErrors = validateFields();
    if(!hasErrors) {
      setLoading(true);
      let body = {
        email,
        password
      }
      sendRequest("login", "POST", body, goToUsersList, null,  stopLoading);
    }
  }

  useEffect(() => {
    let errorsCopy = {...errors};
    errorsCopy.email = "";
    setErrors(errorsCopy);
  }, [email])

  useEffect(() => {
    let errorsCopy = {...errors};
    errorsCopy.password = "";
    setErrors(errorsCopy);
  }, [password])

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