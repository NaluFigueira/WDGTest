import React from 'react';

import {RiErrorWarningFill} from 'react-icons/ri';
import { InputContainer } from './style';
import colors from '../../theme/colorPalette';

function Input({
  required, 
  label, 
  type, 
  tagName, 
  errorMessage,
  value,
  onChange,
}) {
  function onChangeInputValue(event) {
    onChange(event.target.value);
  }

  return (
    <InputContainer required={required} hasError={errorMessage}>
        <label htmlFor={tagName}>
            {label}
        </label>
        <input type={type} name={tagName} value={value} onChange={onChangeInputValue} id={tagName}/>
        {errorMessage && 
            <React.Fragment>
                <RiErrorWarningFill color={colors.red} />
                <span>{errorMessage}</span>
            </React.Fragment>
        }
    </InputContainer>
  );
}

export default Input;