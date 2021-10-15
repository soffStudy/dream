import styled from "styled-components";

const PasswordWrapper = styled.div`
    min-height: 100vh;
    font-family: 'Josefin Sans', sans-serif;

    .passport{
        width: 400px;
        height: 200px;
        border-radius: 15px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 30px;
        cursor: pointer;
        animation: animation-name 15s ease infinite;
        background: linear-gradient(-45deg, #040139, #0e0b4b, #3183CB, #040139);
        background-size: 400% 400%;

        .dreamEdu{
            display: none;
            transition: 1s !important;
            transition-duration: 1s !important;
        }

        &:hover {
            transition: 1s !important;
            transform: scale(1.1);
            box-shadow: 9px 9px 14px #00000078,
            -9px -9px 14px #FFFFFF26;;
           
        }
    }

    .btns{
        display: flex;
        justify-content: center;
        align-items: center;
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

export default PasswordWrapper;