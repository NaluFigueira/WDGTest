import styled from 'styled-components';

export const ListContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    height: auto;

    @media (min-width: 450px) and (max-width: 740px) {
        & {
            grid-template-columns: auto auto !important;
        }
    }
    
    @media (max-width: 450px) {
        & {
            grid-template-columns: auto !important;
        }
    }
`;

export const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 32px 0px;

    img {
        max-width: 50%;
        border-radius: 50%;
        margin-bottom: 8px;
        border: 4px solid ${props => props.theme.primary}
    }

    span {
        color: ${props => props.theme.textColor};
        font-size: 20px;
    }

    div {
        button {
            margin: 0px 8px;
        }
    }
`;

export const PageCounter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    span{
        color: ${props => props.theme.primary};
        font-size: 24px;
    }

    svg {
        margin: 0px 24px;
        font-size: 32px;
        cursor: pointer;
    }
`;