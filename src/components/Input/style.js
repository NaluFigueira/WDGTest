import styled, {css} from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  ${props => !props.hasError && css`
    &:not(:last-child) {
        margin-bottom: 16px;
    }
  `}

  label {
      font-size: 14px;
      margin-bottom: 4px;
      color: ${props => props.theme.labelColor};
  }

  input {
      border: none;
      border-bottom: 1px solid ${props => props.theme.textColor};
      ${
         props => props.hasError && css`
            border: 2px solid ${props => props.hasError ? props.theme.red : props.theme.textColor};
          `
      }
      background-color: ${props => props.theme.inputBackground};
      padding: 8px;
      color: ${props => props.theme.inputText}
  }

  span {
    color: ${props => props.theme.red};
    font-size: 12px;
    margin-top: 4px;
    margin-bottom: 16px;
  }

  svg {
      position: absolute;
      right: 8px;
      bottom: 50%;
  }

  ${
      props => props.required && css`
        label:after {
            content: " *";
            color: ${props => props.theme.red};
            font-size: 14px;
        }
      `
    }
`;