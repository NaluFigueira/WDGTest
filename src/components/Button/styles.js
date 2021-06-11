import styled, { css } from 'styled-components';

export const CustomButton = styled.button`
    width: 100%;
    background-color: ${props => props.disabled ? props.theme.buttonDisabled : props.theme.primary};
    margin: 4px 0px;
    padding: 8px 8px;
    font-size: 16px;
    color:  ${props => props.color || 'white'};
    border: none;
    cursor: pointer;

    ${
        props => props.type === "link-button" && css`
            width: auto;
            background-color: white;
            color: ${props => props.color || props.theme.secondary};
            border: none;
            border-bottom: 1px solid ${props => props.color || props.theme.secondary}
        `
    }
`;
