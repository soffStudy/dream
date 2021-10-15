import styled from 'styled-components'

const FooterWrapper = styled.div`

    background-color: black;

    height: 200px;
    /* background-color: #2D285E; */
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: url('bg.jpg');
    background-position: top center;
    background-size: 150% 150%;
    animation: animation-name 15s ease infinite;
    /* https://image.freepik.com/free-vector/technology-circuit-lines-shiny-banner_1017-33024.jpg */
    p{
        cursor: pointer;
    }

    @keyframes animation-name {   
            0%{
                background-position: 0% 50%;
            }
            50%{
                background-position: 100% 50%;
            }
            100%{
                background-position: 0% 50%;
            }
        }

`;

export default FooterWrapper;