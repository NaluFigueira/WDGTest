import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;

    div {
        margin: 0 auto;
        text-align: center;
        
        h2 {
            color: ${props => props.theme.textColor}
        }
    }
`;