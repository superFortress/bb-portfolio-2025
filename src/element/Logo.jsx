/* I M P O R T
* * * * * * */

// Module
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

/* S T Y L E D
* * * * * * */

const StyledAnchor = styled.a`

    color: var(--logo-color);

    font-family: 'Inter Tight', sans-serif;
    font-weight: 700;

    position: fixed;
    z-index: var(--logo-z-index);

    align-items: center;
    display: inline-flex;
    gap: 0.025em;

    pointer-events: all;
    user-select: none;

    @media (min-width: 768px) {
        font-size: 20px;

        padding: 0 15px;
        height: 45px;

        top: 35px;
        left: 35px;
    }

    @media (max-width: 767px) {
        font-size: 16px;

        padding: 0 10px;
        height: 35px;

        top: 10px;
        left: 5px;
    }

    span {
        position: relative;
        animation: header-logo-bounce 1.2s infinite ease-in-out;
    }

    span:nth-child(5n + 1) {
        transform: rotate(-4deg);
    }

    span:nth-child(5n + 2) {
        animation-delay: -0.4s;
    }

    span:nth-child(5n + 3) {
        margin-right: 0.5px;
        transform: rotate(2deg);
        animation-delay: -0.8s;
    }

    span:nth-child(5n + 4) {
        margin-right: 1px;
        transform: rotate(-2deg);
        animation-delay: -0.2s;
    }

    span:nth-child(5n + 5) {
        transform: rotate(6deg);
        animation-delay: -0.6s;
    }

    @keyframes header-logo-bounce {
        0% { top: -2px }
        50% { top: 1px }
        100% { top: -2px }
    }

`;

/* E X P O R T
* * * * * * */

export default function Logo() {

    // A S S I G N
    
    // Variable
    const navigate = useNavigate();

    // R E T U R N

    return <StyledAnchor onClick={() => navigate('/')}>
        {'Boriz'.split('').map((entry, index) => (
            <span key={index}>{entry}</span>
        ))}
    </StyledAnchor>;

}