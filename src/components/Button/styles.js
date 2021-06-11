import styled from 'styled-components';

export const CustomButton = styled.button`
    width: 100%;
    background-color: ${props => props.disabled ? props.theme.buttonDisabled : props.theme.primary};
    margin: 4px 0px;
    padding: 8px 8px;
    font-size: 16px;
    color:  white;
    border: none;
    cursor: pointer;
`;
