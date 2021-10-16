import styled from 'styled-components'

const FooterWrapper = styled.div`

    height: 50px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    animation: animation-name 15s ease infinite;
    background: linear-gradient(-45deg, #040139, #0e0b4b, #3183CB, #040139);
    background-size: 400% 400%;

    .css-11w94w9-MuiTableCell-root {
        padding-left: 10px;
    }

    p{
        cursor: pointer;
        color: blue;
        text-shadow: 0 0 5px #FFF, 0 0 5px #FFF, 0 0 10px #FFF, 0 0 20px #00E7FF, 0 0 15px #00E7FF, 0 0 20px #00E7FF, 0 0 35px #00E7FF, 0 0 55px #00E7FF, -3px -10px 8px rgba(206,89,55,0.22);
        animation-name: animation-name2;
    }
    .geeks {
            padding: 200px;
            text-align: center;
        }
 
        section {
            width: 100%;
            min-height: 300px;
        }
 
        .pattern {
            position: relative;
            background-color: #3bb78f;
            background-image: linear-gradient(315deg,
                    #3bb78f 0%, #0bab64 74%);
        }
 
        .pattern:before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 250px;
            background-size: cover;
            background-repeat: no-repeat;
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