import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { UserContainer } from '../users_list/styles';
import Input from '../../components/Input/Input';
import sendRequest from '../../utils/fetch';
import { FormContainer } from '../login/styles';
import Button from '../../components/Button/Button';

// import { Container } from './styles';

function EditUser() {
  const {id} = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: ""
  });
  const history = useHistory();

  function turnLoadingOff() {
    setLoading(false);
  }

  function setData(response) {
    setFirstName(response.data.first_name);
    setLastName(response.data.last_name);
    setUser(response.data);
  }

  useEffect(() => {
    setLoading(true);
    sendRequest(`users/${id}`,"GET", null,setData,null,turnLoadingOff);
  }, [id])

  useEffect(() => {
    let errorsCopy = {...errors};
    errorsCopy.firstName = "";
    setErrors(errorsCopy);
  }, [firstName])

  useEffect(() => {
    let errorsCopy = {...errors};
    errorsCopy.lastName = "";
    setErrors(errorsCopy);
  }, [lastName])

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
    checkIfRequiredFieldIsFilled(firstName, "firstName", "First name", errorsCopy);
    checkIfRequiredFieldIsFilled(lastName, "lastName", "Last name", errorsCopy);
    setErrors(errorsCopy);

    return checkIfThereAreErrors(errorsCopy);
  }

  function goToUsersList() {
    alert("Usuário editado com sucesso!");
    history.push("/users");
  }

  function handleSubmit() {
    let hasErrors = validateFields();
    console.log(hasErrors)
    if(!hasErrors) {
        setLoading(true);
        let body = {
          first_name: firstName,
          last_name: lastName
        }
        sendRequest(`users/${user.id}`, "PUT", body, goToUsersList, null,  turnLoadingOff);
    }
  }

  return (
    <React.Fragment>
        {
            loading && <span>Carregando usuário...</span>
        }
        {
            !loading && user &&
            <React.Fragment>
                <UserContainer key={user.id}>
                    <img src={user.avatar} alt={`${firstName} ${lastName} avatar`}/>
                    <span>{firstName} {lastName}</span>
                    <span>{user.email}</span>
                </UserContainer>
                <FormContainer>
                    <Input 
                      required={true} 
                      label={"First name"} 
                      type={"text"} 
                      tagName={"user-first-name"}
                      value={firstName}
                      onChange={setFirstName}
                      errorMessage={errors.firstName}
                      />
                    <Input 
                      required={true} 
                      label={"Last name"} 
                      type={"text"} 
                      tagName={"user-last-name"}
                      value={lastName}
                      onChange={setLastName}
                      errorMessage={errors.lastName}
                    />
                    <Button title={"Save changes"} onClick={handleSubmit} loading={loading}/>
                </FormContainer>
            </React.Fragment>
        }
    </React.Fragment>
  );
}

export default EditUser;