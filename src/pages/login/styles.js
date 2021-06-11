import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
`;

export const FormContainer = styled.div`
    width: 50vw;
    margin: 0 auto;
    box-shadow: 2px 2px 16px -1px rgba(0,0,0,0.25);
    border-radius: 4px;
    padding: 32px;

    @media (max-width: 1200px) {
        & {
            width: 70% !important;
        }
    }
`;


