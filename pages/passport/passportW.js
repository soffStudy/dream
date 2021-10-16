import styled from "styled-components";

const PasswordWrapper = styled.div`
    min-height: 100vh;
    font-family: 'Josefin Sans', sans-serif;
    margin-top: 100px;

    .passport{
       padding: 10px;
        transition: .5s;
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
        box-shadow: 9px 9px 14px #00000078,
            -9px -9px 14px #FFFFFF26;

        .dreamEdu{
            display: none;
            transition: 1s !important;
            transition-duration: 1s !important;
        }

        &:hover {
            transition: .5s !important;
            transform: translateY(-10px);
            box-shadow: 13px 13px 14px #00000078,
            -9px -9px 14px #FFFFFF26;
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